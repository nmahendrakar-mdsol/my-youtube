import React from 'react';
import FilterButton from './FilterButton';

const ButtonFilters = () => {
	return (
		<div className="flex">
			<FilterButton name="All" />
			<FilterButton name="Gaming" />
			<FilterButton name="Live" />
			<FilterButton name="Soccer" />
			<FilterButton name="News" />
			<FilterButton name="Songs" />
			<FilterButton name="Javascript" />
			<FilterButton name="React" />
		</div>
	);
};

export default ButtonFilters;
