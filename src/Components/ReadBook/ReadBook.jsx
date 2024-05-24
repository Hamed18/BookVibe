const ReadBook = ({ readBook }) => {

  const {
    bookId,
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating
  } = readBook;

  return (
    <div className="max-w-5xl mx-auto my-12">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="bg-gray-200">
          <img
            className="h-[230px] w-[230px]  p-4 rounded-xl"
            src={image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{bookName}</h2>
          <p>by: {author}</p> <hr />
          <div className="flex items-center">
            <h4 className="mr-2 font-bold">Tag</h4>{" "}
            <span className="mr-2">#{tags[0]}</span> <span>#{tags[1]}</span>
            <p className="ml-4"><span className="font-bold">Year of Publishing:</span> {yearOfPublishing}</p>
          </div>
          <div className="flex items-center">
		    <span className="mr-4">Publisher: {publisher}</span>
			<span className="">Pages: {totalPages}</span>
          </div>{" "}
          <hr />
          <div className="flex items-center">
            <span className="p-2 mr-2 my-2 rounded-xl">
              Category: {category}
            </span>
            <span className="p-2 mr-2 my-2 rounded-xl">Rating: {rating}</span>
            <button className="btn bg-green-500 text-white font-bold p-2 rounded-xl">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
