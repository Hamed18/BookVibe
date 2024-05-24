import React from "react";
import { Outlet, NavLink } from "react-router-dom"; // corrected import
import { useNavigate } from "react-router-dom";

const ListedBooks = () => {
  return (
    <div>
      <div className="max-w-7xl rounded-xl bg-gray-100 h-[100px]">
        <h3 className="flex justify-center items-center font-bold text-2xl">
          Books List
        </h3>
      </div>
      <div className="max-w-7xl rounded-xl bg-gray-100 h-[100px]">
        <h3 className="flex justify-center items-center font-bold text-2xl">
          Sort By
        </h3>
      </div>

      <div>
        <div className="flex items-center my-4">
          <NavLink to={`/ListedBooks/read`} className="mr-4">Read</NavLink> {/* Replaced Link with NavLink */}
          <NavLink to={`/ListedBooks/wishList`} className="mr-4">Wish List</NavLink> {/* read documentation */}
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
