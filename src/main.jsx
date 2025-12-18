import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import Error404 from './WebPage/ErrNotFound.jsx'
import GenrePage from './WebPage/genreFilms/GenrePage.jsx'
import MoviesPage from './WebPage/Movies/MoviesPage.jsx'

// make a path for each genre film page if clicked then goes to the
// genreFilms folder and open the genre film page based on the genre clicked
// 

const router = createBrowserRouter([
  {
    path: "/", element: <App />
  },
  {
    path: "/films/category/:genre",
    element: <GenrePage />
  },
  {
    path: "/films/movies/:movies",
    element: <MoviesPage />
  },
  {
    path: "*", 
    element: <Error404 />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
