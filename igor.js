loadScript('igor-config.js');
loadScript('igor-debug.js');
loadScript('igor-lib.js');
loadScript('igor-commands.js');
loadScript('igor-runtime.js');
loadScript('igor-initializer.js');

function loadScript(url, callback)
{
  console.log("Loading script " + url);
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  script.onload = callback;
  script.onreadystatechange = callback;
  head.appendChild(script);
}

