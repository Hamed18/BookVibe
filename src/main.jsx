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
            path: '',
            element: <ReadList></ReadList>,
            loader: () => fetch('books.json')           // bangla system
          },
          {
            path: 'read', // Changed path to 'read'
            element: <ReadList></ReadList>,
            loader: () => fetch('books.json')            // bangla system
          },
          {
            path: 'wishList', // Changed path to 'wishList'
            element: <WishList></WishList>, // Render WishList component for 'wishList' route
            loader: () => fetch('books.json')           // bangla system
          },
        ],
      },
      {
        path: '/PagesToRead',
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('books.json'),          // bangla system
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
