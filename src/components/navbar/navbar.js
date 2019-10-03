import React from 'react'
import icon from './../../images/icon.svg'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = props => {
    return (
        <nav className="navbar">
            <Link to="/" className="link">
                <img src={icon} className="icon" alt="icon" />
                <span className="text">Pokédex</span>
            </Link>
        </nav>
    )
}

export default Navbar