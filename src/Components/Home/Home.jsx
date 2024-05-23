import React from "react";
import Books from "../Books/Books";

const Home = () => {
  return (
    <div>

      <div className="card card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Books to freshen <br /> up your bookshelf</h2>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">View The List</button>
          </div>
        </div>

		<figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </figure>
      </div>

	  <Books></Books>

    </div>
  );
};

export default Home;
