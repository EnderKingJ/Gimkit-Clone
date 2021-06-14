const socket = io();

let params = new URLSearchParams(document.location.search.substring(1));

if (params.get("id")) {
  document.getElementById('id').value = params.get("id")
  localStorage.setItem('id', document.getElementById('id').value)
    $('#indexdiv').fadeOut('slow', function() {
    $('#joindiv').fadeIn('slow')
  })
  setTimeout(function(){socket.emit('getrooms', {room: document.getElementById('id').value})}, 1000)
}

if (params.get("action")) {
    $('#indexdiv').fadeOut('slow', function() {
    $('#joindiv').fadeIn('slow')
})}


document.getElementById('id-join').addEventListener('submit', id, false)
document.getElementById('name-join').addEventListener('submit', name, false)

function id(e) {
  e.preventDefault();
  if(document.getElementById('id').value) {
  socket.emit('getrooms', {room: document.getElementById('id').value})
  } else {
    $('#invalid-id-input').fadeIn('fast')
  }
}

socket.on('roomsget', (e) => {
  if (e==false) {
    $('#invalid-id-input').fadeIn('fast')
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
            setTimeout(function() {location.href = "/game"}, 500)
          } );
  });
  } else {
    $('#invalid-name-input').fadeIn('fast')
  }
}

$('#join').click(function() {
  $('#indexdiv').fadeOut('slow', function() {
    $('#joindiv').fadeIn('slow')
    document.getElementById('id').focus();
  })
})

let song;
let time;

$('#host').click(function() {
    $('#indexdiv').fadeOut('slow', function() {
    $('#hostdiv').fadeIn('slow')
    document.getElementById('song').focus();
    $('#songf').submit(function(event) {
      event.preventDefault()
      song = $('#song').val()
      $('#songf').fadeOut('slow', function() {
        $('#timef').fadeIn('slow')
        $('#time').focus()
        $('#timef').submit(function(e) {
          e.preventDefault()
          time = $('#time').val()
          $('#hostdiv').fadeOut('slow', function() {
          location.href = "/host?song="+song+"&time="+time
          })
        })
      })
    })
})
})