const express = require('express')
const app = express()
app.use(express.static('public'))
const _ = require('lodash')
const fs = require("fs");
const server = require('http').createServer(app);
const io = require('socket.io')(server);
let gamename = 'test';

let rooms = '{"rooms":[]}'
let started = '{"started":[]}'
let ended = '{"ended":[]}'

io.on('connection', (socket) => {
  socket.on('summersong', (e) => {
    socket.to(e.room).emit('summersong', e.name)
  });
  socket.on('upgrade', (e) => {
    console.log(`Room: ${e.room}, Upgrade: ${e.upgrade}, User: ${e.user}, Level: ${e.level}`)
    socket.to(e.room).emit('upgradebought', {user: e.user, upgrade: e.upgrade, level: e.level})
  });
  socket.on('join', (e) => {
    socket.join(e.room)
    
    console.log(`New Connection > ${e.username}, ${socket.id}, ${e.room}`)
    socket.to(e.room).emit('joined', e.username)
  })
  socket.on('joinmain', (e) => {
    socket.join(e.room)
    var obj = JSON.parse(rooms);
    obj['rooms'].push([e.room]);
    jsonStr = JSON.stringify(obj);
    rooms = jsonStr
    console.log(jsonStr)
    
    console.log(`New Connection > ${e.username}, ${socket.id}, ${e.room}`)
    socket.to(e.room).emit('joined', e.username)
  })
  socket.on('start', (e) => {
    console.log('starting game: '+e.room)
    var obj = JSON.parse(started);
    obj['started'].push([e.room]);
    jsonStr = JSON.stringify(obj);
    started = jsonStr
    console.log(jsonStr)
    socket.to(e.room).emit('start', e.users)
    console.log('emitted!')
  })
  socket.on('leaderboard', (e) => {
  socket.to(e.room).emit('leaders', e.content)
  })
  socket.on('roomclose', (c) => {
    console.log(c.room+" closed.")
    rooms = rooms.replace(`["${c.room}"]`, '')
    rooms = rooms.replace(`[,`, '[')
    rooms = rooms.replace(`],`, ']')
    rooms = rooms.replace(`"]["`, '"],["')
    rooms = rooms.replace(`],]`, ']]')
    rooms = rooms.replace(`],,[`, '],[')
    started = started.replace(`["${c.room}"]`, '')
    started = started.replace(`[,`, '[')
    started = started.replace(`],`, ']')
    started = started.replace(`"]["`, '"],["')
    started = started.replace(`],]`, ']]')
  })
  socket.on('answer', (c) => {
    console.log(`${c.streak}, ${c.question}`)
  })
  socket.on('getrooms', (e) => {
    if (rooms.includes(`"${e.room}"`)) {
      socket.emit('roomsget', true)
    } else {socket.emit('roomsget', false)}
  })
  socket.on('getstarted', (e) => {
    if (started.includes(`"${e.room}"`)) {
      socket.emit('startedget', true)
    } else {socket.emit('startedget', false)}
  })
  socket.on('clap', (e) => {
    socket.to(e.room).emit('clap')
  })
  socket.on('kickuser', (e) => {
    console.log(e.user, ' id being kicked from', e.room)
    socket.to(e.room).emit('kickuser', e.user)
    console.log('kickuser', e.user)
  })
  const data = getGameData()
  const questions = getQuestions(data)

    socket.emit('questions', questions)

  const quizzes = showQuizzes()
  let show = getQuizzes(quizzes)

    socket.emit('quizzes', show)

  socket.on('gameend', (e) => {
    console.log('game ended: ', e.room)
    console.log('game ended standings', e.standings)
    socket.to(e.room).emit('gameend', e.standings)
    var obj = JSON.parse(ended);
    obj['ended'].push([e.room]);
    jsonStr = JSON.stringify(obj);
    ended = jsonStr
    console.log(jsonStr)
  })
  socket.on('balance', (e) => {
    socket.to(e.room).emit('balance', {username: e.username, delta: e.balance})
  })
  socket.on('getended', (e) => {
    socket.emit('endedget', ended)
  })
  socket.on('getanswer', (question) => {
    socket.emit('canswer', {answer: getAnswer(question.q), name: question.name})
    console.log(question.q, question.room)
  })

  socket.on('creategame', (name, title, author, description) => {
    fs.truncate('games/'+name+'.json', 0, () => {
      console.log('hi')
    })
    fs.appendFile('games/'+name+'.json', 
    `{
  "name": "${title}",
  "version": "1.0.0",
  "description": "${description}",
  "author": "${author}",
  "questions": [
  ]
}`
    , function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  })

  socket.on('createquestion', (name, title, correctanswer, otheranswers) => {
    console.log(name, title, correctanswer, otheranswers)
    var data = fs.readFileSync('games/'+name+'.json', function (err) {
      if (err) throw err;
      console.log('Saved!');
    });    
    data = JSON.parse(data)
    let thing = 
        {
      'title': title,
      'correct-answer': correctanswer,
      'other-answers': otheranswers
      }
    console.log(thing)
    data['questions'].push(thing)
    console.log(data)
    fs.truncate('games/'+name+'.json', 0, function() {
      console.log('hi')
    })
    fs.writeFile('games/'+name+'.json', JSON.stringify(data), function() {console.log('hi')})
  })

  app.get('/create', function(req, res) {
    res.sendFile('create.html', {root: './public'})
    if (req.query.game) {
      var data = fs.readFileSync(`games/${req.query.game}.json`, {encoding:'utf8', flag:'r'})
      socket.emit('gamedata', data)
    } else {

    }
  })  
  socket.on('getquestions', (name) => {
    setTimeout(function() {
    socket.emit('questionsquiz', getQuestionData(name))
    }, 1000)
  })
});

app.get('/host', function(req, res) {
  if (req.query.game) {
  gamename = req.query.game
  res.sendFile('host.html', {root: './public'})
  } else {
    res.send('Please Specify a Game')
  }
})

app.get('/game', function(req, res) {
  res.sendFile('game.html', {root: './public'})
})
app.get('/join', function(req, res) {
  res.sendFile('join.html', {root: './public'})
})

app.get('/index', function(req, res) {
  res.sendFile('index.html', {root: './public'})
})


app.get('/unauthorized/:reason', function(req, res) {
  if (req.params.reason=='expired') {
  res.send('<meta http-equiv="refresh" content="2; URL=/join" />This Game Has Ended. Please Rejoin')
  } else if (req.params.reason=='kicked') {
  res.send('<meta http-equiv="refresh" content="2; URL=/?id='+req.query.id+'" />You were kicked from the game. Please Rejoin')
  }
})

function getGameData(name) {
  name = 'test'
  let file = `games/${gamename}.json`;
  let data = fs.readFileSync(file, {encoding:'utf8', flag:'r'});
  data = JSON.parse(data)
  return data
}

function getQuestionData(name) {
  let file = `games/${name}.json`;
  const data = fs.readFileSync(file, {encoding:'utf8', flag:'r'});
  return JSON.parse(data)
}

function getQuestions(data) {
  var index = -1
  return data.questions.map((q) => {
    index += 1
    return {
      index: index,
      title: q.title,
      answers: _.shuffle([...q["other-answers"], q["correct-answer"]]),
      correctAnswer: q["correct-answer"],
      qnumber: Object.keys(data.questions).length
    }
  })
}

function getAnswer(question) {
  const thing = getGameData()
  question = question - 1
  return thing.questions[question]['correct-answer']
}

function showQuizzes() {
  return fs.readdirSync('games');
}

function getQuizzes(e) {
  return e.map((e) => {
    return {
      name: e
    }
  })
}

//Unrelated
app.get('/betterdiscord.css/:css', function(req, res) {
  res.send(req.params.css)
})

server.listen(process.env.PORT || 8080, () => {
  console.log(process.env.PORT || 8080)
})