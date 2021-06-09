const socket = io();

let params = new URLSearchParams(document.location.search.substring(1));

if (params.get("id")) {
  document.getElementById('id').value = params.get("id")
  localStorage.setItem('id', document.getElementById('id').value)
  setTimeout(function(){socket.emit('getrooms', {room: document.getElementById('id').value})}, 1000)
}

document.getElementById('id-join').addEventListener('submit', id, false)
document.getElementById('name-join').addEventListener('submit', name, false)

function id(e) {
  e.preventDefault();
  if(document.getElementById('id').value) {
  socket.emit('getrooms', {room: document.getElementById('id').value})
  } else {
    document.getElementById('invalid-id-input').style.display = "block"
  }
}

socket.on('roomsget', (e) => {
  if (e==false) {
    document.getElementById('invalid-id-input').style.display = "block"
  } else {
    sid()
  }
})

function sid() {
  localStorage.setItem('id', document.getElementById('id').value)
    $( `#id-join` ).fadeOut( "slow", function() {
          $( "#name-join" ).fadeIn( "slow" );
            document.getElementById('name').focus();
  });
}

function name(e) {
  e.preventDefault();
  if(document.getElementById('name').value) {
  localStorage.setItem('name', document.getElementById('name').value)
    $( `#name-join` ).fadeOut( "slow", function() {
          $( ".inputdiv-body-home" ).fadeOut( "slow", function() {
            setTimeout(function() {location.href = "/game"}, 1000)
          } );
  });
  } else {
    document.getElementById('invalid-name-input').style.display = "block"
  }
}