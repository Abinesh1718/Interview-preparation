import React from 'react'
import Header from './Header'
import './style.css'
import Footer from './Footer'
import piza from '../assets/piza.jpg'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <Header />
            <div className='header-container' style={{ backgroundImage: `url(${piza})` }}>
                <h1>Piza ariaa</h1>
                <p>Piza is to any Taste</p>

                <Link to="#">
                    <button>
                        Order Now </button></Link>
            </div>


            {/* <Footer /> */}
        </div>
    )
}

export default Home