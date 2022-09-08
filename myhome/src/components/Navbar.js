import React from 'react'
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
import {AiFillHome} from "react-icons/ai"

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <h1>Logo</h1>
            </NavLink>    
            <NavMenu>
                <NavLink to="/notes" activeStyle>
                    Notes
                </NavLink>
                <NavLink to="/weather" activeStyle>
                    Weather
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/signOut'>Sign Out</NavBtnLink>
            </NavBtn>
        </Nav> 
    </>
  )
}

export default Navbar
