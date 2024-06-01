import { useActionData } from "react-router-dom";
import AuthorCard from "./AuthorCard";
import React, { useEffect, useState } from 'react';

const Author = () => {
	//const Authors = useActionData();  // all cards 
	const [Authors,setAuthors] = useState([]);

	useEffect( () => {
		fetch('Author.json')
		.then(res => res.json())
		.then(data => setAuthors(data))
	},[])

	return (
		<div>
			<h2 className="text-center my-4 font-bold text-3xl">Some Popular Authors</h2>
			{
              Authors.map((Author,idx) => <AuthorCard key={idx} Authors={Author}></AuthorCard>)
			}
		</div>
	);
};

export default Author;