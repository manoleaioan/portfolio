import './App.scss';
import "yet-another-react-lightbox/styles.css";

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, LayoutGroup } from "framer-motion";
import Navbar from './components/navbar/Navbar.jsx';
import Content from './components/content/Content';
import Footer from './components/footer/Footer.jsx';
import ProjectStrength from './components/pages/projects/Strength/Strength.jsx';
import { FirstLoadProvider } from './context/FirstLoadContext.jsx';
import { PreviousPathProvider } from './context/PreviousPathContext.jsx';
import ProjectDespam from './components/pages/projects/Despam/Despam.jsx';


const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <FirstLoadProvider>
        <PreviousPathProvider>

          <div className="App">

            <Navbar />

            <LayoutGroup>
              <AnimatePresence>
                <FirstLoadProvider>

                  <Routes>
                    <Route path="/" element={<Content />} />
                    <Route path="/project/Strength" element={<ProjectStrength />} />
                    <Route path="/project/Despam" element={<ProjectDespam />} />
                    <Route path="*" element={<Content />} />
                  </Routes>
                </FirstLoadProvider>

              </AnimatePresence>
            </LayoutGroup>

            <Footer />
          </div>

        </PreviousPathProvider>
      </FirstLoadProvider>
    </Router>
  );
};

export default App;
