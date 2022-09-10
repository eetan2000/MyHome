import React from 'react'
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'


const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <h1>MyHome</h1>
            </NavLink>    
            <NavMenu>
                <NavLink to="/Notes" activeStyle>
                    Notes
                </NavLink>
                <NavLink to="/Weather" activeStyle>
                    Weather
                </NavLink>
                <NavLink to="/CalendarComponent" activeStyle>
                    Calendar
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/SignOut'>Sign Out</NavBtnLink>
            </NavBtn>
        </Nav> 
    </>
  )
}

export default Navbar
