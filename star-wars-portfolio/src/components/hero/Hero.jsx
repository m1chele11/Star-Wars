import './Hero.css';
import { useEffect } from 'react';
import Rellax from 'rellax';

const HeroSection = () => {
  useEffect(() => {
    // Initialize Rellax for parallax
    const rellax = new Rellax('.rellax', {
      speed: -2, // Negative for background scrolling effect
    });

    return () => {
      // Cleanup Rellax on component unmount
      rellax.destroy();
    };
  }, []);

  return (
    <section className="hero-section">
      {/* Content Section */}
      <div className="hero-content rellax" data-rellax-speed="2">
        <h1 className="hero-title">Welcome Traveler</h1>
        <p className="hero-text">The Force is Strong with this One</p>
        <button className="hero-button">View the Galaxy of My Work</button>
      </div>
    </section>
  );
};

export default HeroSection;




// const Hero = () => {
//   return (
//     <section className="hero-section">
//       <h1 className="hero-title">Welcome, Traveler</h1>
//       <p className="hero-text">The Force is strong with this one.</p>
//       <button className="hero-button">View the galaxy of my work</button>
//     </section>
//   );
// };

// export default Hero;

  