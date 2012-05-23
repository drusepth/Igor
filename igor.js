$(document).ready(function () {
  $('#igor-input').bind('onwebkitspeechchange', function (e)
  {
    parse_input(e.results);
  });
});