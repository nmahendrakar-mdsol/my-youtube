import React from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from './utilities/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const Watchpage = () => {
	const dispatch = useDispatch();

	const [params] = useSearchParams();

	const videoID = params.get('v');

	dispatch(closeMenu());

	return (
		<div className="flex flex-col w-full">
			<div className="px-5 flex ">
				<div>
					<iframe
						width="1000"
						height="600"
						src={'https://www.youtube.com/embed/' + videoID}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<div className="w-full">
					<LiveChat />
				</div>
			</div>
			<CommentsContainer />
		</div>
	);
};

export default Watchpage;
