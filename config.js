// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Diogo',
	openInNewTab: true,
	twelveHourFormat: false,

	// Theme
	theme: 'latte-mocha',
	imageBackground: true,
	
	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '141ceeb09b22b39dbf5a93617ee4cb09', // Write here your API Key
	weatherIcons: 'White', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi
  
	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '41.545448',
	defaultLongitude: '-8.426507',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
		  id: '1',
		  name: 'Github',
		  icon: 'github',
		  link: 'https://github.com/diogogmatos',
		},
		{
		  id: '2',
		  name: 'Mail',
		  icon: 'mail',
		  link: 'https://mail.google.com/mail/u/0/?pli=1',
		},
		{
		  id: '3',
		  name: 'Twitter',
		  icon: 'twitter',
		  link: 'https://twitter.com/home',
		},
		{
		  id: '4',
		  name: 'Music',
		  icon: 'headphones',
		  link: 'https://open.spotify.com',
		},
		{
		  id: '5',
		  name: 'Calendar',
		  icon: 'calendar',
		  link: 'https://calendar.google.com/calendar/r',
		},
		{
		  id: '6',
		  name: 'Youtube',
		  icon: 'youtube',
		  link: 'https://www.youtube.com',
		},
	],

	secondButtonsContainer: [
		{
		  id: '1',
		  name: 'Music',
		  icon: 'headphones',
		  link: 'https://open.spotify.com',
		},
		{
		  id: '2',
		  name: 'twitter',
		  icon: 'twitter',
		  link: 'https://twitter.com/',
		},
		{
		  id: '3',
		  name: 'bot',
		  icon: 'bot',
		  link: 'https://discord.com/app',
		},
		{
		  id: '4',
		  name: 'Amazon',
		  icon: 'shopping-bag',
		  link: 'https://amazon.com/',
		},
		{
		  id: '5',
		  name: 'Hashnode',
		  icon: 'pen-tool',
		  link: 'https://hashnode.com/',
		},
		{
		  id: '6',
		  name: 'Figma',
		  icon: 'figma',
		  link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'lo-fi girl',
					link: 'https://youtu.be/5qap5aO4i9A',
				},
				{
					name: 'lo-fi chillhop',
					link: 'https://youtu.be/7NOSDKb0HlU',
				},
				{
					name: 'cappuccino',
					link: 'https://www.youtube.com/channel/UCWIjaWowE7eDncdBJCdIclQ',
				},
				{
					name: 'discord',
					link: 'https://discord.com/app',
				},
		  	],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'blackboard',
					link: 'https://elearning.uminho.pt',
				},
				{
					name: 'mail uminho',
					link: 'https://outlook.office.com/mail',
				},
				{
					name: 'slack',
					link: 'https://slack.com/',
				},
				{
					name: 'ticktick',
					link: 'https://ticktick.com/webapp/#q/all/today',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
