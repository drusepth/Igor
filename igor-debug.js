var DEBUG_MODE = 1,
    PEDANTIC   = 1;

function debug(msg)
{
  if (DEBUG_MODE == 1)
  {
    console.log(msg);
  }
}

function pedantic(msg)
{
  if (PEDANTIC == 1)
  {
    console.log(msg);
  }
}
