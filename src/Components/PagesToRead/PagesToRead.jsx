import React from 'react';
import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getStoredReadBooks } from "../../Utility/Localstorage";
import CustomShapeBarChart from '../CustomShapeBarChart/CustomShapeBarChart';

const PagesToRead = () => {
	const books = useLoaderData();  // all cards 
	const [ReadBookList, setReadBookList] = useState([]);
	//const [DisplayReadBookList, setDisplayReadBookList] = useState([]);

	useEffect( () =>{
        const storedBookIds = getStoredReadBooks();  // id (each card has unique id) that are added in local storage

		if (books && books.length > 0) {
			const ReadBooks = books.filter(book => storedBookIds.includes(book.bookId)); // corrected filter method
		//	console.log(books, storedBookIds, ReadBooks);
		//	console.log(ReadBooks);
		    setReadBookList(ReadBooks);
		//	console.log(ReadBookList);
		}
	},[])

	return (
		<div className=''>
			{
				ReadBookList.map((readbook,idx) => <CustomShapeBarChart key={idx} readbook={readbook}></CustomShapeBarChart> )
			}
		</div>
	);
};

export default PagesToRead;