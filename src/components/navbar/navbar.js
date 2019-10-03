import React from 'react'
import icon from './../../images/icon.svg'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = props => {
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.link}>
                <img src={icon} className={styles.icon} alt="icon" />
                <span className={styles.text}>Pokédex</span>
            </Link>
        </nav>
    )
}

export default Navbar