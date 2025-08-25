import { motion } from "framer-motion";
import Project from "../Project";
import { LightboxImage } from "../../../image/LightboxImage";
import { useLocation } from "react-router-dom";
import projects from '../../../data/projects.json';
import AnimatedDiv from "../../../animated-div/AnimatedDiv";

const ProjectDespam = () => {
  const location = useLocation();
  const projectId = location.pathname.split("/").pop();
  const project = projects.find(p => p.projectId === projectId);

  return (
    <Project>{({ handleAnimationStart }) => <>

      <motion.div className="description" exit={{ opacity: 0, transition: { duration: 5 } }}>

        <section>
          <AnimatedDiv className="container" transition={{ duration: 0.5, delay: 0 }}>
            <h2>Description</h2>
            <div className="text-wrap flex-col">
              <div className="col">
                <p>Despam is a cross-platform desktop app built with Electron and React that automatically unsubscribes you from unwanted emails. </p>
                <p>
                  By connecting to the Gmail API, it scans your inbox and spam folder, detects unsubscribe links, and completes the process automatically — saving time and keeping your mailbox clean.
                </p>
              </div>
            </div>
            <AnimatedDiv className="text-wrap flex-col">

              <div className="col">

                <ul style={{ columnCount: 2 }}>
                  <LightboxImage src={`${process.env.PUBLIC_URL}/assets/loginGoogle.png`} style={{
                    maxWidth: "460px",
                    // marginBottom: "20px",
                    //  borderRadius: 0,
                    width: "90%",
                    transform: 'rotate3d(39, -8, -7, 20deg)',
                    // marginLeft: 0,
                    marginTop:20
                  }} />

                  <li style={{ listStyle: 'none', margin:0, padding:0 }}>
                    <p class="subheading" >Key Features</p>
                    <li style={{ listStyle: 'disc' ,  marginLeft:' 28px'}}>
                      Secure Google OAuth login – safely connect your Gmail account.</li>
                  </li>
                  <li>Automated spam scanning – detect and process unsubscribe links automatically.</li>
                  <li>Advanced cleanup options – remove successfully unsubscribed emails, delete failed attempts, or review emails manually in Debug Mode via WebView.</li>
                  <li>Real-time progress tracking – see completion percentage, successes, and failures.</li>
                  <li>Custom keyword configuration – fine-tune detection and confirmation logic.</li>
                </ul>
              </div>

            </AnimatedDiv>
          </AnimatedDiv>
        </section>

        <section>
          <AnimatedDiv className="container">
            <h2>Technical Overview</h2>
            <div className="text-wrap flex-row">
              <div className="col">
                <p class="subheading">Core Stack</p>
                <ul>
                  <li>Electron – packages the app as a cross-platform desktop application.</li>
                  <li>React + Material UI – delivers a modern, responsive user interface.</li>
                  <li>Google APIs (Gmail API) – reads and processes emails directly from the user’s account.</li>
                </ul>
              </div>

              <div className="col">
                <p class="subheading">Workflow</p>
                <ul style={{ listStyleType: "decimal" }}>
                  <li>Login with Google OAuth → obtain an access token.</li>
                  <li>Scan spam folder → each message is loaded into an Electron WebView.</li>
                  <li>Search for unsubscribe links/buttons using trigger keywords.</li>
                  <li>Execute the unsubscribe process (automatically or with manual confirmation in debug mode).</li>
                  <li>Automatically delete emails according to the selected cleanup options.</li>
                </ul>
              </div>

            </div>


            <AnimatedDiv className="text-wrap flex-col">
              <AnimatedDiv className="col">
                <p class="subheading">Other Technologies</p>
                <ul>
                  {/* <li>Axios – handles HTTP requests.</li> */}
                  <li>Framer Motion – provides smooth UI animations.</li>
                  <li>Monaco Editor – allows in-app editing of keyword lists for advanced customization.</li>
                  <li>Concurrently – runs the React development server and Electron app simultaneously during development.</li>
                  <li>Express – acts as a lightweight backend within Electron, used to detect and handle successful Google OAuth logins.</li>
                  <li>JSON5 – supports flexible and human-friendly configuration file parsing for keywords.</li>
                  <LightboxImage src={`${process.env.PUBLIC_URL}/assets/editor.jpg`} style={{
                    maxWidth: "460px",
                    marginBottom: "20px",
                    width: "90%",
                    transform: 'rotate3d(39, -8, -7, -20deg)',
                    // marginLeft: 0
                  }} />

                </ul>
              </AnimatedDiv>


            </AnimatedDiv>

          </AnimatedDiv>
        </section>

        <section>
          <AnimatedDiv className="container">
            <h2>Motivation</h2>
            <div className="text-wrap flex-col">
              <div className="col">
                <p>This project started after my email address was added to a spam list, forcing me to manually unsubscribe from hundreds of emails. I built Despam to automate the process and make it fast, reliable, and scalable.</p>
              </div>
            </div>
          </AnimatedDiv>
        </section>
      </motion.div>
    </>
    }
    </Project>

  )
}


export default ProjectDespam;