=Igor=

==Description==
Igor is a voice-activated assistant in the same category as Siri and Google 
Assistant, except it's built as a web app on top of HTML5's x-webkit-speech
feature.

==The Parts==
===Igor===
The base Igor script is meant to be as light as possible to prevent causing
unneccesary page load times for those who wish to use it. It consists of the 
following files:

 * igor.js - A bootstrap that includes all other neccessary files
 * igor-config.js - The configurations available for tweaking Igor
 * igor-debug.js - The neccessary functionality required to facilitate debugging
 Igor, mostly meant for use by developers
 * igor-commands.js - The list of commands available to Igor's users, containing
 what words trigger the command and what function should handle it
 * igor-runtime.js - Variables and functionality used to determine which 
 integrations have been initialized at runtime
 * igor-initializer.js - The starting point for the end user: this script 
 creates the speech event handler for the #igor-input input field.

===Integrations===
To make adding functionality as easy as possible, all 3rd-party functionality
is provided in the form of integrations, which are separate scripts that sit
in the integrations folder and are injected only if a user tries to use them.

When a command is matched, Igor checks to see if the integration that command's
handler comes from has been loaded. If it hasn't, it loads it in. Afterwards,
it runs the command's handler, passing along the original text of what was said.
