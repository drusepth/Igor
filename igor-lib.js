// Parse webkit speech output for recognized Igor commands
function parse_speech(utterances)
{
	for (u = 0; u < utterances.length && u < igor_config.utterance_match_limit; u++)
	{
		utterance = utterances[u].utterance;
		debug("Probably said: " + utterance);
		
		command = match_command(utterance);
		if (command)
		{
		  run_command(command, utterance);
		}
	}
}

// Run an Igor command, given what was said to invoke it
function run_command(command, utterance)
{
	debug("Making the call to " + command.handler);
	if (is_integration_loaded(command.from))
	{
		eval(command.handler)(utterance);
	}
	else
	{
		load_integration(command.from, function () {
			eval(command.handler)(utterance);
		});
	}
}

// Determine whether an utterance matches any Igor commands
function match_command(utterance)
{
  for (c in igor_commands)
	{
		command = igor_commands[c];
		
		if (command.matcher(utterance, command.keywords))
		{
			debug("Matched " + command.handler + " from " + command.from);
			return command;
		}
	}
}

// Lazy-load javascript from the integrations/ directory for use
function load_integration(path, callback)
{
	if (!is_integration_loaded(path))
	{
		loaded_integrations.push(path);
		loadScript(path, callback);
		debug("Now have " + loaded_integrations.length + " integrations loaded.");
	}
}

// Determines whether an integration has already been loaded
function is_integration_loaded(path)
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

// Returns true if all words in needles exist in haystack
function match_all(haystack, needles)
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

// Returns true if any word in needles exists in haystack
function match_any(haystack, needles)
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
