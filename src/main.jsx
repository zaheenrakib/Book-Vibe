import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import ListedBook from './components/ListedBooks/ListedBook';
import PageToRead from './components/PageToRead/PageToRead';
import BookDetails from './components/BookDetails/BookDetails';

const router = createBrowserRouter([ 
  {
    path: "/",
    element: <Root></Root>,
    //errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('book.json')
      },
      {
        path: 'listedbooks',
        element: <ListedBook></ListedBook>,
        // loader: async () => await fetch('book.json')
      },
      {
        path: 'pagetoread',
        element: <PageToRead></PageToRead>
      },
      {
        path: 'statistics',
        element : <BookDetails></BookDetails>
      },
      {
        path: 'book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: async () => await fetch('book.json')
      }
    ]
  },
] );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
