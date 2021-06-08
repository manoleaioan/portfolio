import React from 'react';

import './skills.scss';

import { ReactComponent as PolyRectangle } from "../../assets/PolyRectangle.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSwatchbook, faDatabase, faPager, faCheck } from '@fortawesome/free-solid-svg-icons'

import Fade from 'react-reveal/Fade';

const Skills = () => (
  <div id="skills">
    <h2>Skills</h2>
    <div id="cards">
      <Fade bottom>
        <div className='card'>
          <div className='head'>
            <PolyRectangle />
            <FontAwesomeIcon icon={faPager} className="ico" />
          </div>

          <h2>Frontend</h2>

          <ul>
            <li><FontAwesomeIcon icon={faCheck} /><span>React/Redux</span></li>
            <li><FontAwesomeIcon icon={faCheck} /><span>HTML/CSS/SASS/BOOTSTRAP/MATERIAL UI</span> </li>
            <li><FontAwesomeIcon icon={faCheck} /><span>Javascript</span></li>
            <li><FontAwesomeIcon icon={faCheck} /><span>NodeJs</span></li>
          </ul>
        </div>
      </Fade>

      <Fade bottom delay={50}>
        <div className='card'>
          <div className='head'>
            <PolyRectangle />

            <FontAwesomeIcon icon={faDatabase} className="ico" />
          </div>

          <h2>Backend</h2>

          <ul>
            <li><FontAwesomeIcon icon={faCheck} /><span>PostgresSQL/MySQL</span></li>
            <li><FontAwesomeIcon icon={faCheck} /><span>MongoDB</span> </li>
            <li><FontAwesomeIcon icon={faCheck} /><span>Php</span></li>
            <li><FontAwesomeIcon icon={faCheck} /><span>Express</span></li>
            <li><FontAwesomeIcon icon={faCheck} /><span>Firebase</span></li>
          </ul>
        </div>
      </Fade>

      <Fade bottom delay={100}>
        <div className='card'>
          <div className='head'>
            <PolyRectangle />
            <FontAwesomeIcon icon={faSwatchbook} className="ico" />
          </div>

          <h2>Others</h2>

          <ul>
            <li><FontAwesomeIcon icon={faCheck} /><span>GitHub/Heroku</span></li>
            <li><FontAwesomeIcon icon={faCheck} /><span>Photoshop/Figma</span> </li>
            <li><FontAwesomeIcon icon={faCheck} /><span>Unit Testing</span></li>
            <li><FontAwesomeIcon icon={faCheck} /><span>Lua/C#/Python</span></li>
          </ul>
        </div>
      </Fade>
    </div>
  </div>
)

export default Skills;