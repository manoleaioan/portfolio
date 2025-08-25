import React, { useEffect, useState } from 'react';

import './portfolio.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircle, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faFileContract } from '@fortawesome/free-solid-svg-icons';
import FigmaLogo from '../../../assets/figma.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import SectionTitle from '../../section-title/SectionTitle';
import Card from '../../card/Card';
import { AnimatePresence, motion } from "framer-motion";
import { usePreviousPath } from '../../../context/PreviousPathContext';
import { useConsumeFirstLoad } from '../../../context/FirstLoadContext';
import { isSafari } from '../../../utils/isSafari';
import projects from '../../data/projects.json';
import categories from '../../data/categories.json';
import { scroller } from 'react-scroll';

const Portfolio = () => {
  const navigate = useNavigate();
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const location = useLocation();
  const previousPath = usePreviousPath();
  const isFirstLoad = useConsumeFirstLoad();
  const transition = {
    type:"easeInOut",
    duration: 0.35,
  };

  useEffect(() => {
    if (location.pathname === '/portfolio' && previousPath?.startsWith('/project/')) {
        scroller.scrollTo(`${previousProjectId}holder`, {
          smooth: true,
          duration: 0,
          offset: -300,
        }, 0);
    }
  }, [location, previousPath])

  
  const getPreviousProjectId = (path) => {
    const match = path?.match(/^\/project\/([^/]+)/);
    return match?.[1] || null;
  };

  const previousProjectId = getPreviousProjectId(previousPath);
  

  const handleCardClick = (p) => {
    const currentBodyHeight = document.body.scrollHeight;
    document.body.style.minHeight = `${currentBodyHeight}px`;

    setSelectedProjectId(p.projectId);

    setTimeout(() => {
      navigate(`/project/${p.projectId}`)
    }, [0]) //250 when using on exit
  };

  const [animate, setAnimate] = useState(true);

  return (
    <motion.div id="portfolio">

      <SectionTitle title={'Projects'} subtitle={'MY Work'} />
      
      <div className="card-container">
        {
          projects.filter(p=> p.show !== false).map((p, i) =>
            <AnimatePresence  key={p.projectId}>
              <>
                {previousPath?.includes(p.projectId)
                  && <Card key={p.name + 'holder'} name={p.projectId + 'holder'} initial={{ opacity: 0 }} animate={false}  />
                }

                <Card
                  style={{
                    // backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${p.bg}`,
                    position: (previousPath?.includes(p.projectId) && animate) ? 'fixed' : 'relative',
                    top: (previousPath?.includes(p.projectId) && animate) ? 100 : 0,
                    // overflow:"hidden",
                    zIndex: previousPath?.includes('Strength') ? 2 : 1
                  }}
                  onClick={() => handleCardClick(p)}
                  id={p.projectId}
                  name={p.projectId}
                  key={p.projectId}
                  index={i}
                  // whileHover={{ scale: 1.1 }}
                  initial={previousPath?.startsWith('/project/') ? false : 'hidden'}
                  back={previousPath?.startsWith('/project/')}
                  layoutId={`${p.name}-bg`}
                  transition={transition}
                  //exit={{ scale: 0, opacity: 0.5, zIndex: 0, transition: { duration: 0.25 } }}
                  onLayoutAnimationStart={() => setTimeout(() => {
                    setAnimate(false)
                  }, isSafari() ? 60 : 0)}
                >
                  <motion.div className='card-bg' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${p.bg})`, transform: p.bgtransform}}/>

                  {/* <div className="figma">
                <a href='https://www.figma.com/file/nhqOdl6niPhF3xO7UJzCkL/Strength' target="blank">
                  <img src={FigmaLogo} className="round-corners-black" alt='' />
                </a>
              </div> */}
                  <div className="title">
                    <motion.img src={`${process.env.PUBLIC_URL}/assets/${p.logo}`} className="round-corners-black" alt='' 
                    layoutId={`${p.name}-logo`}
                      //  animate={(selectedProjectId && selectedProjectId == p.projectId) ? { opacity: 0, transition: { duration: 0.25 } } : false}
                      transition={transition} />

                    <div className="right-side">
                      <motion.h2 layoutId={`${p.name}-title`} transition={transition}>{p.name}</motion.h2>
                      <motion.div className="tags" layoutId={`${p.name}-tags`} transition={transition}>
                        {p.categories.map((catId, index) => {
                          const category = categories.find(c => c.id === catId);
                          const name = category?.name;
                          const isLast = index === p.categories.length - 1;
                          return (
                            name && (
                              <span key={catId}>
                                {name}
                                {!isLast && <FontAwesomeIcon icon={faCircle} style={{fontSize:"5px", margin:"0 6px"}}/>}
                              </span>
                            )
                          );
                        })}
                      </motion.div>
                    </div>
                  </div>


                  {/* <p className="short-description">{p.shortDescription}</p> */}

                  {/* <ul>
                <li>React + Redux</li>
                <li>MongoDB</li>
                <li>GraphQL</li>
                <li>Node Express</li>
                <li>REST API</li>
              </ul> */}
                  {/* 
              <div className="btns">
                {
                  p.live &&
                  <a href={p.live} target="blank"><button><FontAwesomeIcon icon={faGlobe} />See Live</button></a>
                }

                {
                  p.github &&
                  <a href={p.github} target="blank"><button className="git"><FontAwesomeIcon icon={faGithub} />Git Repo</button></a>
                }

              </div> */}
           

                </Card>
              </>
            </AnimatePresence>

          )
        }

      </div>
    </motion.div >
  )
}

export default Portfolio;