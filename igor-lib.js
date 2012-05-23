function parse_input(utterances)
{
  for (i = 0; i < utterances.length && i < igor_config.utterance_match_limit; i++)
  {
    utterance = utterances[i].utterance;
    debug("Probably said: " + utterance);
    
    for (c in igor_commands)
    {
      command = igor_commands[c];
      
      if (command.matcher(utterance, command.keywords))
      {
        debug("Invoking " + command.name);
      }
    }
  }
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