import React, { useState, useEffect } from 'react';
import { Link, Events } from 'react-scroll';

import './navbar.scss';
import Logo from '../../assets/logo2.svg'


const Navbar = (props) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setOpen] = React.useState(false);

  const handleCheckBox = (e) => {
    setOpen(e.target.checked)
  }

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 70) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
    setOpen(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  let headerClasses = ['navbar', scrolled && 'navbar__scrolled'].join(" ");

  return (
    <>
      <header className={headerClasses}>
        <div id="wrap">

          <div id="logo">
            <Link to="hero" smooth={true} duration={750} offset={-55}><img src={Logo} /></Link>
          </div>

          <div className="navbar__menuToggle">
            <input id="checkbox" type="checkbox" onChange={handleCheckBox} checked={menuOpen} />
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={"navigation " + (menuOpen ? " navigation-open" : "")}>
            <ul>
              <li>
                <Link to="hero" smooth={true} duration={750} offset={-55}>
                  Home
                </Link>
                <Link activeClass="navbar__activeLink" to="hero" spy={true} offset={-400}></Link>
              </li>

              <li>
                <Link to="about" smooth={true} duration={750} offset={-55}>
                  ABOUT ME
                </Link>
                <Link activeClass="navbar__activeLink" to="about" spy={true} offset={-400}></Link>
              </li>

              <li>
                <Link to="skills" smooth={true} duration={750} offset={-55}>
                  SKILLS
                </Link>
                <Link activeClass="navbar__activeLink" to="skills" spy={true} offset={-400}></Link>
              </li>

              <li>
                <Link to="portfolio" smooth={true} duration={750} offset={-55}>
                  PORTFOLIO
                </Link>
                <Link activeClass="navbar__activeLink" to="portfolio" spy={true} offset={-400}></Link>
              </li>

              <li>
                <Link to="contact" smooth={true} duration={750} offset={-55}>
                  CONTACT
                </Link>
                <Link activeClass="navbar__activeLink" to="contact" spy={true} offset={-400}></Link>
              </li>
            </ul>
            <span className="target"></span>
          </nav>

        </div>
      </header>

      {
        props.children
      }
    </>
  )
};

export default Navbar;