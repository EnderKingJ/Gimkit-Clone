const express = require('express')
const app = express()
app.use(express.static('public'))
const server = require('http').createServer(app);
const io = require('socket.io')(server);

let rooms = '{"rooms":[]}'

io.on('connection', (socket) => {
  socket.on('makeroom', (e) => {
  })
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
    socket.to(e.room).emit('start')
  })
  socket.on('roomclose', (c) => {
    console.log(c.room+" closed.")
    rooms = rooms.replace(`["${c.room}"]`, '')
    rooms = rooms.replace(`[,`, '[')
    rooms = rooms.replace(`],`, ']')
    rooms = rooms.replace(`"]["`, '"],["')
    rooms = rooms.replace(`],]`, ']]')
  })
  socket.on('answer', (c) => {
    console.log(`${c.streak}, ${c.question}`)
  })
  socket.on('getrooms', (e) => {
    if (rooms.includes(`"${e.room}"`)) {
      socket.emit('roomsget', true)
    } else {socket.emit('roomsget', false)}
  })
  socket.on('clap', (e) => {
    socket.to(e.room).emit('clap')
  })
});

app.get('/game', function(req, res) {
  res.sendFile('game.html', {root: './public'})
})

app.get('/join', function(req, res) {
  res.sendFile('join.html', {root: './public'})
})

app.get('/', function(req, res) {
  res.sendFile('index.html', {root: './public'})
})

server.listen(process.env.PORT || 8080, () => {
  console.log(process.env.PORT || 8080)
})