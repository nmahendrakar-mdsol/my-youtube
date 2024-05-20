import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from './utilities/chatSlice';
import { generateRandomName, generateRandomString } from './utilities/helper';

const LiveChat = () => {
	const dispatch = useDispatch();
	const chatMessages = useSelector((store) => store.chat.messages);
	const [liveMessage, setLiveMessage] = useState('');

	useEffect(() => {
		const timer = setInterval(() => {
			// update the same thing with API  call
			dispatch(
				addMessage({
					name: generateRandomName(),
					message: generateRandomString(15),
				})
			);
		}, 2000);

		return () => clearInterval(timer);
	}, []);

	return (
		<>
			<div className="ml-2 w-full h-[600px] border border-black overflow-y-scroll flex flex-col-reverse">
				{/* <h1 className="text-3xl font-bold w-full p-2 border border-gray-200 shadow-lg">
				Chat Bar 🔽
			</h1> */}
				{chatMessages.map((chat, index) => (
					<ChatMessage
						key={index}
						name={chat.name}
						message={chat.message}
					/>
				))}
			</div>
			<form
				className="ml-2 m-2 p-2 w-full border border-black flex"
				onSubmit={(e) => {
					e.preventDefault();
					dispatch(
						addMessage({
							name: 'Nikhil Mahendrakar',
							message: liveMessage,
						})
					);
					setLiveMessage('');
				}}
			>
				<input
					type="text"
					className="ml-2 w-96 px-2 "
					placeholder="Enter text here"
					value={liveMessage}
					onChange={(e) => setLiveMessage(e.target.value)}
				/>
				<button className="mx-1  px-2 border border-black rounded-lg">
					Submit
				</button>
			</form>
		</>
	);
};

export default LiveChat;
