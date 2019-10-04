import React from 'react'
import icon from './../../images/icon.svg'
import styles from './navbar.module.css'
import { Link,withRouter } from 'react-router-dom'

const Navbar = props => {

    const typeOnChange = (e)=> {
        if(e.target.value==="off")
            props.history.push({
                search: ''
            })       
        else 
            props.history.push({
                search: '?filter='+e.target.value
            })
    }

    let types = [
        "Grass",
        "Poison",
        "Fire",
        "Flying",
        "Water",
        "Bug",
        "Normal",
        "Electric",
        "Ground",
        "Fairy",
        "Fighting",
        "Psychic",
        "Rock",
        "Steel",
        "Ice",
        "Ghost",
        "Dragon"
    ]

    let route  = props.location.pathname
    let search = window.location.search
    let params = new URLSearchParams(search)
    let defaultValue = params.get('filter') ? params.get('filter') : 'off'

    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.link}>
                <img src={icon} className={styles.icon} alt="icon" />
                <span className={styles.text}>Pokédex</span>
            </Link>

            {route==='/' && (
                <div className={styles.selectContainer}>
                    <select className={styles.selectBox} onChange={typeOnChange} defaultValue={defaultValue}>
                        <option value="off">Filter by type..</option>
                        {types.map((type,index)=>(
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
            )}
        </nav>
    )
}

export default withRouter(Navbar)