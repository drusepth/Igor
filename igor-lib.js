function parse_input(utterances)
{
  for (u = 0; u < utterances.length && u < igor_config.utterance_match_limit; u++)
  {
    utterance = utterances[u].utterance;
    debug("Probably said: " + utterance);
    
    for (c in igor_commands)
    {
      command = igor_commands[c];
      
      if (command.matcher(utterance, command.keywords))
      {
        debug("Invoking " + command.handler + " from " + command.from);
		
		if (is_integration_loaded(command.from))
		{
		  debug("Making the call to " + command.handler);
		  handler = eval(command.handler);
		  handler(utterance);
		}
		else
		{
		  load_integration(command.from, function () {
		    debug("Making the call to " + command.handler);
		    handler = eval(command.handler);
		    handler(utterance);
		  });
		}
      }
    }
  }
}

function load_integration (path, callback)
{
  if (!is_integration_loaded(path))
  {
	loaded_integrations.push(path);
    loadScript(path, callback);
	debug("Now have " + loaded_integrations.length + " integrations loaded.");
  }
}

function is_integration_loaded (path)
{
  for (i = 0; i < loaded_integrations.length; i++)
  {
    if (loaded_integrations[i] == path)
	{
	  debug("Tried to load " + path + " but it was already loaded.");
	  return true;
	}
  }
  return false;
}

function match_all (haystack, needles)
{
  for (i in needles)
  {
    pedantic("Trying to match " + needles[i] + " in " + haystack);
    if (haystack.toLowerCase().indexOf(needles[i].toLowerCase()) < 0)
    {
      return false;
    }
  }
  return true;
}

function match_any (haystack, needles)
{
  for (i in needles)
  {
    if (haystack.indexOf(needles[i]) > -1)
    {
      return true;
    }
  }
  return false;
}