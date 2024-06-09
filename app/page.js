'use client'
import React, { useState } from 'react'

export const page = () => {
  const [username, setusername] = useState('')
  return (
    <>
    <h1 className='mb-5 text-xxl'>Enter Your Name</h1>
    <form>
      <input type="text" className="border-2 border-zinc-800 px-4 py-2 text-xl" value={username}
      onChange={(e)=>{
        setusername(e.target.value)
        console.log(username)
        }}/>




    </form>

    
    </>
  )
}
export default page
