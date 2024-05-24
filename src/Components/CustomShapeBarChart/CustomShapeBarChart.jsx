import React from 'react';

const CustomShapeBarChart = ({readbook}) => {
	const {bookName,totalPages} = readbook;
	return (
		<div>
			<h3>{bookName}</h3>
			<h3>{totalPages}</h3>
		</div>
	);
};

export default CustomShapeBarChart;