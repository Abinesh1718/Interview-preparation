import React, { useState } from 'react'
import logo from '../assets/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Footer from './Footer';
function Header() {
    const [open, setopen] = useState(false)

    const handleTogle = (e) => {
        e.preventDefault()
        setopen(!open)
    }

    return (
        <div className='header-container'>

            <div className={`logo-img ${open ? 'open' : 'close'}`}>

                <img src={logo} width={80} height={40} />
                <div className="hidden-links">
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About us </Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <nav className='nav-container'>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About us </Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <button onClick={handleTogle} className='menu-button'>


                <MenuIcon />
            </button>

        </div>
    )
}

export default Header