import React from 'react';

import './portfolio.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import Fade from 'react-reveal/Fade';

import CrownLogo from '../../assets/crown.svg'
import MsgMeLogo from '../../assets/msgme.png'

const Portfolio = () => (
  <div id="portfolio">
    <h2>Portfolio</h2>
    <div id="cards">
      <Fade bottom>
        <div className='card'>
          <div className='head'>
            <img src={CrownLogo} />
          </div>

          <h2>Crown Clothing</h2>
          <p className="short-description">E-Commerce Website with stripe API</p>

          <ul>
            <li>Firebase</li>
            <li>React</li>
            <li>Stripe</li>
          </ul>

          <div className="btns">
            <a href="https://react-ec-app.herokuapp.com/" target="blank"><button><FontAwesomeIcon icon={faGlobe} />See Live</button></a>
            <a href="https://github.com/manoleaioan/ecommerce" target="blank"><button className="git"><FontAwesomeIcon icon={faGithub} />Git Repo</button></a>
          </div>
        </div>

      </Fade>

      <Fade bottom delay={50}>
        <div className='card'>
          <div className='head'>
          <img src={MsgMeLogo} />
          </div>

          <h2>MsgMe</h2>
          <p className="short-description">A simple chat App using GraphQL Subscriptions</p>

          <ul>
            <li>NodeJs</li>
            <li>React</li>
            <li>GraphQL</li>
          </ul>

          <div className="btns">
            <a href="https://chatapp-mysql.herokuapp.com/" target="blank"><button><FontAwesomeIcon icon={faGlobe} />See Live</button></a>
            <a href="https://github.com/manoleaioan/chatApp-Apollo" target="blank"><button className="git"><FontAwesomeIcon icon={faGithub} />Git Repo</button></a>
          </div>
        </div>
      </Fade>

      <Fade bottom delay={100}>
        <div className='card'>
          <div className='head'>
            <img src='https://png.pngtree.com/png-vector/20190328/ourlarge/pngtree-luxury-crown-logo-png-image_888455.jpg' />
          </div>

          <h2>Project 3</h2>
          <p className="short-description">E-Commerce Website with stripe API</p>

          <ul>
            <li>Firebase</li>
            <li>React</li>
            <li>Stripe</li>
            <li>React</li>
            <li>Stripe</li>
          </ul>

          <div className="btns">
            <button><FontAwesomeIcon icon={faGlobe} />See Live</button>
            <button><FontAwesomeIcon icon={faGithub} />Git Repo</button>
          </div>
        </div>
      </Fade>

    </div>
  </div>
)

export default Portfolio;