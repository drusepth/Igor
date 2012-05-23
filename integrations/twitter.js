function update_twitter_status (spoken)
{
  var new_status = spoken.substring(spoken.indexOf('status to') + 10);
  
  debug("Updating Twitter status to: " + new_status);
  // do twitter stuff
}