import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getStoredWishList } from "../../Utility/Localstorage";
import WishBook from "../WishBook/WishBook";
import { BookContext } from "../ListedBooks/ListedBooks";



const WishList = () => {
	const books = useLoaderData();  // all cards 
	const [WishBookList, setWishBookList] = useState([]);
	const [DisplayWishBookList, setDisplayWishBookList] = useState([]);

	useEffect( () =>{
        const storedBookIds = getStoredWishList();  // id (each card has unique id) that are added in local storage

		if (books && books.length > 0) {
			const WishBooks = books.filter(book => storedBookIds.includes(book.bookId)); // corrected filter method
			console.log(books, storedBookIds, WishBooks);
		    setWishBookList(WishBooks);
		}
	},[])

	const WishType = useContext(BookContext);
	console.log(WishType);

	useEffect( () =>{
		let sortedBooks = [...WishBookList];
		 if (WishType === "Rating"){
			 sortedBooks.sort( (a,b) => b.rating - a.rating)   // slice()
		}
		else if (WishType === "Page"){
			 sortedBooks.sort( (a,b) => b.totalPages - a.totalPages)
		}
		else if (WishType === "Year"){
			 sortedBooks.sort( (a,b) => b.yearOfPublishing - a.yearOfPublishing)
		}
		 
		setDisplayWishBookList(sortedBooks);  // avoid re-render
	 },[WishType,WishBookList])
 

	return (
		<div>
			{
				DisplayWishBookList.map((wishBook,idx) => <WishBook wishBook={wishBook} key={idx}></WishBook>)
			}
		</div>
	);
};

export default WishList;