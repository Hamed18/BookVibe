import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getStoredReadBooks } from "../../Utility/Localstorage";
import ReadBook from "../ReadBook/ReadBook";
import { BookContext } from "../ListedBooks/ListedBooks";

const ReadList = () => {
	const books = useLoaderData();  // all cards 
	const [ReadBookList, setReadBookList] = useState([]);
	const [DisplayReadBookList, setDisplayReadBookList] = useState([]);

	useEffect( () =>{
        const storedBookIds = getStoredReadBooks();  // id (each card has unique id) that are added in local storage

		if (books && books.length > 0) {
			const ReadBooks = books.filter(book => storedBookIds.includes(book.bookId)); // corrected filter method
		//	console.log(books, storedBookIds, ReadBooks);
		    setReadBookList(ReadBooks);
		//	setDisplayReadBookList(ReadBooks);  // avoid re-render
		}
	},[])

	const BookType = useContext(BookContext);   // using context api
	//console.log(BookType);

	useEffect( () =>{
	   let sortedBooks = [...ReadBookList];
		if (BookType === "Rating"){
			sortedBooks.sort( (a,b) => b.rating - a.rating)   // slice()
	   }
	   else if (BookType === "Page"){
			sortedBooks.sort( (a,b) => b.totalPages - a.totalPages)
	   }
	   else if (BookType === "Year"){
			sortedBooks.sort( (a,b) => b.yearOfPublishing - a.yearOfPublishing)
	   }
        
	   setDisplayReadBookList(sortedBooks);  // avoid re-render
	},[BookType,ReadBookList])

    console.log(DisplayReadBookList);

	return (
		<div>
			{
				DisplayReadBookList.map((readBook,idx) => <ReadBook readBook={readBook} key={idx}></ReadBook>)
			}
		</div>
	);
};

export default ReadList;