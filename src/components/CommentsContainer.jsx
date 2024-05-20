import React from 'react';
import { commentsData } from './utilities/constants';

const Comment = ({ data }) => {
	return (
		<div className=" shadow-lg bg-gray-100 flex p-2 my-2 ">
			<img
				className="h-12 w-12 "
				src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
				alt="user icon"
			/>
			<div>
				<h1 className="text-xl font-bold mx-2"> {data?.name} </h1>
				<h1 className=" mx-2"> {data?.text} </h1>
			</div>
		</div>
	);
};
const CommentsList = ({ commentsData }) => {
	return commentsData.map((comment, index) => (
		<div key={index}>
			<Comment
				key={index}
				data={comment}
			/>
			<div className="pl-5 border border-l-black ml-5">
				<CommentsList commentsData={comment.replies} />
			</div>
		</div>
	));
};

const CommentsContainer = () => {
	return (
		<div className="p-2 m-5">
			<h1 className="text-3xl font-bold "> Comments: </h1>
			<CommentsList commentsData={commentsData} />
		</div>
	);
};

export default CommentsContainer;
