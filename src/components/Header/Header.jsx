import { useState } from 'react'
import "../Header/Header.css"
import {Link} from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
            <nav className='navbar'>
                <div className="logo">Vivekanand College</div>
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>&#9776;</div>
            
                <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="Admission"><button className='button'>Apply Now</button></Link>
                </div>
            </nav>
    )
}

export default Header