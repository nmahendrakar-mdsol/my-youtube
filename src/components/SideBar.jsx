import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
	const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

	if (isMenuOpen) {
		return (
			<div className="p-3 m-2 shadow-lg w-48">
				<ul className="my-3">
					<Link to="/">
						<li>Home</li>
					</Link>
					<li>Live</li>
					<li>Shorts</li>
					<li>Videos</li>
				</ul>
				<h1 className="font-bold">Subscriptions</h1>
				<ul className="my-3">
					<li>Sports</li>
					<li>Music</li>
					<li>Movies</li>
					<li>News</li>
				</ul>
				<h1 className="font-bold">Watch Later</h1>
				<ul className="my-3">
					<li>Sports</li>
					<li>Music</li>
					<li>Movies</li>
					<li>News</li>
				</ul>
			</div>
		);
	}
};

export default SideBar;
