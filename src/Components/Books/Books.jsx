import React, { useEffect, useState } from 'react';

const Books = () => {
	const [books,setBooks] = useState([]);

	useEffect( () => {
		fetch('books.json')
		.then(res => res.json())
		.then(data => setBooks(data))
	},[])
	console.log(books);

	return (
		<div>
			<h3 className="text-center font-bold my-8">Books: {books.length}</h3>
		</div>
	);
};

export default Books;



// Books section lies in Home Page.