function update_facebook_status (spoken)
{
  var new_status = spoken.substring(spoken.indexOf('status to') + 10);
  
  debug("Updating Facebook status to: " + new_status);
  // do facebook stuff
}
