$(document).ready(function () {
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en";

  recognition.onresult = function (e)
  {
    $('#input-display').html('');
    for (i = 0; i < e.results[0].length; i++)
    {
      $('<span />').text(e.results[i][0].transcript)
        .addClass(e.results[i].isFinal ? 'sure' : 'guess')
        .appendTo($('#input-display'));
    }
    message = $('#input-display').text();

    console.log(e);
    console.log(message);

    // Trigger Igor
    parse_speech(message);
  }

  $('#start-igor').bind('click', function (e)
  {
    recognition.start();
  });

});
