import React from 'react';
import './about.scss';

import Slide from 'react-reveal/Slide';

const About = () => (
  <div id="about">
    <Slide bottom delay={100}>
      <h2>About</h2>

      <p><span></span>   Hey there! I’m a passionate coder who loves building web applications.</p>
      <p><span></span>I specialize in full stack web development, and coding is my go-to creative outlet. Whether it's crafting dynamic web pages or creating smooth, RESTful web services, I enjoy every step of the process.</p>
      <p><span></span>If you’re interested in collaborating, let’s connect and build something awesome together!
</p>
      <a href="https://drive.google.com/file/d/1K6FmoCkJdJfTY9q5KkMkJyMfA3oYdalk/view" target="_blank" rel="noreferrer"><button>View Resume</button></a>
    </Slide>
  </div>
)

export default About;