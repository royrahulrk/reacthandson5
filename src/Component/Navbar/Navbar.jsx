import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <div className='nav'>
           <ul>
            <NavLink to={"/"} className="link"><li>Higher-Order Components</li></NavLink>
            <NavLink to={"/pure"} className="link"><li>PureComponent</li></NavLink>
            
           </ul>
        </div>
    </>
  )
}

export default Navbar