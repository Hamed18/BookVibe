import React from "react";
import Books from "../Books/Books";
import bannerImg from '../../assets/bannerImg.png';
import { NavLink } from "react-router-dom";  {/* syntax */}


const Home = () => {
  return (
    <div>

<div className="card lg:card-side bg-base-100 shadow-xl my-4 p-4 max-w-7xl mx-auto">
  <div className="card-body max-w-[500px] mx-auto h-full">
    <h2 className="card-title font-bold m-4 text-3xl">Books to freshen <br /> up your bookshelf</h2>
    <div className="card-actions justify-start items-center m-4">
         <NavLink to={`ListedBooks`} className="mr-4 p-2 bg-green-500 rounded-xl text-white font-bold">View The List</NavLink>
    </div>
  </div>

  <figure className="max-w-[500px] mx-auto h-full"><img className="max-w-[500px] mx-auto h-full" src={bannerImg} alt="Album"/></figure>

</div>

	  <Books></Books>

    </div>
  );
};

export default Home;
