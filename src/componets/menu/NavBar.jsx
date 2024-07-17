import React from "react";
import './NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShZC-aRMjhBjWR8HqOAZPXCyMDC7ueGE2pg&s" alt="logo" className="logo"/>
            <ul className="nav-links">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/produtos'>Produtos</Link></li>
                <li><Link to='/contato'>Contato</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar
