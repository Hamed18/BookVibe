import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, tags, bookName, author, category, rating } = book;
  return (
    <Link>
      <div className="w-[374px] h-[481px] border border-gray-200 shadow-xl rounded-xl m-4">
        <img
          src={image}
          alt=""
          className="flex justify-center bg-gray-200 p-2 w-[326px] h-[230px] rounded-xl"
        />
        <div className="flex items-center">
          <span className="p-2 mr-2">{tags[0]}</span>{" "}
          <span className="p-2 mr-2">{tags[1]}</span>
        </div>
        <h3 className="font-bold text-2xl">{bookName}</h3>
        <p>By: {author}</p>
        <hr />
        <div className="flex justify-between">
          <span>{category}</span>
          <div>
            <span className="mr-1">{rating}</span>
            <span className="mr-1"> </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
