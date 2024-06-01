
const AuthorCard = ({Authors}) => {
	const {AuthorId,authorName,Country,PopularBooks,Prizes,Period} = Authors;
	return (
		<div className="max-w-5xl mx-auto my-12">
		<div className="card lg:card-side bg-base-100 shadow-xl">
		  <div className="card-body">
			<h2 className="card-title text-2xl font-bold">Author Name: {authorName}</h2>
			<p>Country: {Country}</p> <hr />
			<div className="flex flex-col items-start">
			  <h4 className="mr-2 font-bold">Popular Books:</h4>
			  <span className="mr-2">#{PopularBooks[0]}</span> <span className="mr-2">#{PopularBooks[1]}</span> <span className="mr-2">#{PopularBooks[2]}</span>
			</div>
			<div className="flex items-center">
			  <span className="mr-4">Prizes: {Prizes[0]}</span>
			</div>
			<hr />
			<div className="flex items-center">
			  <span className="pr-2 font-bold my-2 rounded-xl">
			   Period: {Period}
			  </span>
			</div>
		  </div>
		</div>
	  </div>

	);
};

export default AuthorCard;