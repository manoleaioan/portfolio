import React from 'react';

import './skills.scss';

import { ReactComponent as PolyRectangle } from "../../../assets/PolyRectangle.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSwatchbook, faDatabase, faPager, faCheck } from '@fortawesome/free-solid-svg-icons'
import SectionTitle from '../../section-title/SectionTitle';
import Card from '../../card/Card';

import { motion, useAnimation, useInView } from "framer-motion";

const Skills = () => {
  return <motion.div id="skills">

    <SectionTitle title={'Skills Overview'} subtitle={'MY Talent'} />

    <motion.div className="card-container" transition={{delay:2}}>

      <Card index={1}>
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
      </Card>



      <Card index={2}>
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
      </Card>



      <Card index={3} >
        <div className='head'>
          <PolyRectangle />
          <FontAwesomeIcon icon={faSwatchbook} className="ico" />
        </div>

        <h2>Others</h2>

        <ul>
          <li><FontAwesomeIcon icon={faCheck} /><span>Git/GitHub</span></li>
          <li><FontAwesomeIcon icon={faCheck} /><span>Docker(basic)</span></li>
          <li><FontAwesomeIcon icon={faCheck} /><span>Scripting(Lua, Py)</span></li>
          <li><FontAwesomeIcon icon={faCheck} /><span>UI Mockups & Design</span></li>
        </ul>
      </Card>

    </motion.div>
  </motion.div>
}

export default Skills;