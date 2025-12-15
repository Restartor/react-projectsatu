import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import Error404 from './WebPage/ErrNotFound.jsx'
import GenrePage from './WebPage/genreFilms/GenrePage.jsx'


// make a path for each genre film page if clicked then goes to the
// genreFilms folder and open the genre film page based on the genre clicked
// 

const router = createBrowserRouter([
  {
    path: "/", element: <App />
  },
  {
    path: "/films/genre/:genre",
    element: <GenrePage />
  },
  {
    path: "/films/movies/:movies",
    element: <Error404 />
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
