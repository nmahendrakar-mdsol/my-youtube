import React from 'react';

const FilterButton = ({ name }) => {
	return (
		<div>
			<button className="m-2 px-5 rounded-lg py-2 bg-gray-200"> {name}</button>
		</div>
	);
};

export default FilterButton;
