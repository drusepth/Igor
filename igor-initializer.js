$(document).ready(function () {
	$('#igor-input').bind('onwebkitspeechchange', function (e)
	{
		parse_speech(e.results);
	});
});
