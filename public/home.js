const socket = io();
let params = new URLSearchParams(document.location.search.substring(1));
let beep;
if (!params.get('song')) {
beep = new Audio('/sounds/music.mp3');
} else if (params.get('song')=="draw") {
beep = new Audio('/sounds/draw.mp3');
} else if (params.get('song')=="halloween") {
beep = new Audio('/sounds/halloween.mp3');
} else if (params.get('song')=="thanos") {
beep = new Audio('/sounds/thanos.mp3');
} else if (params.get('song')=="lava") {
beep = new Audio('/sounds/lava.mp3');
} 
let end = new Audio('/sounds/end.mp3');
let summer = new Audio('/sounds/summer.mp3');
let time;
if (!params.get('time')) {
  time = 600
} else {
  time = params.get('time')
}
let kicked = 0;
let clapcount = 0;
let userBalances = {};
let roomid;

$(document).ready(function() {
  document.getElementsByTagName("html")[0].style.visibility = "visible";
});

const generateroom = () => {
roomid = Math.random() * (99999 - 10000) + 10000;
roomid += ''
roomid = roomid.split('.');
roomid = roomid[0];
document.getElementById('roomid').innerHTML = roomid
localStorage.setItem('aid', roomid)
document.getElementById('startbutton').addEventListener('click', start)
}

if (localStorage.getItem('aid')) {
  socket.emit('roomclose', {room: localStorage.getItem('aid')})
  generateroom()
} else {
generateroom()
}

function play(time_in_milisec){

beep.loop = true;
beep.play();
setTimeout(() => { beep.pause(); }, time_in_milisec);
}

function usercount() {
  return Object.keys(userBalances).length - kicked;
}

function start() {
  if(usercount()>0) {
  play(600*1000);
  socket.emit('start', {room: roomid})
  starttimer(time)
  document.getElementById('before-start-main').style.display = "none"
  document.getElementById('after-start-main').style.display = "block"
  var upgradebox = document.getElementById('upgrades')
  upgradebox.insertAdjacentHTML('afterBegin', `<div><b style="color:lightgreen">The Game</b> Has Started!</div>`)
  } else {
    alert('You need at least one player to start!')
  }
}

function starttimer(e){
  var interval = setInterval(function() {
    var h = Math.floor(e / 3600).toString().padStart(2,'0'),
        m = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
        s = Math.floor(e % 60).toString().padStart(2,'0');
    
    document.getElementById('timer').innerHTML = m+':'+s

      if(e==0) {
        document.getElementById('timer').innerHTML = 'ended'
        endgame()
        clearInterval(interval)
        }
        e = e-1
        }, 1000)
        
}

socket.emit('joinmain', {username: 'admin', room: roomid})

socket.on('joined', (e) => {
  addUser(e)
})

const addUser = (name) => {
  if (!userBalances[name]) {
    userBalances[name] = 0
  }
  updateLeaderBoard()
  userbox = document.createElement('button')
  userbox.id = 'user'
  userbox.onclick = function() {remove(this)}
  userbox.classList.add('userdiv-user')
  userbox.textContent = name
  $('#usercount').text(usercount()+' Players')
  usersdiv = document.querySelector('.userdiv')
  usersdiv.appendChild(userbox)
}

document.getElementById('join-link').textContent = document.location.host

document.getElementById('join-link').href = 'https://'+document.location.host+'/?action=join'

socket.on('clap', function() {
  clapcount = (clapcount*1)+(1*1)
  document.getElementById('clap-count').innerHTML = clapcount+' Claps'
})

function remove(el) {
  element = el
  element.remove();
  kicked += 1;
  $('#usercount').text(usercount()+' Players')
  socket.emit('kickuser', {user: element.textContent, room: roomid})
}

socket.on('gameend', () => {
})

$('#g-end').click(function() {
  endgame()
})

function endgame() {
  beep.pause()
  $('#after-start-main').fadeOut('fast')
  $('.after-end').fadeIn('fast')
  socket.emit('gameend', {room: roomid, standings: standingsByUsername()})
  updateTop3()
  end.play()
  setTimeout(function(){confetti()}, 6500)
  let num = 4;
  setInterval(function() {
    num -= 1
    document.getElementById('place'+num).style.visibility = "visible"
  }, 2000)

}

function updateTop3() {
  const podium = top3()
  let number = 0;
  $('#podium').html(podium.map((e) => {
    number += 1
    return ` <div id="place${number}" class="place${number}"><span class="username">${e.username}</span> <span class="pbalance">$${addCommas(e.balance)}</span></div>`
  }).join("\n"))
}

socket.on('upgradebought', (e) => {
  console.log(`${e.user} Upgraded ${e.upgrade} to Level ${e.level}`)
  var upgradebox = document.getElementById('upgrades')
  upgradebox.insertAdjacentHTML('afterBegin', `<div>${e.user} Upgraded <b style="color:yellow">${e.upgrade}</b> to Level ${e.level}</div>`)
})

function totalMoney() {
  let sum = 0
  for (const [username, balance] of Object.entries(userBalances)) {
     sum += balance;
  }
  return sum;
}

function standingsByUsername() {
  let placement = 0;
  let byUsername = {}
  standings().forEach((s) => {
    placement += 1
    byUsername[s.username] = {
      placement: placement
    }
  })
  return byUsername;
}

function top3() {
  return standings().slice(0, 3)
}

function standings() {
  const tmp = []
  for (const [username, balance] of Object.entries(userBalances)) {
     tmp[tmp.length] = {
       username: username,
       balance: balance,
     }
  }
  return _.reverse(_.sortBy(tmp, ['balance']));
}

let place = 0;

function updateLeaderBoard() {
  if (document.getElementById('leaders')) {
   document.getElementById('leaders').remove()
  }
  $('#leaderboard').html("<ol id='leaders'>" + standings().map((e) => {
     return ` <li> ${e.username}: $${addCommas(e.balance)}</li>`
  }).join("\n") + "</ol>")
}

socket.on('balance', (e) => {
  userBalances[e.username] = (userBalances[e.username] || 0) + e.delta;
  console.log("userBalances", userBalances)
  console.log("total", totalMoney())
  $('#total-money').text('$'+addCommas(totalMoney()))
  updateLeaderBoard()
})

$('#roomid').click(function() {
  document.getElementById('roomidcopy').select()
  document.execCommand('copy')
  $.notify("Join Link Copied To Clipboard!", "success");
})

document.getElementById('roomidcopy').value = 'https://'+document.location.host+"/join?id="+roomid

socket.on('summersong', (e) => {
  var upgradebox = document.getElementById('upgrades')
  upgradebox.insertAdjacentHTML('afterBegin', `<div><b style="color:orange">${e} is Ready for Summer!</b></div>`)
  beep.muted = true;
  summer.play();
  summer.addEventListener("ended", function(){
    beep.muted = false;
});
})

function addCommas(amount) {
  return amount.toFixed(0).replace(/\d(?=(\d{3})+\.)/g, "$&,")
}