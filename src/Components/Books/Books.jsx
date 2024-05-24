import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
	const [books,setBooks] = useState([]);

	useEffect( () => {
		fetch('books.json')
		.then(res => res.json())
		.then(data => setBooks(data))
	},[])
	//console.log(books);

	return (
		<div>
			<h3 className="text-center font-bold my-8 text-3xl">Books</h3>

			<div className='lg:grid grid-cols-3 gap-4'>
			{
				books.map(book => <Book book={book} key={book.bookId}></Book>)
			}

			</div>
		</div>
		
	);
};

export default Books;



// Books section lies in Home Page.