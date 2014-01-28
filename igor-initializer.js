$(document).ready(function () {
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en";

  recognition.onresult = function (e)
  {
    $('#input-display').html('');
    for (i = 0; i < e.results.length; i++)
    {
      for (j = 0; j < e.results[i].length; j++)
      {
        $('<span />').text(e.results[i][j].transcript)
          .addClass(e.results[i].isFinal ? 'sure' : 'guess')
          .appendTo($('#input-display'));

      }

      if (e.results[e.results.length - 1].isFinal)
      {
        // Process only final messages
        message = $('#input-display').text();
        console.log("processing");
        console.log(message);
        console.log(e.results[i]);
      }

    }

  }

  recognition.onerror = function (e)
  {
    console.log("error!");
    console.log(e);
    recognition.start();
  }

  recognition.onend = function ()
  {
    console.log("restarting");
    recognition.start();
  }

  recognition.start();

});
