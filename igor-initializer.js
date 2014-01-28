$(document).ready(function () {
  $('#igor-input').bind('webkitspeechchange', function (e)
  {
    debug("Triggered Igor");
    parse_speech(e.originalEvent.results);
  });
});
