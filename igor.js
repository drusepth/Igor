loadScript('igor-config.js');
loadScript('igor-debug.js');
loadScript('igor-lib.js');
loadScript('igor-commands.js');
loadScript('igor-initializer.js');

function loadScript(url)
{
   var head = document.getElementsByTagName('head')[0];
   var script = document.createElement('script');
   script.type = 'text/javascript';
   script.src = url;
   head.appendChild(script);
}