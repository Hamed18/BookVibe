import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredReadBooks } from "../../Utility/Localstorage";
import ReadBook from "../ReadBook/ReadBook";

const ReadList = () => {
	const books = useLoaderData();  // all cards 
	const [ReadBookList, setReadBookList] = useState([]);

	useEffect( () =>{
        const storedBookIds = getStoredReadBooks();  // id (each card has unique id) that are added in local storage

		if (books && books.length > 0) {
			const ReadBooks = books.filter(book => storedBookIds.includes(book.bookId)); // corrected filter method
		//	console.log(books, storedBookIds, ReadBooks);
		    setReadBookList(ReadBooks);
		}
	},[])

	return (
		<div>
			<h3 className="text-center">No. of Read Books: {books.length}</h3>
			{
				ReadBookList.map((readBook,idx) => <ReadBook readBook={readBook} key={idx}></ReadBook>)
			}
		</div>
	);
};

export default ReadList;