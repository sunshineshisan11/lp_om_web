export default {
	login: {
		title: 'Dating Party',
		types: ['Register', 'Login'],
		languageDialog: {
			title: 'Please select the language you are proficient in.'
		},
		rule:'',
		buttons: ['Language', 'Login', 'Register'],
		inputs: ['Please enter your number.', 'Please enter your password.', 'Please enter the invitation code.'],
		gender: ['Male', 'Female'],
		message: ['Username or password cannot be empty.', 'Please enter the invitation code.',
			'The invitation code is incorrect.', 'Login successful.', 'Registration successful.',
			'You haven not registered yet', 'The password is incorrect.', 'Login failed.',
			'This account has already been registered.',
			'The username or password cannot be less than 6 characters.'
		]
	},
	mine: {
		vipStatus: ['In production…', 'Not activated', 'Activating', 'Activated', 'Pending generation', 'Abandoned', 'Under repair'],
		account: 'Account points',
		buttons: ['Click to Apply', 'Withdraw Cash', 'Recharge', 'Change Password', 'Safety in Making Friends', 'Terms of Use', 'Privacy Policy', 'Log Out'],
		dialog: {
			input: 'Enter your name.',
			buttons: ['Cancel', 'Confirm']
		},
		upload:['Please upload the transfer receipt of the first membership registration procedure you have handled.','Please upload the transfer receipt of the second membership registration procedure you have handled.','Please upload the transfer receipt of the third membership registration procedure you have handled.'],
		message:['Please enter the password', 'Please enter the new password', 'The password cannot be less than six digits.', 'The two new password entries do not match.', 'The modification was successful.', 'The password is incorrect.'],
		model: {
			titles: ['Points', 'Remaining points', 'Withdrawal records', 'Old Password', 'New Password', 'Confirm Password'],
			buttons: ['Cancel', 'Confirm'],
			message: ['Please enter points.', {
					title: 'System prompt',
					content: 'You have already submitted an application.',
					okText: 'I see.'
				}, 'Submission successful.', 'Please upload your avatar.', 'Please enter your name.',
				'Only JPG/PNG format images can be uploaded!', 'The image size cannot exceed 2MB!',
				'Avatar upload failed. Please try again later!'
			]
		},
		txts: ['Data error', 'Abandoned', 'Under repair', 'Account frozen']
	},
	gift: {
		title: 'Model Selection of the Year',
		buttons: ['Submit'],
		txts: ['Voting results', 'Current selection', 'Points per order'],
		gift: ['Rose', 'Lily', 'Fireworks', 'Balloon'],
		message: ['Please select 1 gifts.', 'Please fill in the points.','Insufficient balance'],
		dialog: {
			buttons: ['Clear the order', 'Confirm submission']
		},
		model: {
			title: 'System error',
			content: ['Data error', 'Membership qualification has been abandoned', 'Data repair in progress', 'Account has been frozen'],
			okText: 'I see.'
		}
	},
	main: {
		dating: {
			txts: ['Withdrawal successful.', 'Top-up successful.']
		},
		square: {
			buttons: ['Like', 'Comment', 'Share']
		},
	},
	PL: {
		height: 'Height',
		weight: 'Weight',
		xw: 'Bust',
		job: 'Occupation',
		city: 'City',
		button:'reserve',
		tabs:["Male","Female"],
		party:['Pool Party', 'Yacht Party', 'Villa Party', 'Private Party']
	},


	tabbar: {
		buttons: ['Homepage', 'Private appointment', 'Voting', 'My page'],
		service: 'Customer Service'
	},
	message: {
		title: "The membership has not been activated. ",
		msg: 'Please contact the customer service for activation.'
	}
}