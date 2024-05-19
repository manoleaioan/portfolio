import React, { useEffect } from 'react';
import { Link } from 'react-scroll';

import './navbar.scss';
import Logo from '../../assets/logo2.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
  const [scrolled, setScrolled] = React.useState();
  const [theme, setTheme] = React.useState('light');
  const [menuOpen, setOpen] = React.useState(false);

  const handleCheckBox = (e) => {
    setOpen(e.target.checked)
  }

  const handleScroll = () => {
    const offset = window.scrollY;

    const lastLi = document.querySelector('.navigation ul li:nth-last-child(2) a:last-child');

    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
      lastLi?.classList.add('navbar__activeLink');
    } else {
      lastLi?.classList.remove('navbar__activeLink');
    }

    const activeLink = document.getElementsByClassName('navbar__activeLink')[document.getElementsByClassName('navbar__activeLink').length -1];

    const target = document.querySelector('#activeLinkIndicator');
    const activeLinkRect = activeLink?.getBoundingClientRect();

    target.style.left = `${activeLinkRect?.left - document.querySelector('.navigation ul')?.getBoundingClientRect()?.x}px`;

    if (offset > 70) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
    setOpen(false);
  }

  useEffect(() => {
    setTheme(localStorage.getItem('theme'));
    document.querySelector("body").setAttribute('data-theme', localStorage.getItem('theme'));
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    setTimeout(() => {
      handleScroll();
    });
  }, [])

  let headerClasses = ['navbar', scrolled && 'navbar__scrolled'].join(" ");

  const toggleDarkMode = () => {
    var navbar = document.querySelector('.navbar');
    var body = document.body;
    navbar.style.transition = 'background-color 0.5s ease';
    body.style.transition = 'background-color 0.5s ease';

    setTheme(prevTheme => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      document.querySelector("body").setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);


      setTimeout(() => {
        navbar.style.transition = 'none';
        body.style.transition = 'none';
      }, 1000);

      return newTheme;
    });
  }

  return (
    <>
      <header className={headerClasses}>
        <div id="wrap">

          <div id="logo">
            <Link to="hero" smooth={true} duration={750} offset={-55}><img src={Logo} alt='logo' /></Link>
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
                <span id="activeLinkIndicator"></span>
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
              <li>
                <label className='dark_mode_label' for='darkmode-toggle' id='themeBtn'>
                  <input
                    className='dark_mode_input'
                    type='checkbox'
                    id='darkmode-toggle'
                    onChange={toggleDarkMode}
                  />
                  {
                    theme === 'dark' ?
                      <FontAwesomeIcon icon={faMoon} /> :
                      <FontAwesomeIcon icon={faSun} />
                  }
                </label>
              </li>
            </ul>
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