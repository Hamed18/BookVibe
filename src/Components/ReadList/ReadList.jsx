import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getStoredReadBooks } from "../../Utility/Localstorage";
import ReadBook from "../ReadBook/ReadBook";
import { BookContext } from "../ListedBooks/ListedBooks";

const ReadList = () => {
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
		}
	},[])

	const BookType = useContext(BookContext);

//	console.log(BookType);
/*
	if (BookType === "Rating"){
		setDisplayReadBookList(appliedjobs);
	}
	else if (BookType === "Page"){
	 const RemoteJob = ReadBookList..sort((a, b) => b - a); // cards that will be added to cart
	 setDisplayReadBookList(RemoteJob);
	}
	else if (BookType === "Year"){
	 const OnsiteJob = ReadBookList.filter((job) => job.remote_or_onsite === "Onsite"); // cards that will be added to cart
	 setDisplayReadBookList(OnsiteJob);
	}
}   */


	

	return (
		<div>
			{
				ReadBookList.map((readBook,idx) => <ReadBook readBook={readBook} key={idx}></ReadBook>)
			}
		</div>
	);
};

export default ReadList;