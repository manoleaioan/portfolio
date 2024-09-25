import React from 'react';

import './skills.scss';

import { ReactComponent as PolyRectangle } from "../../assets/PolyRectangle.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSwatchbook, faDatabase, faPager, faCheck } from '@fortawesome/free-solid-svg-icons'

import Fade from 'react-reveal/Fade';

const Skills = () => (
  <div id="skills">
    <Fade bottom delay={100}>
      <h2>Skills</h2>
    </Fade>
    <div id="cards">
      <Fade bottom>
        <div className='card'>
          <div className='head'>
            <PolyRectangle />
            <FontAwesomeIcon icon={faPager} className="ico" />
          </div>

          <h2>Frontend</h2>

          <ul>
            <li><FontAwesomeIcon icon={faCheck} /><span>React & Angular</span></li>
            <li><FontAwesomeIcon icon={faCheck} /><span>VanillaJs/Ts</span></li>
            <li><FontAwesomeIcon icon={faCheck} /><span>Responsive Web Design</span> </li>
            <li><FontAwesomeIcon icon={faCheck} /><span>Redux/Redux-Saga</span></li>
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
            <li><FontAwesomeIcon icon={faCheck} /><span>NojeJs & Express</span></li>
            <li><FontAwesomeIcon icon={faCheck} /><span>C# ASP.NET</span></li>
            <li><FontAwesomeIcon icon={faCheck} /><span>Firebase, MongoDB</span></li>
            <li><FontAwesomeIcon icon={faCheck} /><span>Php/MySQL</span></li>
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
            <li><FontAwesomeIcon icon={faCheck} /><span>Git/GitHub</span></li>
            <li><FontAwesomeIcon icon={faCheck} /><span>Docker(basic)</span></li>
            <li><FontAwesomeIcon icon={faCheck} /><span>Photoshop/Figma</span> </li>
            <li><FontAwesomeIcon icon={faCheck} /><span>Lua/C#/Python</span></li>
          </ul>
        </div>
      </Fade>
    </div>
  </div>
)

export default Skills;