import React from 'react';

const CustomShapeBarChart = ({ readbook }) => {
    const { bookName, totalPages } = readbook;

    // Calculate the percentage width of the bar
    const barWidth = `${(totalPages / 1000) * 100}%`; // Assuming 1000 pages as max for visualization

    return (
        <div className="bg-gray-200 w-full p-2 rounded-lg mb-4">
            <div className="text-lg font-semibold">{bookName}</div>
            <div className="h-6 bg-blue-500 rounded-full">
                <div className="h-full bg-blue-700 rounded-full" style={{ width: barWidth }}></div>
            </div>
            <div className="text-sm text-gray-600 mt-1">{totalPages} Pages</div>
        </div>
    );
};

export default CustomShapeBarChart;
