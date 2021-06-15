$('button#streakbonusupgrade2').click(function() {
  if(boostquestion<3) {
  if(balance>=20) {
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -20, username: localStorage.getItem('name')})
  balance = balance - 20
  questionupgrade(2)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

  $('button#streakbonusupgrade1').click(function() {
  if(boostquestion<1) {
  if(balance>=0) {
  balance = balance - 0
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -0, username: localStorage.getItem('name')})
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

    $('button#streakbonusupgrade3').click(function() {
  if(boostquestion<10) {
  if(balance>=50) {
  balance = balance - 50
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -50, username: localStorage.getItem('name')})
  questionupgrade(3)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

    $('button#streakbonusupgrade4').click(function() {
  if(boostquestion<50) {
  if(balance>=250) {
  balance = balance - 250
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -250, username: localStorage.getItem('name')})
  questionupgrade(4)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

      $('button#streakbonusupgrade5').click(function() {
  if(boostquestion<100) {
  if(balance>=1000) {
  balance = balance - 1000
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -1000, username: localStorage.getItem('name')})
  questionupgrade(5)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

        $('button#streakbonusupgrade6').click(function() {
  if(boostquestion<1000) {
  if(balance>=10000) {
  balance = balance - 10000
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -10000, username: localStorage.getItem('name')})
  questionupgrade(6)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

          $('button#streakbonusupgrade7').click(function() {
  if(boostquestion<10000) {
  if(balance>=250000) {
  balance = balance - 250000
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -250000, username: localStorage.getItem('name')})
  questionupgrade(7)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

          $('button#streakbonusupgrade8').click(function() {
  if(boostquestion<100000) {
  if(balance>=1500000) {
  balance = balance - 1500000
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -1500000, username: localStorage.getItem('name')})
  questionupgrade(6)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})



    $('button#perquestionupgrade1').click(function() {
  if(perquestion<1) {
  if(balance>=0) {
  balance = balance - 0
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -0, username: localStorage.getItem('name')})
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

$('button#perquestionupgrade2').click(function() {
  if(perquestion<5) {
  if(balance>=10) {
  balance = balance - 10
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -10, username: localStorage.getItem('name')})
  boostupgrade(2)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

  $('button#perquestionupgrade3').click(function() {
  if(perquestion<50) {
  if(balance>=100) {
  balance = balance - 100
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -100, username: localStorage.getItem('name')})
  boostupgrade(3)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

  $('button#perquestionupgrade4').click(function() {
  if(perquestion<2000) {
  if(balance>=15000) {
  balance = balance - 15000
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -15000, username: localStorage.getItem('name')})
  boostupgrade(4)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

  $('button#perquestionupgrade5').click(function() {
  if(perquestion<10000) {
  if(balance>=50000) {
  balance = balance - 50000
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -50000, username: localStorage.getItem('name')})
  boostupgrade(5)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

  $('button#perquestionupgrade6').click(function() {
  if(perquestion<50000) {
  if(balance>=500000) {
  balance = balance - 500000
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -500000, username: localStorage.getItem('name')})
  boostupgrade(6)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

  $('button#perquestionupgrade7').click(function() {
  if(perquestion<250000) {
  if(balance>=5000000) {
  balance = balance - 5000000
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -5000000, username: localStorage.getItem('name')})
  boostupgrade(7)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

  $('button#perquestionupgrade8').click(function() {
  if(perquestion<1000000) {
  if(balance>=100000000) {
  balance = balance - 100000000
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -100000000, username: localStorage.getItem('name')})
  boostupgrade(8)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

  $('button#multiplierupgrade2').click(function() {
  if(multiplier<1.5) {
  if(balance>=50) {
  balance = balance - 50
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -50, username: localStorage.getItem('name')})
  multiplierupgrade(2)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

  $('button#multiplierupgrade3').click(function() {
  if(multiplier<2) {
  if(balance>=300) {
  balance = balance - 300
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -300, username: localStorage.getItem('name')})
  multiplierupgrade(3)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

  $('button#multiplierupgrade4').click(function() {
  if(multiplier<3) {
  if(balance>=2500) {
  balance = balance - 2500
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -2500, username: localStorage.getItem('name')})
  multiplierupgrade(4)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

  $('button#multiplierupgrade5').click(function() {
  if(multiplier<5) {
  if(balance>=50000) {
  balance = balance - 50000
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -50000, username: localStorage.getItem('name')})
  multiplierupgrade(5)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

    $('button#multiplierupgrade6').click(function() {
  if(multiplier<10) {
  if(balance>=2500000) {
  balance = balance - 2500000
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -2500000, username: localStorage.getItem('name')})
  multiplierupgrade(6)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

    $('button#multiplierupgrade7').click(function() {
  if(multiplier<25) {
  if(balance>=50000000) {
  balance = balance - 50000000
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -50000000, username: localStorage.getItem('name')})
  multiplierupgrade(7)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

    $('button#multiplierupgrade8').click(function() {
  if(multiplier<100) {
  if(balance>=1000000000) {
  balance = balance - 1000000000
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -1000000000, username: localStorage.getItem('name')})
  multiplierupgrade(8)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

      $('button#multiplierupgrade1').click(function() {
  if(multiplier<1) {
  if(balance>=0) {
  balance = balance - 0
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -0, username: localStorage.getItem('name')})
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

      $('button#insuranceupgrade2').click(function() {
  if(insurance>0.9) {
  if(balance>=50) {
  balance = balance - 50
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -50, username: localStorage.getItem('name')})
  insuranceupgrade(2)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

      $('button#insuranceupgrade1').click(function() {
  if(insurance<1) {
  if(balance>=0) {
  balance = balance - 0
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -0, username: localStorage.getItem('name')})
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

  $('button#insuranceupgrade3').click(function() {
  if(insurance>0.8) {
  if(balance>=300) {
  balance = balance - 300
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -300, username: localStorage.getItem('name')})
  insuranceupgrade(3)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

  $('button#insuranceupgrade4').click(function() {
  if(insurance>0.7) {
  if(balance>=2500) {
  balance = balance - 2500
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -2500, username: localStorage.getItem('name')})
  insuranceupgrade(4)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

  $('button#insuranceupgrade5').click(function() {
  if(insurance>0.5) {
  if(balance>=50000) {
  balance = balance - 50000
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -50000, username: localStorage.getItem('name')})
  insuranceupgrade(5)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

  $('button#insuranceupgrade6').click(function() {
  if(insurance>0.4) {
  if(balance>=2500000) {
  balance = balance - 2500000
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -2500000, username: localStorage.getItem('name')})
  insuranceupgrade(6)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

  $('button#insuranceupgrade7').click(function() {
  if(insurance>0.25) {
  if(balance>=50000000) {
  balance = balance - 50000000
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -50000000, username: localStorage.getItem('name')})
  insuranceupgrade(7)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})

  $('button#insuranceupgrade8').click(function() {
  if(insurance>0.1) {
  if(balance>=1000000000) {
  balance = balance - 1000000000
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -1000000000, username: localStorage.getItem('name')})
  insuranceupgrade(8)
  $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
  })
  } else {
    alert('Not Enough Money!')
  }} else {
    promp = confirm('Already Bought! Continue to Questions?')
    if(promp==true) {
    $("#money").fadeOut(function() {
    $(this).text('$'+balance)
    }).fadeIn();
  $('.button-frame-01').fadeIn('fast')
  $('.shopp').fadeOut('fast')
    $('div.correct').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );    
  })
  $('div.incorrect').fadeOut('fast', function() {
    $('#money').fadeIn('fast')
    $( "#q"+questions ).fadeIn( "slow" );  
    })
  } 
  }})