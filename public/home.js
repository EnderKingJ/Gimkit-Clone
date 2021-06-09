const socket = io();
new ClipboardJS('#roomid');
new ClipboardJS('#j-copy');
let usercount = 0;
let roomid;

const generateroom = () => {
roomid = Math.random() * (99999999 - 10000000) + 10000000;
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

document.getElementById('copy').value = `https://${document.location.host}/join?id=${document.getElementById('roomid').innerHTML}`

document.getElementById('copy2').value = document.getElementById('roomid').innerHTML

function start(e) {
  if(usercount>1) {
  startgame()
  socket.emit('start', {room: roomid})
  } else {
    alert('You need at least two players to start!')
  }
}

function startgame() {
  document.getElementById('before-start-main').style.display = "none"
  document.getElementById('after-start-main').style.display = "block"

}

socket.emit('joinmain', {username: 'admin', room: roomid})

socket.on('joined', (e) => {
  addUser(e)
})

const addUser = (name) => {
  usercount += 1
  userbox = document.createElement('div')
  userbox.classList.add('userdiv-user')
  userbox.textContent = name
  usersdiv = document.querySelector('.usersdiv')
  usersdiv.appendChild(userbox)
}

document.getElementsByTagName('button')[0].addEventListener('click', function() {
  alert('Join URL Copied To Clipboard.')
})

document.getElementById('join-link').textContent = document.location.host

document.getElementById('join-link').href = 'https://'+document.location.host

socket.on('clap', function() {
  alert('clap')
})