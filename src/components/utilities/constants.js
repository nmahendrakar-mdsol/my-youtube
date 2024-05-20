const API_KEY = 'AIzaSyC9WeYTnWNQfOJ8fIHxfku2B9CpeNptnmU';
export const POPULAR_VIDEOS_LIST =
	'https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=10&key=' +
	API_KEY;

export const YOUTUBE_SEARCH_RECOMMENDATIONS_API =
	'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const commentsData = [
	{
		name: 'Nikhil Mahendrakar0',
		text: 'how may i help you0',
		replies: [],
	},
	{
		name: 'Nikhil Mahendrakar1',
		text: 'how may i help you1',
		replies: [
			{
				name: 'Nikhil Mahendrakar2',
				text: 'how may i help you2',
				replies: [
					{
						name: 'Nikhil Mahendrakar3',
						text: 'how may i help you3',
						replies: [
							{
								name: 'Nikhil Mahendrakar4',
								text: 'how may i help you4',
								replies: [],
							},
						],
					},
				],
			},
		],
	},
];
