import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getStoredReadBooks } from "../../Utility/Localstorage";
import ReadBook from "../ReadBook/ReadBook";
import { BookContext } from "../ListedBooks/ListedBooks";

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

	const BookType = useContext(BookContext);
//	console.log(BookType);

	

	return (
		<div>
			{
				ReadBookList.map((readBook,idx) => <ReadBook readBook={readBook} key={idx}></ReadBook>)
			}
		</div>
	);
};

export default ReadList;