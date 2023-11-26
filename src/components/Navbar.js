import React from 'react';
import { useState,useEffect } from 'react';
// import { navLinks } from '../constants';
import Logo from '../assets/APJLOGO.png';
import { NavLink, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    const [showCol , setShowCol] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setShowCol(true);
          } else {
            setShowCol(false);
          }
      };
      window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  
  const navbarClass = showCol ? 'navbarscrolled' : 'navbar';

    const toggleNavItems = () => {
        setShowNav(!showNav)
    }
    return (
        <header className="Navbar" id="Home" >
            <nav className={`Navbox ${navbarClass}`} >
                <div
                    className="LogoBox"

                >
                    <Link
                        to="/"
                    >
                        <img
                            src={Logo}
                            alt="Logo"
                            height={90}
                            width={90}
                        />
                    </Link>
                    <h1
                        className="LogoHeader"

                    >
                        APJ Abdul Kalam <br />
                        <span>Hackers Academy</span>
                    </h1>
                </div>
                <ul className={`${showNav ? 'res' : 'NavList'}`}>
                    <li><NavLink to="/" className="nav-elements">Home</NavLink></li>
                    <li><HashLink to="/#Platform" className="nav-elements">Platform</HashLink></li>
                    <li><HashLink to="/#Team" className="nav-elements">Team</HashLink></li>
                    <li><NavLink to="/Event" className="nav-elements">Events</NavLink></li>
                    <li><HashLink to="/#ContactUs" className="nav-elements">ContactUs</HashLink></li>
                </ul>
                <div className="hamburger">
                    {
                        showNav ? <i class="bi bi-x-lg" onClick={toggleNavItems} ></i> : <i class="bi bi-list" onClick={toggleNavItems}></i>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
