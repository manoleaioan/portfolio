import { faGithub, faFigma, faYoutube, faEdge, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FigmaLogo from '../../../../assets/figma.svg';
import { motion } from "framer-motion";
import Project from "../Project";
import { SwipeCarousel } from "../../../carousel/SwipeCarousel";
import { LightboxImage } from "../../../image/LightboxImage";
import { useEffect, useState } from "react";
import { faAngleRight, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useParams } from "react-router-dom";
import projects from '../../../data/projects.json';
import AnimatedDiv from "../../../animated-div/AnimatedDiv";

const StartWorkoutImages = () => {
  const [showFirst, setShowFirst] = useState(true);
  const [zOnTop, setZOnTop] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst(f => !f);
      setTimeout(() => setZOnTop(z => !z), 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const baseStyle = {
    maxWidth: "85%",
    borderRadius: 0,
    position: "absolute",
  };

  const positions = [
    { top: 0, left: 0 },
    { top: 20, left: 50 },
  ];

  return (
    <AnimatedDiv delay={0} style={{ position: "relative", maxWidth: 450, margin: "10px auto 0", minHeight: 280 }}>
      <motion.img
        src="/assets/wk_1.png"
        animate={{ ...baseStyle, ...positions[showFirst ? 0 : 1], zIndex: zOnTop ? 2 : 1, opacity: showFirst ? 1 : 0.9 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.img
        src="/assets/wk_2.png"
        animate={{ ...baseStyle, ...positions[showFirst ? 1 : 0], zIndex: zOnTop ? 1 : 2, opacity: !showFirst ? 1 : 0.9 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </AnimatedDiv>
  );
};

const ProjectStrength = () => {
  const location = useLocation();
  const projectId = location.pathname.split("/").pop();
  const project = projects.find(p => p.projectId === projectId);

  return (
    <Project>{({ handleAnimationStart }) => <>

      <motion.div className="description" exit={{ opacity: 0, transition: { duration: 5 } }}>

        <section>
          <AnimatedDiv className="container" transition={{  duration: 0.5, delay: 0 }}>
            <h2>Description</h2>
            <div className="text-wrap flex-col">
              <div className="col">
                <p>Strength is a personal fitness tracking web app designed to help users stay consistent with their workouts and reach their fitness goals. The app makes it easy to log workouts, track progress over time, and build customized training routines.</p>

                <p>With an intuitive calendar view, users can quickly review past workouts or start a new one. The routine builder allows for the creation of personalized workout plans using custom exercises, while the metrics dashboard provides visual insights into workout consistency, most-used exercises, and performance improvements.</p>

                <p>Strength combines flexibility and structure — whether you follow a routine, reuse past workouts, or create on the go, it adapts to your style. All of this is wrapped in a clean, responsive design that feels like a native mobile experience.
                </p>
              </div>
            </div>
            <AnimatedDiv className="text-wrap flex-col">
              <div className="col">
                <p class="subheading">Key Features</p>
                <ul>
                  <li>Log workouts using free-form input, routines, or by cloning past workouts  </li>
                  <li>Build and edit custom exercise routines  </li>
                  <li>Create and manage a personal exercise library  </li>
                  <li>Visualize workout frequency, exercise usage, and routine statistics with charts  </li>
                  <li>Monitor progress on individual exercises and entire routines  </li>
                  <li>Update user profile (name, password, profile picture)  </li>
                  <li>Responsive, native-like user experience  </li>
                  <StartWorkoutImages />
                  {/* <LightboxImage src={'/assets/wk.png'} style={{maxWidth:"460px", borderRadius:0}} /> */}
                </ul>
              </div>
              {/* <div className="col">
                <motion.img src={`${process.env.PUBLIC_URL}/assets/strengthbg.png`} />
              </div> */}
            </AnimatedDiv>
          </AnimatedDiv>
        </section>

        <section>
          <AnimatedDiv className="container">
            <h2>Technical Overview</h2>
            <div className="text-wrap flex-row">
              <div className="col">
                <ul>
                  <li>Frontend: React (UI) + Redux (state management), using functional components and hooks</li>
                  <li>Backend: Node.js with Express + GraphQL server (custom resolvers and schema-first design)</li>
                  <li>Database: MongoDB (via Mongoose ODM for schema definition and validation)</li>
                  <li>Authentication: JSON Web Tokens (JWT) for login/session management</li>
                </ul>
              </div>
              <AnimatedDiv className="col" wideScreenOnly>
                <ul>
                  <li>File Uploads: Cloudinary for profile picture handling</li>
                  <li>Email Service: Nodemailer for password reset or account notifications</li>
                  <li>Charts: Likely a charting library such as Chart.js for metrics (based on code structure)</li>
                </ul>
              </AnimatedDiv>
            </div>

            <AnimatedDiv className="text-wrap flex-row">
              <div className="col">
                <p class="subheading">Frontend</p>
                <ul>
                  <li>Fully implemented in React</li>
                  <li>Uses Redux to manage global state (authentication, workouts, etc.)</li>
                  <li>Supports dynamic routing and protected views based on user authentication state</li>
                  <li>Communicates with the backend exclusively via GraphQL queries and mutations</li>
                  <li>No Apollo Client is used — GraphQL requests are sent manually (likely with fetch) and handled via Redux actions</li>
                </ul>

                {/* 
                <div className="hg">
                  <p>
                    Frontend components include:
                  </p>
                  <ul>
                    <li>Workout Calendar (dashboard to start/view workouts)</li>
                    <li>Routine Builder (group exercises into reusable templates)</li>
                    <li>Exercise Library (central list of custom or shared exercises)</li>
                    <li>Metrics Screen (progress visualization with pie charts and stats)</li>
                    <li>User Profile settings</li>
                  </ul>
                </div>
                 */}
              </div>

              <AnimatedDiv className="col">
                <p class="subheading">Backend</p>
                <ul>
                  <li>Uses Express and graphql middleware to expose a single GraphQL endpoint (/graphql)</li>
                  <li>Schema is defined via SDL with types like User, Workout, Routine, Exercise, etc.</li>
                  <li>Custom resolvers manage the logic behind mutations and queries (e.g. addWorkout, getExercises)</li>
                  <li>JWT-based authentication: access tokens are issued on login and must be sent with future GraphQL requests</li>
                  <li>MongoDB stores all user-related data including workouts, routines, and metrics</li>
                </ul>
              </AnimatedDiv>
            </AnimatedDiv>

            <div className="text-wrap flex-col">
              <AnimatedDiv className="col">
                <p class="subheading">Metrics System</p>

                <ul>
                  <LightboxImage src={`/assets/metrics.jpg`} />
                  {/* <li style={{ listStyle: 'none', border: 'none', paddingBottom: 0 }}>
                  </li> */}
                  <li style={{ listStyle: 'none', border: 'none', }}>A dedicated metrics screen lets users see:</li>
                  <li>Monthly and yearly workout frequency</li>
                  <li>Percentage of used exercises and routines (pie charts)</li>
                  <li>Progress per exercise (e.g. max weight, volume, frequency over time)</li>
                  <li>Routine performance tracking</li>
                  <li>These statistics are either calculated in backend resolvers or derived from fetched workout data in frontend</li>
                </ul>
              </AnimatedDiv>
            </div>

          </AnimatedDiv>
        </section>

        <section>
          <AnimatedDiv className="container">
            <h2>Conclusion</h2>
            <div className="text-wrap flex-col">
              <div className="col">
                <p>This project is a solid example of a custom-built MERN stack app with real-world features, showcasing not only technical skills but also thoughtful UX design and meaningful performance insights.</p> <p>I built this to track my workouts and improvements. Learned a lot along the way, and who knows—it might help others down the road too.</p>
              </div>
            </div>
          </AnimatedDiv>
        </section>

        {/* <section>
          <motion.div className="container">
            <h2>Quick Demo</h2>
            <div className="text-wrap flex-col">
              <div className="video-container">
                <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/Nx3enQWf6c0?si=mPCJMxR3fQe6vBg3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </motion.div>
        </section> */}

      </motion.div>
    </>
    }
    </Project>

  )
}


export default ProjectStrength;