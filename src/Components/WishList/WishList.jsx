import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredWishList } from "../../Utility/Localstorage";
import WishBook from "../WishBook/WishBook";


const WishList = () => {
	const books = useLoaderData();  // all cards 
	const [WishBookList, setWishBookList] = useState([]);

	useEffect( () =>{
        const storedBookIds = getStoredWishList();  // id (each card has unique id) that are added in local storage

		if (books && books.length > 0) {
			const WishBooks = books.filter(book => storedBookIds.includes(book.bookId)); // corrected filter method
			console.log(books, storedBookIds, WishBooks);
		    setWishBookList(WishBooks);
		}
	},[])

	return (
		<div>
			<h3 className="text-center">No. of Wish Books: {books.length}</h3>
			{
				WishBookList.map((wishBook,idx) => <WishBook wishBook={wishBook} key={idx}></WishBook>)
			}
		</div>
	);
};

export default WishList;