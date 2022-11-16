// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Runkeeper',
		category: 'Web Application',
		img: require('@/assets/runkeeper/running.svg'),
	},
	{
		id: 2,
		title: 'Spotify API',
		category: 'Web Application',
		img: require('@/assets/spotify-api/spotify-logo.png'),
	},
	{
		id: 3,
		title: 'Speculative Story',
		category: 'Design',
		img: require('@/assets/speculative-story/spec-story-logo.png'),
	},
	{
		id: 4,
		title: 'Soundcloud Redesign',
		category: 'Design',
		img: require('@/assets/soundcloud/soundcloud-logo.png'),
	},
	// {
	// 	id: 5,
	// 	title: 'SportDate',
	// 	category: 'Mobile Application',
	// 	// img: require('@/assets/images/mobile-project-1.jpg'),
	// },
	// {
	// 	id: 6,
	// 	title: 'POS Camcyber',
	// 	category: 'Web Application',
	// 	// img: require('@/assets/images/web-project-1.jpg'),
	// },
];

export default projects;
