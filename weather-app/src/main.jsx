import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/nav/Nav.css'
import './components/search/Search.css'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  } from "react-router-dom";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
    }

  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);
