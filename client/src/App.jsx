import { useState } from 'react'

import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

import './pages/style.scss'
import './components/components.scss'
import Home from './pages/Home'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Single from './pages/Single';
import Write from './pages/Write';
import Register from './pages/Register';
import Login from './pages/Login';
import ScrollToTop from './components/ScrollToTop';

const Layout = ()=>{
  return(
    <>
    <ScrollToTop/>
    <Navigation/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/post/:id",
        element: <Single/>
      },
      {
        path: "/write",
        element: <Write/>
      }
    ]
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  }
]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
