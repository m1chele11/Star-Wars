import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import StarField from './components/starfield/Starfield.jsx';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';
import LightSpeed from './components/starfield/LightSpeed.jsx';
import SimpleSkillsSection from './components/skills/Skillsp2.jsx';
import Experience from './components/experience/Experience.jsx';
import Projects from './components/projects/Projects.jsx';

const App = () => {
  const [transitioning, setTransitioning] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showAbout, setShowAbout] = useState(true);

  const handleStartTransitionToSkills = () => {
    setTransitioning(true);
    setShowAbout(false);

    // Set a timeout to show Skills after the light-speed transition finishes
    setTimeout(() => {
      setTransitioning(false);
      setShowSkills(true);
    }, 2000);
  };

  const handleStartTransitionToAbout = () => {
    setTransitioning(true);
    setShowSkills(false);

    setTimeout(() => {
      setTransitioning(false);
      setShowAbout(true);
    }, 2000);
  };

  return (
    <>
      {/* Star Field: Visible only when NOT transitioning */}
      {!transitioning && !showSkills && <StarField />}
      <Navbar />
      <Hero />

      {/* About Section */}
      {showAbout && !transitioning && (
        <div className="about-section" onClick={handleStartTransitionToSkills}>
          <About />
        </div>
      )}

      {/* Light-Speed Transition: Ensure it's on top */}
      {transitioning && (
        <div className="transition-overlay">
          <LightSpeed />
        </div>
      )}

      {/* Skills Section */}
      {showSkills && !transitioning && (
        <>
          <Skills handleStartTransitionToAbout={handleStartTransitionToAbout} />
          <SimpleSkillsSection />
        </>
      )}

      {/* Always Visible: Experience & Projects */}
      {!transitioning && (
        <>
          <Experience />
          <Projects />
        </>
      )}
    </>
  );
};

export default App;
