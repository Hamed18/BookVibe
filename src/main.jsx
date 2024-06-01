import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
import WishList from './Components/WishList/WishList.jsx';
import ReadList from './Components/ReadList/ReadList.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './Components/PagesToRead/PagesToRead.jsx';
import Author from './Components/Author.jsx';
import BookFair from './Components/BookFair/BookFair.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/Book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('books.json'),
      },
      {
        path: '/ListedBooks',
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index : true,
            element: <ReadList></ReadList>,
            loader: () => fetch('books.json')         
          },
          {
            path: 'wishList', 
            element: <WishList></WishList>, 
            loader: () => fetch('books.json')          
          },
        ],
      },
      {
        path: '/PagesToRead',
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('books.json'),         
      },
      {
        path: '/Author',
        element: <Author></Author>,
      },
      {
        path: '/BookFair',
        element: <BookFair></BookFair>,
      }
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


{/*
  {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/details/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch(`/books.json`),
      },
      {
        path: '/books',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/reads',
        element: <PagesReads></PagesReads>
      },
}

*/}

{/*
    {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/Book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('books.json'),
      },
      {
        path: '/ListedBooks',
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index : true,
            element: <ReadList></ReadList>,
            loader: () => fetch('books.json')         
          },
          {
            path: 'read', 
            element: <ReadList></ReadList>,
            loader: () => fetch('books.json')            
          },
          {
            path: 'wishList', 
            element: <WishList></WishList>, 
            loader: () => fetch('books.json')          
          },
        ],
      },
      {
        path: '/PagesToRead',
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('books.json'),         
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


}

*/}

{/*  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/Book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('books.json'),
      },
      {
        path: '/ListedBooks',
        element: <ListedBooks></ListedBooks>,
      },
      {
            index : true,
            element: <ReadList></ReadList>,
            loader: () => fetch('books.json')         
      },
      {
            path: '/read', 
            element: <ReadList></ReadList>,
            loader: () => fetch('books.json')            
      },
      {
            path: '/wishList', 
            element: <WishList></WishList>, 
            loader: () => fetch('books.json')          
      },
      {
        path: '/PagesToRead',
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('books.json'),         
      }
    ]
  }  */}
