import React, { useEffect, useState } from 'react';
import BookFairCard from './BookFairCard';

const BookFair = () => {
	const [BookFairs,setBookFair] = useState([]);

	useEffect( () => {
		fetch('BookFair.json')
		.then(res => res.json())
		.then(data => setBookFair(data))
	},[])

	return (
		<div>
           <h2 className="text-center my-4 font-bold text-3xl">Recent Book Fairs</h2>
		   {
			BookFairs.map((BookFair,idx) => <BookFairCard key={idx} BookFair={BookFair}></BookFairCard>)
		   }
		</div>
	);
};

export default BookFair;