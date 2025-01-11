import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import StarField from './components/starfield/Starfield.jsx';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';
import LightSpeed from './components/starfield/LightSpeed.jsx';

const App = () => {
  const [transitioning, setTransitioning] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showAbout, setShowAbout] = useState(true); 

  // Trigger the light-speed jump effect to go to the Skills section
  const handleStartTransitionToSkills = () => {
    setTransitioning(true);
    setShowAbout(false); // Hide About section while transitioning

    // Set a timeout to show Skills after the light-speed transition finishes
    setTimeout(() => {
      setTransitioning(false);  
      setShowSkills(true);  
    }, 2000);  
  };

  // Trigger the light-speed jump effect to go back to the About section
  const handleStartTransitionToAbout = () => {
    setTransitioning(true);
    setShowSkills(false); // Hide Skills section during the transition
    
    setTimeout(() => {
      setTransitioning(false);  
      setShowAbout(true);  // Show the About section after the transition
    }, 2000);  
  };

  return (
    <>
      {!showSkills && <StarField />}
      
      <Navbar />
      <Hero />
      
      {/* Show About section initially with a hint to go light speed */}
      {showAbout && !transitioning && (
        <div className="about-section" onClick={handleStartTransitionToSkills}>
          <About />
        </div>
      )}
      
      {transitioning && <LightSpeed />}
      
      {/* Show Skills section with the planets */}
      {showSkills && !transitioning && (
        <Skills handleStartTransitionToAbout={handleStartTransitionToAbout} />
      )}
    </>
  );
};

export default App;



