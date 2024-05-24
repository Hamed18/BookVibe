import React, { createContext, useState } from "react";
import { Outlet, NavLink } from "react-router-dom"; // corrected import

  //const {BookFilter,setBookFilter} = useState('');
export const BookContext = createContext();

const ListedBooks = () => {
  const [BookFilter,setBookFilter] = useState('');

  const handleFilter = (type) =>{
    setBookFilter(type);
  } ;

  return (
    <div className="max-w-7xl">

      <div className="flex justify-center mt-4 mb-12">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li onClick={ () => {handleFilter("Rating")}}>
              <a>Rating</a>
            </li>
            <li onClick={ () => {handleFilter("Page")}}>
              <a>Number of Pages</a>
            </li>
            <li onClick={ () => {handleFilter("Year")}}>
              <a>Publish Year</a>
            </li>
          </ul>
        </div>

      </div>

      

      <div>
        <div className="flex items-center my-4">
          <NavLink to={`/ListedBooks/read`} className="mr-4">Read</NavLink> {/* Replaced Link with NavLink */}
          <NavLink to={`/ListedBooks/wishList`} className="mr-4">Wish</NavLink> {/* read documentation */}
        </div> 
        <hr />
      </div>
      
      <BookContext.Provider value={BookFilter}>
          <Outlet></Outlet>
      </BookContext.Provider>

    </div>
  );
};

export default ListedBooks;
