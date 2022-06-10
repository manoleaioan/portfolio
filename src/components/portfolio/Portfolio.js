import React from 'react';

import './portfolio.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


import Fade from 'react-reveal/Fade';

import CrownLogo from '../../assets/crown.svg'
import MsgMeLogo from '../../assets/msgme.png'
import FigmaLogo from '../../assets/figma.svg'
import StrengthLogo from '../../assets/strengthLogo.svg'
import DmLogo from '../../assets/dm.png'

const Portfolio = () => (
  <div id="portfolio">
    <h2>Portfolio</h2>
    <div id="cards">
      <Fade bottom>
        <div className='card'>
          <div className="figma">
            <a href='https://www.figma.com/file/nhqOdl6niPhF3xO7UJzCkL/Strength---Workout-log?node-id=295%3A240' target="blank">
              <img src={FigmaLogo} className="round-corners-black" />
            </a>
          </div>
          <div className='head'>
            <img src={StrengthLogo} className="round-corners-black" />
          </div>

          <h2>Strength</h2>
          <p className="short-description">Fitness Workout logger</p>

          <ul>
            <li>React + Redux</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
            <li>Node Express</li>
            <li>REST API</li>
          </ul>

          <div className="btns">
            <a href="https://strength-workout.herokuapp.com/" target="blank"><button><FontAwesomeIcon icon={faGlobe} />See Live</button></a>
            <a href="https://github.com/manoleaioan/strength" target="blank"><button className="git"><FontAwesomeIcon icon={faGithub} />Git Repo</button></a>
          </div>
          
        </div>

      </Fade>

      <Fade bottom delay={50}>
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
            {/* <a href="https://chatapp-mysql.herokuapp.com/" target="blank"><button><FontAwesomeIcon icon={faGlobe} />See Live</button></a> */}
            <a href="https://github.com/manoleaioan/chatApp-Apollo" target="blank"><button className="git"><FontAwesomeIcon icon={faGithub} />Git Repo</button></a>
          </div>
        </div>
      </Fade>

      <Fade bottom delay={50}>
        <div className='card'>
          <div className='head'>
            <img src={DmLogo} className="round-corners-black" />
          </div>

          <h2>#Deathmatch</h2>
          <p className="short-description">Developing and maintaining  a free mini-game of <a href='https://www.transformice.com/'>Transformice</a></p>

          <ul>
            <li>Transformice</li>
            <li>LUA</li>
            <li>Module</li>
          </ul>

          <div className="btns">
            <a href="https://transformice.fandom.com/wiki/Deathmatch" target="blank"><button><FontAwesomeIcon icon={faGlobe} />TFM Wiki</button></a>
            {/* <a href="https://github.com/manoleaioan/ecommerce" target="blank"><button className="git"><FontAwesomeIcon icon={faGithub} />Git Repo</button></a> */}
          </div>
        </div>
      </Fade>

      <Fade bottom delay={50}>
        <div className='card'>
          <div className='head'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/5/57/Binance_Logo.png' />
          </div>

          <h2>Binance Trading Bot</h2>
          <p className="short-description">Binance Trading bot made with NodeJs</p>

          <ul>
            <li>NodeJs</li>
            <li>Discord webhook</li>
          </ul>

          <div className="btns">
            <a href="https://github.com/manoleaioan/binance-trading-bot" target="blank"><button className="git"><FontAwesomeIcon icon={faGithub} />Git Repo</button></a>
          </div>
        </div>
      </Fade>

    </div>
  </div>
)

export default Portfolio;