var igor_commands = [
	{
		'name': 'twitter-status-update',
	
		'matcher': match_all,
		'keywords': ['update', 'twitter', 'to'],
	
		'handler': 'update_twitter_status',
		'from': 'integrations/twitter.js'
	},
	
	{
	  'name': 'facebook-status-update',
	  
	  'matcher': match_all,
	  'keywords': ['update', 'facebook', 'to'],
	  
	  'handler': 'update_facebook_status',
	  'from': 'integrations/facebook.js'
	}
	
	/*
	TODO: 
	[ 'facebook-status-update', match_all, ['update', 'facebook'], update_facebook_status ],
	[ 'google-status-update', match_all, ['update', 'status', 'google'], update_google_status ],
	[ 'google-checkin', match_all, ['location', 'google'], checkin_to_google ],
	[ 'ask-quora-question', match_all, ['ask', 'quora'], ask_quora_question ],
	
	[ 'count-unread-emails', match_all, ['how', 'many', 'unread', 'emails'], count_unread_emails ],
	[ 'read-unread-emails', match_all, ['read', 'unread', 'email'], read_unread_emails ],
	[ 'respond-to-email', match_all, ['respond', 'to'], respond_to_email ], // #todo add state-based commands
	[ 'read-next-email', match_all, ['next'], read_next_email ],
	
	[ 'count-unread-sms', match_all, ['how', 'many', 'unread', 'messages'], count_unread_sms ],
	[ 'read-unread-sms', match_all, ['read', 'unread', 'messages'], read_unread_sms ],
	[ 'respond-to-sms', match_all, ['respond', 'to'], respond_to_sms ],
	[ 'read-next-sms', match_all, ['next'], read_next_sms ],

	[ 'verbal-scribe', match_all, ['write', 'until', 'stop'], verbal_scribe ],
	
	[ 'what-is-lookup', match_all, ['what', 'is'], lookup_object ],
	[ 'who-is-lookup', match_all, ['who', 'is'], lookup_person ]
	*/
];
