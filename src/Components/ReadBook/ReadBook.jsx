
const ReadBook = ({readBook}) => {
	const {bookId} = readBook;
	return (
		<div className="border border-gray-200 w-10 h-10">
			<h3>{bookId}</h3>
		</div>
	);
};

export default ReadBook;