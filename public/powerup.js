function powerup(powerup, cost) {
  if (powerup==="summersong") {
  if(balance>=cost) {
  balance -= cost
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -cost, username: localStorage.getItem('name')})
  socket.emit('summersong', {room: localStorage.getItem('id'), name: localStorage.getItem('name')})
  alert('Purchase Successful!')
      $('#exit-shop').hide();
    $('#powerup-shop-open').hide();
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
  }
  } else if (powerup==="streaksaver") {
  if(balance>=cost) {
  balance -= cost
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -cost, username: localStorage.getItem('name')})
  streaksaver = true;
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
  alert('Purchase Successful!')
      $('#exit-shop').hide();
    $('#powerup-shop-open').hide();
  setTimeout(function() {streaksaver = false}, 90000)
  } else {
    alert('Not Enough Money!')
  }
  } else if (powerup==="claps") {
    if(balance>=cost) {
  balance -= cost
  socket.emit('balance', {room: localStorage.getItem('id'), balance: -cost, username: localStorage.getItem('name')})
  clapp = true;
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
  alert('Purchase Successful!')
      $('#exit-shop').hide();
    $('#powerup-shop-open').hide();
  } else {
    alert('Not Enough Money!')
  }
  }}