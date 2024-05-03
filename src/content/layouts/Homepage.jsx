import React from 'react'
import Header from '@/content/components/Header'
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "@/content/components/Products";

const Homepage = () => {
  return (
    <div className='homepage'>
        <Header/>
        <Outlet/>
        <div>
            Products
            <Product/>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Homepage