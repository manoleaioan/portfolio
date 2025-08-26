import React from 'react';
import './contact.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from '../../section-title/SectionTitle';
import TextEffect from '../../text-effects/TextEffect';
import Card from '../../card/Card';

import { motion, useAnimation, useInView } from "framer-motion";

const Contact = () => (
  <div id="contact">
    <SectionTitle title={'Contact'} subtitle={'Let\'s Talk'} />

    <div id="top">
      <div id="aw">
        <TextEffect per='character'
          y={5}
          blur
          delay={0.5}
          transition={{
            duration: 0.1,
            type:"spring",
            bounce:125
          }}
          resize
        >
          I’m currently available for work. Let’s get in touch!
        </TextEffect>
      </div>

      <div className='card-container'>
        <Card delay={0} index={0} inViewMargin="0px 0px 0px 0px">
          <a target="_blank" rel="noreferrer" href="mailto:ioanmanolea@gmail.com?subject=contact">
            <FontAwesomeIcon icon={faEnvelope} />
            <div>
              <h2>Mail</h2>
              <p>ioanmanolea@gmail.com</p>
            </div>
          </a>
        </Card>

        <Card delay={0.2} index={1} inViewMargin="0px 0px 0px 0px">
          <a href='tel:+40748495960'>
            <FontAwesomeIcon icon={faPhoneAlt} />
            <div>
              <h2>Phone</h2>
              <p>+40748495960</p>
            </div>
          </a>
        </Card>

        <Card delay={0.4} index={2} inViewMargin="0px 0px 0px 0px">
          <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/manoleaioan'>
            <FontAwesomeIcon icon={faLinkedinIn} />
            <div>
              <h2>LikedIn</h2>
              <p>https://www.linkedin.com/in/manoleaioan</p>
            </div>
          </a>
        </Card>
      </div>
    </div>
  </div>
)

export default Contact;