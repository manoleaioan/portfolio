import React from 'react';
import './about.scss';

import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';

const About = () => (
  <div id="about">
    <Slide bottom>
      <h2>About</h2>
      <p><span></span> Hello, I’m a specialist eager to connect! Coding is one of my therapeutic activity and I write code mainly for web applications.</p>
      <p><span></span>I have experience in Full Stack Web Development and a serious passion in creating Restful Web Services and dynamic web pages.</p>
      <p><span></span>Let's collaborate and create something extraordinary together.</p>
      <a href="https://drive.google.com/file/d/1K6FmoCkJdJfTY9q5KkMkJyMfA3oYdalk/view" target="_blank"><button>View Resume</button></a>
    </Slide>
  </div>
)

export default About;