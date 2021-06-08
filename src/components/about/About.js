import React from 'react';
import './about.scss';

import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';

const About = () => (
  <div id="about">
    <Slide bottom>
      <h2>About</h2>
      <p><span></span> Hello, I’m a specialist in need :) Coding is one of my therapeutic activity and I write code mainly for web applications.</p>
      <p><span></span>I have experience in full stack web development and a serious passion in creating Restful Web Services and dynamic web pages.</p>
      <p><span></span>Interested on improving my skills and working on ambitious projects with positive people.</p>
      <a href="https://drive.google.com/file/d/1K6FmoCkJdJfTY9q5KkMkJyMfA3oYdalk/view" target="_blank"><button>View Resume</button></a>
    </Slide>
  </div>
)

export default About;