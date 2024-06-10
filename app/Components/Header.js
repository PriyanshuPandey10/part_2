import React from 'react'
import Nav from './Nav'
const Header = (props) => {
    console.log(props.num)
  return (
    <div className='bg-green-200 p-5'>Header<Nav num={props.num}/></div>
  )
}

export default Header