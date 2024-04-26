import React from 'react'
import Header from '@/content/components/Header'
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Homepage = () => {
  return (
    <div className='homepage'>
        <Header/>

        <Outlet/>
        <ToastContainer/>
    </div>
  )
}

export default Homepage