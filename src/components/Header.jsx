import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from './utilities/appSlice';
import { useEffect, useState } from 'react';
import { YOUTUBE_SEARCH_RECOMMENDATIONS_API } from './utilities/constants';
import { cacheResults } from './utilities/searchSlice';

const Header = () => {
	const dispatch = useDispatch();
	const toggleMenuhandler = () => {
		dispatch(toggleMenu());
	};
	const [searchText, setSearchText] = useState('');
	const [searchResults, setSearchResults] = useState();
	const [showSuggestions, setShowSuggestions] = useState(false);

	const searchCache = useSelector((store) => store.search);
	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchText) {
				if (searchCache[searchText]) {
					setSearchResults(searchCache[searchText]);
				}
				getSearchResults();
			}
		}, 200);
		return () => {
			clearTimeout(timer);
		};
	}, [searchText]);

	const getSearchResults = async () => {
		const data = await fetch(YOUTUBE_SEARCH_RECOMMENDATIONS_API + searchText);
		const jsonData = await data.json();

		setSearchResults(jsonData[1]);
		dispatch(
			cacheResults({
				[searchText]: jsonData[1],
			})
		);
	};
	return (
		<div className="grid grid-flow-col p-5 m-2 shadow-lg">
			<div className="flex col-span-1">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
					alt="menu"
					className="h-8 cursor-pointer"
					onClick={() => toggleMenuhandler()}
				></img>
				<a href="/">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
						alt="logo"
						className="h-8 mx-2"
					></img>
				</a>
			</div>
			<div className="col-span-10 px-10 ">
				<div>
					<input
						className="p-2 px-5 border border-gray-400 w-1/2 rounded-l-full "
						type="text"
						value={searchText}
						onChange={(e) => setSearchText(e.target?.value)}
						onFocus={() => setShowSuggestions(true)}
						onBlur={() => setShowSuggestions(false)}
					/>
					<button className="p-2 border border-gray-400  px-3 bg-gray-200  rounded-r-full">
						🔍
					</button>
				</div>
				{showSuggestions && (
					<div className="fixed bg-white p-2  w-[33rem] shadow-lg rounded-lg border border-gray-200 ">
						<ul>
							{searchResults?.map((result) => (
								<li
									className="py-2 px-3 hover:bg-gray-200"
									key={result}
								>
									{result}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>

			<div className="col-span-1 ">
				<img
					src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
					alt="user"
					className="h-8"
				/>
			</div>
		</div>
	);
};
export default Header;
