import React, { useEffect, useState } from 'react';
import VideoCard, { AdVideoCard } from './VideoCard';
import { POPULAR_VIDEOS_LIST } from './utilities/constants';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
	const [videosList, setVideosList] = useState();
	useEffect(() => {
		getVideos();
	}, []);
	const getVideos = async () => {
		const data = await fetch(POPULAR_VIDEOS_LIST);
		const jsonData = await data.json();
		setVideosList(jsonData?.items);
	};
	return (
		<div className="flex flex-wrap">
			{videosList && <AdVideoCard info={videosList[0]} />}
			{videosList &&
				videosList.map((video) => (
					<Link
						to={'/watch?v=' + video.id}
						key={video.id}
					>
						<VideoCard info={video} />
					</Link>
				))}
		</div>
	);
};
export default VideoContainer;
