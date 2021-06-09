const socket = io();
let question = 1;

(function() {
  socket.emit('getrooms', {room: localStorage.getItem('id')})
})()

socket.on('roomsget', function(e) {
  if (e==false) {
    location.href = "/expired"
  } else {
    return
  }
})

socket.on('start', () => {
  document.getElementById('before-start').style.display = "none"
  document.getElementById(`q${question}`).style.display = "block"
})
socket.emit('join', {username: localStorage.getItem('name'), room: localStorage.getItem('id')});

$('button.cbutton').click(function() {
    streak = localStorage.getItem('streak')
    localStorage.setItem('streak', ((streak*1) + (1*1)))
    streak = localStorage.getItem('streak')
    socket.emit('answer', {streak: streak, question: question, room: localStorage.getItem('id')})
    alert(streak)
    questionright(streak)
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
    $( `#q${question}` ).fadeOut( "slow", function() {
      question += 1
          $( "#q"+question ).fadeIn( "slow" );
  });
})

$('button.ibutton').click(function() {
    localStorage.setItem('streak', 0)
    streak = localStorage.getItem('streak')
    alert(streak)
    questionwrong
    $( `#q${question}` ).fadeOut( "slow", function() {
      question += 1
          $( "#q"+question ).fadeIn( "slow" );
  });
})
  localStorage.removeItem('streak')

function showend() {
  document.getElementById('q1').style.display = "none";
  document.getElementsByClassName('correct')[0].style.display = "block"
}

document.getElementById('clap').addEventListener('click', function() {
  socket.emit('clap', {room: localStorage.getItem('id')})
})

/*cbutton.onclick = function() {
    streak = localStorage.getItem('streak')
    alert(streak)
    $( `#q${question}` ).fadeOut( "slow", function() {
      question += 1
          $( "#q"+question ).fadeIn( "slow" );
  });
}
*/