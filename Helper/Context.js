'use client'
import React,{createContext, useContext} from 'react'
export const MyContext = createContext()
const Context = ({children}) => {
    const username="Priyanshu Pandey"

  return (

    <div><MyContext.Provider value={username}>
        {children}
        </MyContext.Provider></div>
  )
}

export default Context

