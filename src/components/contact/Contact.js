import React from 'react';
import './contact.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

import { Fade, Flip } from 'react-reveal';


const Contact = () => (
  <div id="contact">
    <Fade bottom delay={100}>
      <h2>Contact</h2>
    </Fade>

    <div id="top">
      <Fade top delay={500}>
        <div id="aw">
          I’m currently available for work. Let’s get in touch!
        </div>
      </Fade>
      <ul>
        {/* <Flip left delay={200}>
          <li>
            <a target="_blank" href="mailto:xxxxx@xxxx.com?subject=contact">
              <FontAwesomeIcon icon={faEnvelope} />
              <div>
                <h2>Mail</h2>
                <p>xxxxx@xxxx.com</p>
              </div>
            </a>
          </li>
        </Flip>

        <Flip bottom delay={200}>
          <li>
            <a href='tel:+40XXXXXXXXX'>
              <FontAwesomeIcon icon={faPhoneAlt} />
              <div>
                <h2>Phone</h2>
                <p>+xx xxx xxx xxx</p>
              </div>
            </a>
          </li>
        </Flip> */}

        <Flip right delay={200}>
          <li className='single-item'>
            <a target="_blank" href='https://www.linkedin.com/in/manoleaioan'>
              <FontAwesomeIcon icon={faLinkedinIn} />
              <div>
                <h2>LikedIn</h2>
                <p>https://www.linkedin.com/in/manoleaioan</p>
              </div>
            </a>
          </li>
        </Flip>
      </ul>
    </div>

    <Fade bottom delay={100} delay={500}>
      <div id="copyright">
        Manolea Ioan @2022
      </div>
    </Fade>
  </div>
)

export default Contact;