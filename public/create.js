const socket = io();

socket.emit('join', {room: 'create', username: 'create'})

socket.on('gamedata', (e) => {
  console.log(e)
})

let name;
let author;
let desc;
        $('#gname').focus()
        $('#game-name').submit(function(e) {
          e.preventDefault()
          name = $('#gname').val()
          $('#game-name').fadeOut('slow', function() {
          $('#game-author').fadeIn('slow')
          $('#author').focus()
        })})
    $('#game-author').submit(function(event) {
      event.preventDefault()
      author = $('#author').val()
      $('#game-author').fadeOut('slow', function() {
        $('#game-description').fadeIn('slow')
        $('#desc').focus()
        $('#game-description').submit(function(e) {
          e.preventDefault()
          desc = $('#desc').val()
          $('#game-description').fadeOut('slow', function() {
            socket.emit('creategame', name, name, author, desc)
          $('.inputdiv-body-home').height(500)
          $('#make-question').fadeIn('slow')
          })
        })
      })
    })

  socket.on('questionsquiz', (e) => {
    console.log(e)
  })

    $('#make-question').submit(function(e) {
      e.preventDefault()
      $.notify("Question Created Successfully", "success");
      socket.emit('createquestion', name, $('#gtitle').val(), $('#c-answer').val(), [$('#other-answer1').val(), $('#other-answer2').val(), $('#other-answer3').val()])
      socket.emit('getquestions', name)
      $("#make-question").trigger("reset");
    })