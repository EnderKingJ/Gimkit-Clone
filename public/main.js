let questions = 1;
let started = false;
let claps = 0;
localStorage.setItem('streak', 0)
setTimeout(function() {const socket = io();
if(!localStorage.getItem('money')) {
localStorage.setItem('money', 0)
}

console.log('beforeloadkick')

setInterval(
function() {
  socket.emit('getstarted', {room: localStorage.getItem('id')})
}, 1000)

socket.on('startedget', function(e) {
  if (e==false) {
    
  } else {
  document.getElementById('before-start').style.display = "none"
  started = true
  document.getElementById(`q${questions}`).style.display = "block"
  }
})

  socket.emit('getended', localStorage.getItem('id'))

socket.on('endedget', function(e) {
  if (e.includes(localStorage.getItem('id'))) {
  $('.start').remove();
  $('.correct').remove();
  $('.incorrect').remove();
  $('.button-frame-01').remove();
  document.getElementsByClassName('end-money')[0].innerHTML = '$'+balance
  $('.after-end').fadeIn('slow')
  }
})

document.getElementById('money').innerHTML = '$0'

setInterval(
function() {
  socket.emit('getrooms', {room: localStorage.getItem('id')})
}, 1000)

socket.on('roomsget', function(e) {
  if (e==false) {
    location.href = "/unauthorized/expired"
  } else {
  }
})

$('button.cbutton').click(function() {
    $('#money').fadeOut('fast')
    streak = localStorage.getItem('streak')
    localStorage.setItem('streak', ((streak*1) + (1*1)))
    streak = localStorage.getItem('streak')
    socket.emit('answer', {streak: streak, question: question, room: localStorage.getItem('id')})
    questionright(streak)
    localStorage.setItem('money', balance)
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
    $( `#q${questions}` ).fadeOut( "slow", function() {
      questions += 1
          $('div.correct').fadeIn('fast', function() {
            
          })
  });
})

function bought() {
$('.button-frame-01').fadeIn('fast')
}

$('button.cobutton').click(function() {
  $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
})

$('button.shobutton').click(function() {
  $('.button-frame-01').fadeOut('fast')
  $('div.correct').fadeOut('fast', function() {
      $('#money').fadeIn('fast')
        $('#exit-shop').show();
    $( ".shop" ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
      $('#money').fadeIn('fast')
        $('#exit-shop').show();
    $( ".shop" ).fadeIn( "slow" );    
  })
})

$('button.ibutton').click(function() {
    $('#money').fadeOut('fast')
    localStorage.setItem('streak', 0)
    streak = localStorage.getItem('streak')
    questionwrong()
    localStorage.setItem('money', balance)
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
    $( `#q${questions}` ).fadeOut( "slow", function() {
      questions += 1
          $('div.incorrect').fadeIn('fast', function() {
            
          })
  });
})

$('button#streakbonusopen').click(function() {
  $('#streakbonusshop').fadeIn('fast', function() {
    $('.shop').fadeOut('fast')
  })
})

$('button#perquestionopen').click(function() {
  $('#perquestionshop').fadeIn('fast', function() {
    $('.shop').fadeOut('fast')
  })
})

$('button#multiplieropen').click(function() {
  $('#multipliershop').fadeIn('fast', function() {
    $('.shop').fadeOut('fast')
  })
})

$('button#insuranceopen').click(function() {
  $('#insuranceshop').fadeIn('fast', function() {
    $('.shop').fadeOut('fast')
  })
})


function showend() {
  document.getElementById('q1').style.display = "none";
  document.getElementsByClassName('correct')[0].style.display = "block"
}

document.getElementsByClassName('clap')[0].addEventListener('click', function() {
  claps += 1
var foo = new Audio("/sounds/clap.wav", 100, true);
foo.play();
  document.getElementById('claps').textContent = 'Clap - '+claps
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

$('#exit-shop').click(function() {
  $('.button-frame-01').fadeIn('fast')
  $('#exit-shop').hide();
  $('.shopp').hide();
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
})

  console.log('Content Loaded!')
}, 1000)