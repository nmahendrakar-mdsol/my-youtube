import React from 'react';

const ChatMessage = ({ name, message }) => {
	return (
		<div className="w-full p-1 m-1 shadow-lg border border-gray-200 flex">
			<img
				src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
				alt="user icon"
				className="h-8 p-1"
			/>
			<h1 className="p-1 ml-3 text-xl font-bold">{name}</h1>
			<p className="">{message}</p>
		</div>
	);
};

export default ChatMessage;
