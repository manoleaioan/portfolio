import { useEffect, useState } from "react";
import { useConsumeFirstLoad } from "../../../context/FirstLoadContext";
import { usePreviousPath } from "../../../context/PreviousPathContext";
import { AnimatePresence, motion } from "framer-motion";
import { SwipeCarousel } from "../../carousel/SwipeCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFigma, faYoutube, faEdge, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import FigmaLogo from '../../../assets/figma.svg';
import projects from '../../data/projects.json';
import categories from '../../data/categories.json';
import { useNavigate, useParams } from "react-router-dom";
import { faAngleRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import AnimatedDiv from "../../animated-div/AnimatedDiv";
import { useLocation } from 'react-router-dom';
import "./Project.scss";

const Project = ({ children, onLoad }) => {
    const previousPath = usePreviousPath();
    const [position, setPosition] = useState((previousPath && !previousPath.includes('/project/')) ? 'fixed' : 'static');
    const isFirstLoad = useConsumeFirstLoad();
    const location = useLocation();
    const projectId = location.pathname.split("/").pop();
    const project = projects.find(p => p.projectId === projectId);
    const projectIndex = projects.findIndex(p => p.projectId === projectId);
    const navigate = useNavigate();

    const filtered = projects.filter(item => item.show !== false);
    const nextIndex = (projectIndex + 1) % filtered.length;
    const nextProject = filtered[nextIndex];


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    const handleAnimationStart = () => {
        setTimeout(() => {
            setPosition('relative');
        }, 50);
        // window.scrollTo({ top: 0 });
        document.body.style.minHeight = 0;
    }

    const transition = {
        // duration: 0.5, 
        // duration:1
        // type: "easeInOut",
        type: "easeInOut",
        duration: 0.35,
    };

    const openUrl = (url) => {

    }


    return (
        <AnimatePresence initial={previousPath}>
            <motion.div className="project-content"
                style={{ position: position, top: position === 'relative' ? 0 : 60 }}
                exit={{ height: '0', overflow: 'hidden' }}
            >
                <section className="proj-hero">
                    <div className="title">
                        <motion.h1 layoutId={`${projectId}-title`}
                            onLayoutAnimationStart={handleAnimationStart}
                            transition={transition}
                        >
                            {project?.name}
                        </motion.h1>
                        <motion.div className="tags" layoutId={`${projectId}-tags`}
                            transition={transition}
                        >
                            {/* WEB DEV, UI UX DESIGN */}
                            {/* {project.categories.map(catId => (
                                categories.find(c => c.id === catId)?.name
                            )).join(", ")} */}

                            {project.categories.map((catId, index) => {
                                const category = categories.find(c => c.id === catId);
                                const name = category?.name;
                                const isLast = index === project.categories.length - 1;
                                return (
                                    name && (
                                        <span key={catId}>
                                            {name}
                                            {!isLast && <FontAwesomeIcon icon={faCircle} style={{ fontSize: "5px", margin: "0 6px" }} />}
                                        </span>
                                    )
                                );
                            })}
                        </motion.div>
                    </div>


                    <SwipeCarousel imgs={project.slideImages} projectId={projectId} />

                    <AnimatedDiv className="btns" transition={{ duration: 0.35, delay: 0 }}>
                        {
                            project.github &&
                            <button className="btn github" onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}><FontAwesomeIcon icon={faGithub} /><p>github</p></button>
                        }
                        {
                            project.youtubeDemo &&
                            <button className="btn video yt" onClick={() => window.open(project.youtubeDemo, '_blank', 'noopener,noreferrer')}><FontAwesomeIcon icon={faYoutube} /><p>demo</p></button>
                        }

                        {
                            project.figma &&
                            <button className="btn figma" onClick={() => window.open(project.figma, '_blank', 'noopener,noreferrer')}><img src={FigmaLogo} /><p>Mockup</p></button>
                        }

                        {
                            project.live &&
                            <button className="btn live orange"><FontAwesomeIcon icon={faEdge} /><p>live</p></button>
                        }
                    </AnimatedDiv>
                </section>

                {children({ handleAnimationStart })}

                {projectIndex < projects.length - 1 &&
                    <section className="next-project-section">
                        <div className="container next-project"
                            // onClick={() => navigate(`/project/${nextProject?.projectId}`)}
                            onClick={() => navigate(`/project/${nextProject?.projectId}`)}
                        >
                            <AnimatedDiv>

                                <span className="">NEXT PROJECT <FontAwesomeIcon icon={faAngleRight} /></span>
                                <h1>
                                    {nextProject?.name?.toUpperCase()}
                                </h1>
                            </AnimatedDiv>
                        </div>
                    </section>
                }

            </motion.div>
        </AnimatePresence>
    );
};

export default Project;