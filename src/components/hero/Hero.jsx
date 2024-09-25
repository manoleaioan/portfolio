import React from 'react';
import './hero.scss';

import { Link } from 'react-scroll';
import { Fade, LightSpeed, Flip } from 'react-reveal';


import profilePic from '../../assets/profile.png'


const Hero = () => {

  let heroClasses = ['hero'].join(" ");

  return (
    <div className={heroClasses}>
      <div id="pic">
        <svg viewBox="0 0 208 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 98 }}>
          <path d="M105 3.26795L104 2.6906L103 3.26795L3.40708 60.7679L2.40708 61.3453V62.5L2.40708 177.5V178.655L3.40708 179.232L103 236.732L104 237.309L105 236.732L204.593 179.232L205.593 178.655V177.5V62.5V61.3453L204.593 60.7679L105 3.26795Z" fill="none" stroke="#FDB719" strokeWidth="4" />
        </svg>

        <svg viewBox="0 0 208 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <clipPath id="hexagon-clip">
            <path d="M105 3.26795L104 2.6906L103 3.26795L3.40708 60.7679L2.40708 61.3453V62.5L2.40708 177.5V178.655L3.40708 179.232L103 236.732L104 237.309L105 236.732L204.593 179.232L205.593 178.655V177.5V62.5V61.3453L204.593 60.7679L105 3.26795Z" />
          </clipPath>

          <foreignObject x="0" y="0" width="100%" height="100%" clipPath="url(#hexagon-clip)">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: '100%', height: '100%', backgroundColor: 'white' }} >
            </div>
          </foreignObject>

          <image
            href={profilePic}
            clipPath="url(#hexagon-clip)"
            preserveAspectRatio="xMidYMid"
            x='-24'
            y='5'
            // x='11'
            // y='22'
          />

          <path d="M105 3.26795L104 2.6906L103 3.26795L3.40708 60.7679L2.40708 61.3453V62.5L2.40708 177.5V178.655L3.40708 179.232L103 236.732L104 237.309L105 236.732L204.593 179.232L205.593 178.655V177.5V62.5V61.3453L204.593 60.7679L105 3.26795Z" fill="none" stroke="#FDB719" strokeOpacity="0.07" strokeWidth="30" />
        </svg>

      </div>


      <div className="hero__about">
        <Fade left><span>Hi, my name is</span></Fade>
        <LightSpeed><h1 className="animate__animated animate__bounce animate__delay-2s">Ioan Manolea</h1></LightSpeed>
        <Fade bottom><div id="bio">I'm a Software Engineer</div></Fade>
        <Link to="about" spy={true} smooth={true} duration={750} offset={-55} >
          <Fade bottom delay={400}><button>Know more</button></Fade>
        </Link>
      </div>

    </div>
  )
}

export default Hero;