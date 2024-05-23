import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData();
	const {bookId} = useParams();
	console.log(bookId,books);

	return (
		<div>
			<h3>details of id {bookId}</h3>
		</div>
	);
};

export default BookDetails;