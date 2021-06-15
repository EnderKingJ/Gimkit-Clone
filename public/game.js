let perquestion = 1;
let boostquestion = 1;
let multiplier = 1;
let streaksaver = false;
let totalquestions;
let questions1 = 0;
let totalattempted = 0;
const socket = io()
let totalright = 0;
let totalwrong = 0;
let nocount = 0;
let question = 0;
let minbal = -10;
let insurance = 1;
let balance = 0;

socket.emit('join', {username: localStorage.getItem('name'), room: localStorage.getItem('id')});

function questionupgrade(level) {
localStorage.setItem('streak', 0)
socket.emit('upgrade', {user: localStorage.getItem('name'), room: localStorage.getItem('id'), upgrade: 'Streak Bonus', level: level})
    $('#exit-shop').hide();
    $('#powerup-shop-open').hide();
if (level ==  2) {
  boostquestion = 3
} else if (level == 3) {
  boostquestion = 10
} else if (level == 4) {
  boostquestion = 50
} else if (level == 5) {
  boostquestion = 100
} else if (level == 6) {
  boostquestion = 1000
} else if (level == 7) {
  boostquestion = 10000
} else if (level == 8) {
  boostquestion = 100000
}
}

function multiplierupgrade(level) {
localStorage.setItem('streak', 0)
socket.emit('upgrade', {user: localStorage.getItem('name'), room: localStorage.getItem('id'), upgrade: 'Multiplier', level: level})
    $('#exit-shop').hide();
    $('#powerup-shop-open').hide();
if (level ==  2) {
  multiplier = 1.5
} else if (level == 3) {
  multiplier = 2
} else if (level == 4) {
  multiplier = 3
} else if (level == 5) {
  multiplier = 5
} else if (level == 6) {
  multiplier = 10
} else if (level == 7) {
  multiplier = 25
} else if (level == 8) {
  multiplier = 100
}
}

function insuranceupgrade(level) {
localStorage.setItem('streak', 0)
socket.emit('upgrade', {user: localStorage.getItem('name'), room: localStorage.getItem('id'), upgrade: 'Insurance', level: level})
    $('#exit-shop').hide();
    $('#powerup-shop-open').hide();
if (level ==  2) {
  insurance = 0.9
} else if (level == 3) {
  insurance = 0.8
} else if (level == 4) {
  insurance = 0.7
} else if (level == 5) {
  insurance = 0.5
} else if (level == 6) {
  insurance = 0.4
} else if (level == 7) {
  insurance = 0.25
} else if (level == 8) {
  insurance = 0.1
}
}

function boostupgrade(level) {
localStorage.setItem('streak', 0)
socket.emit('upgrade', {user: localStorage.getItem('name'), room: localStorage.getItem('id'), upgrade: 'Money Per Question', level: level})
    $('#exit-shop').hide();
    $('#powerup-shop-open').hide();
if (level ==  2) {
  perquestion = 5
} else if (level == 3) {
  perquestion = 50
} else if (level == 4) {
  perquestion = 1000
} else if (level == 5) {
  perquestion = 10000
} else if (level == 6) {
  perquestion = 100000
} else if (level == 7) {
  perquestion = 500000
} else if (level == 8) {
  perquestion = 1000000
}
}

function questionright(streak) {
totalright += 1
totalattempted += 1
streak = streak - 1
var togive = (perquestion+(streak*boostquestion))*multiplier
document.getElementById('after-question-gain').innerHTML = '$'+togive
balance = (balance*1) + (togive*1)
socket.emit('balance', {room: localStorage.getItem('id'), balance: togive, username: localStorage.getItem('name')})
}

function questionwrong() {
totalattempted += 1
totalwrong += 1
totake = insurance*(perquestion*multiplier)
document.getElementById('after-question-loss').innerHTML = '-$'+totake
balance = balance - totake
if (balance<minbal) {
  balance = minbal
}
socket.emit('balance', {room: localStorage.getItem('id'), balance: -totake, username: localStorage.getItem('name')})
}

socket.on('questions', (questions) => {
  document.getElementsByClassName('button-frame-01')[0].innerHTML = questions.map((q) => {
    var styles = _.shuffle(["b1", "b2", "b3", "b4"])
    totalquestions = q.qnumber
    var i = -1
    return `<div class='start' id='q${q.index+1}'> 
  <h1><b>${q.title}</b></h1>`+ q.answers.map((a) => {
    var buttonstyle = q['correctAnswer'] === a ? 'cbutton':'ibutton'
    i += 1
    return `<button class='sbutton ${styles[i % 4]} ${buttonstyle}'><b>${a}</b></button>`
  }).join("\n") + "</div>"
  }).join("\n")
})

socket.on('kickuser', (e) => {
  console.log(e)
  if (e===localStorage.getItem('name')) {
    console.log('kicked')
    location.href = '/unauthorized/kicked?id='+localStorage.getItem('id')
  }})

socket.on('start', (e) => {
  document.getElementById('before-start').style.display = "none"
  document.getElementById(`q${questions}`).style.display = "block"
})

socket.on('gameend', (e) => {
  console.log(e, ' e')
  const standings = e[localStorage.getItem('name')]
  console.log(standings, ' EEEEE')
  let finalplacement = standings ? standings.placement:undefined
  if (finalplacement===1) {
    finalplacement = 1+'st'
  } else if (finalplacement===2) {
    finalplacement = 2+'nd'
  } else if (finalplacement===3) {
    finalplacement = 3+'rd'
  } else {
    finalplacement = finalplacement+'th'
  }
  $('.start').remove();
  $('.correct').remove();
  $('.incorrect').remove();
  $('.button-frame-01').remove();
  document.getElementsByClassName('end-money')[0].innerHTML = '$'+balance
  document.getElementsByClassName('total-right')[0].innerHTML = totalright
  document.getElementsByClassName('total-wrong')[0].innerHTML = totalwrong
  document.getElementsByClassName('total-attempted')[0].innerHTML = totalattempted
  document.getElementsByClassName('ending-placement')[0].innerHTML = finalplacement+' Place'
  $('.after-end').fadeIn('slow')
})

  /*
  <div class="question" id="q2">
  <h1><b>What is 9+10?</b></h1>
  <button class="sbutton b1 ibutton" id="5"><b>910</b></button>
  <button class="sbutton b2 ibutton" id="6"><b>21</b></button><br>
  <button class="sbutton b3 cbutton" id="7"><b>19</b></button>
  <button class="sbutton b4 ibutton" id="8"><b>Don't Know</b></button>
  </div>
  <div class="question" id="q3">
  <h1><b>What is 32*10</b></h1>
  <button class="sbutton b1 ibutton" id="9"><b>42</b></button>
  <button class="sbutton b2 ibutton" id="10"><b>3210</b></button><br>
  <button class="sbutton b3 ibutton" id="11"><b>32</b></button>
  <button class="sbutton b4 cbutton" id="12"><b>320</b></button>
  </div>*/

setInterval(function() {
  if(questions===totalquestions+1) {
    questions = 1
    $('.start').hide();
    setTimeout(function() {
    $('#q1').show();
    }, 500)
  }
}, 100)

  console.log('loaded!')