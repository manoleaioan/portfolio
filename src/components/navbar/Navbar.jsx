import React, { useEffect, useState, useRef } from 'react';
import { Link, scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Logo from '../logo/Logo';
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import './Navbar.scss';
import { usePreviousPath } from '../../context/PreviousPathContext';



const Navbar = () => {
  const [scrolled, setScrolled] = React.useState();
  const [theme, setTheme] = React.useState('light');
  const [menuOpen, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const sectionId = location.pathname.split("/")[1];
  const previousPath = usePreviousPath();
  const [activeSection, setActiveSection] = useState(sectionId.startsWith('project') ? 'projects' : sectionId);
  const handleScrollTimeoutId = useRef(null);
  const setActiveTimeoutId = useRef(null);

  useEffect(() => {
    scroller.scrollTo(sectionId, {
      smooth: true,
      duration: previousPath?.startsWith('/project/') && location.pathname === '/projects' ? 0 : 750,
      offset: -55,
    });

    if (sectionId.startsWith('project')) {
      setActiveSection('projects');
    }

  }, [sectionId])

  const handleCheckBox = (e) => {
    setOpen(e.target.checked)
  }

  const handleScroll = () => {
    setScrolled(window.scrollY > 70);

    setOpen(false);
  }

  useEffect(() => {
    setTheme(localStorage.getItem('theme'));
    document.querySelector("body").setAttribute('data-theme', localStorage.getItem('theme'));
    updateMetaThemeColor(theme);
    setTimeout(() => handleScroll(), 100)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    if (handleScrollTimeoutId.current) clearTimeout(handleScrollTimeoutId.current);
    handleScrollTimeoutId.current = setTimeout(() => handleScroll(), 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [location.pathname])


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

      updateMetaThemeColor(newTheme);

      setTimeout(() => {
        navbar.style.transition = 'none';
        body.style.transition = 'none';
      }, 1000);

      return newTheme;
    });
  }

  const updateMetaThemeColor = () => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    const themeElement = document.querySelector("[data-theme]");

    if (!themeElement || !metaThemeColor) {
      console.warn("Theme element or meta tag not found.");
      return;
    }

    const themeColor = getComputedStyle(themeElement)
      .getPropertyValue("--bg-gradient-end")
      .trim();

    metaThemeColor.setAttribute("content", themeColor);
  };

  const onNavClick = (path) => {
    if (previousPath?.startsWith('/project/') && (path == -1 || path === 'projects')) {
      window.scrollTo(0, 0);
    }

    setActiveSection(path);
    navigate(path);
  }

  const handleOnSetActive = (path) => {
    path = path === "hero" ? "" : path;

    if (setActiveTimeoutId.current) clearTimeout(setActiveTimeoutId.current);
    setActiveTimeoutId.current = setTimeout(() => {
      setActiveSection(path)
      window.history.replaceState(null, "", path === '' ? '/' : path);
      // navigate(path === '' ? '/' : path, { replace: true, preventScrollReset: true });
      // window.history.replaceState(null, "", `${process.env.PUBLIC_URL}${path === '' ? '/' : `/${path}`}`);
      window.history.replaceState(null, "", `${process.env.PUBLIC_URL}${path === '' ? '/' : `/${path}`}`);
    }, 500);
  }

  return (
    <>
      <header className={headerClasses}>
        <div id="wrap">
          <div id="logo">
            <Link to="hero" smooth={true} duration={750} offset={-55} onClick={() => onNavClick(sectionId.startsWith('project') ? 'projects' : '')}><Logo /></Link>
          </div>

          <div className='side-wrap'>

            <label className='dark_mode_label' htmlFor='darkmode-toggle' id='theme-btn'>
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

            <div className="navbar__menuToggle">
              <input id="checkbox" type="checkbox" onChange={handleCheckBox} checked={menuOpen} />
              <span></span>
              <span></span>
              <span></span>
            </div>


            <nav className={"navigation " + (menuOpen ? " navigation-open" : "")}>
              <ul>
                <li>
                  <Link to="hero" smooth={true} duration={750} offset={-55} onClick={() => onNavClick('')}>
                    Home
                  </Link>
                  <Link className="navbar-link" to="hero" spy={true} offset={-400} onSetActive={handleOnSetActive} key={sectionId}></Link>
                  {activeSection === '' && <motion.div className='navbar__activeLink' layoutId='indicator'></motion.div>}
                </li>

                <li>
                  <Link to="skills" smooth={true} duration={750} offset={-55} onClick={() => onNavClick('skills')}>
                    SKILLS
                  </Link>
                  <Link className="navbar-link" to="skills" spy={true} offset={-400} onSetActive={handleOnSetActive} key={sectionId}></Link>
                  {activeSection === 'skills' && <motion.div className='navbar__activeLink' layoutId='indicator'></motion.div>}
                </li>

                <li>
                  <Link to="projects" smooth={true} duration={750} offset={-55} onClick={() => onNavClick('projects')}>
                    PROJECTS
                  </Link>
                  <Link className="navbar-link" to="projects" spy={true} offset={-400} onSetActive={handleOnSetActive} key={sectionId}></Link>
                  {activeSection === 'projects' && <motion.div className='navbar__activeLink' layoutId='indicator'></motion.div>}
                </li>

                <li>
                  <Link to="contact" smooth={true} duration={750} offset={-55} onClick={() => onNavClick('contact')}>
                    CONTACT
                  </Link>
                  <Link className="navbar-link" to="contact" spy={true} offset={-400} onSetActive={handleOnSetActive} key={sectionId}></Link>
                  {activeSection === 'contact' && <motion.div className='navbar__activeLink' layoutId='indicator'></motion.div>}
                </li>
              </ul>
            </nav>

          </div>

        </div>

      </header>
    </>
  )
};

export default Navbar;