import { useLoaderData, useParams } from "react-router-dom";
import { saveReadBooks, saveWishList } from "../../Utility/Localstorage";
import { useRef, useState } from "react";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  //console.log(bookId,books);

  const idInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === idInt);

  const {image,bookName,author,category,review,tags,totalPages,publisher,yearOfPublishing,rating} = book;

    // Button Functionality
//	const [disableWishListBtn, setDisableWishListBtn] = useState(false);
  const wishlistButtonRef = useRef();

  // Local Storage Functionality
  const handleReadBooks = () =>{
	wishlistButtonRef.current.disabled = true; // button func
	saveReadBooks(idInt);
	alert("You Have Applied Successfully!");
	//console.log(bookId)
  }
  const handleWishList = () =>{
	wishlistButtonRef.current.disabled = true;  // if once clicked, will be disabled
	saveWishList(idInt);
	alert("You Have Applied Successfully!");
	//console.log(bookId)
  }


  return (
    <div className="max-w-5xl mx-auto my-12">
	  <h3 className="mb-4 font-bold text-2xl text-center">Book Details</h3>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="bg-gray-200">
          <img className="h-[564px] w-[425px]  p-4 rounded-xl"
            src={image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{bookName}</h2>
          <p>by: {author}</p> <hr />
          <p>{category}</p> <hr />
          <p><span className="font-bold">Review: </span>{review}</p>
		  <div className="flex items-center">
		     <h4 className="mr-2 font-bold">Tag</h4> <span className="mr-2">#{tags[0] }</span> <span>#{ tags[1]}</span>
		  </div>
		  <hr />  

	    <div className="overflow-x-auto">
           <table className="table">
    <tbody>
      {/* row 1 */}
      <tr className="">
        <td>Number of Pages: </td>
        <td>{totalPages}</td>
      </tr>
      {/* row 2 */}
      <tr>
        <td>Publisher</td>
        <td>{publisher}</td>
      </tr>
      {/* row 3 */}
      <tr>
        <td>Year of Publishing: </td>
        <td>{yearOfPublishing}</td>
      </tr>
      {/* row 4 */}
      <tr>
        <td>Rating</td>
        <td>{rating}</td>
      </tr>
    </tbody>
  </table>
        </div>

        <div className="flex items-center justify-center">
		  <div className="card-actions justify-start mr-4">
            <button onClick={handleReadBooks} className="btn btn-primary">Read</button>
          </div>
          <div className="card-actions justify-start">
            <button onClick={handleWishList} ref={wishlistButtonRef} className="btn btn-primary">Wishlist</button>  {/* {readClicked && <button onClick={handleWishlistButtonClick}>Wishlist</button>} To hide btn*/}
          </div>
		  </div>
        </div>

      </div>
    </div>
  );
};

export default BookDetails;
