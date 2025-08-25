import React from 'react';
import './hero.scss';

import { Link } from 'react-scroll';
import Profile from '../../profile/Profile';
import TextEffect from '../../text-effects/TextEffect';
import { motion } from "framer-motion";


const Hero = () => {
  return (

    <motion.div className='hero' id='home'>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0 }}>
        <Profile />
      </motion.div>

      <div className="hero__about">
        <TextEffect per='word' blur={true} delay={0} transition={{ duration: 0.2 }}>
          <span>
            HELLO,
            <span className='accent'> my name is</span>
          </span>

          <h1>
            <span className='accent'>Ioan</span>
            <span className='sname'>Manolea</span>
          </h1>

          <div id="bio">I AM <span className='caveat'>Software Engineer</span></div>
        </TextEffect>

        <TextEffect per='word' blur={false} delay={0.8} duration={0} transition={{ duration: 1 }}>
          <div id="desc">
            <p>From Suceava, Romania,<br />turning ideas into real web solutions.</p>
          </div>
        </TextEffect>

        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 1.2 }} id="next">
          <a href="https://drive.google.com/file/d/1K6FmoCkJdJfTY9q5KkMkJyMfA3oYdalk/view" target="_blank" rel="noreferrer">
            <button>RESUME</button>
          </a>
          <Link to="skills" spy={true} smooth={true} duration={750} offset={-100} >
            / <span>MY SKILLS</span>
          </Link>
        </motion.div>

      </div>

    </motion.div >

  )
}

export default Hero;