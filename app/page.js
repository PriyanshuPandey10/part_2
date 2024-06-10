'use client'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const notify=()=>{
    toast("Login Successfull");
  }
  return (
    <div>
      <button onClick={notify} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Click Here</button>
      <ToastContainer />
    </div>
  )
}

export default page