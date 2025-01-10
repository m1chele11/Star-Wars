import './Hero.css';
import { useEffect, useRef } from 'react';
import Rellax from 'rellax';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 

gsap.registerPlugin(ScrollTrigger); 

const HeroSection = () => {
  const crawlTextRef = useRef(null);

  useEffect(() => {
    // Initialize Rellax for parallax effect
    const rellax = new Rellax('.rellax', {
      speed: -.1, 
    });

    gsap.fromTo(
      crawlTextRef.current,
      {
        opacity: 0, // Start with invisible text
        y: 800, 
        rotateX: 15, // Slight tilt effect for 3D perspective
      },
      {
        opacity: 2, 
        y: -900, 
        rotateX: 0, 
        scrollTrigger: {
          trigger: '.hero-section', 
          start: 'top bottom', 
          end: 'bottom top', 
          scrub: 1,
          markers: false, 
          toggleActions: 'restart none none none',
          once: false, 
        },
        ease: 'none', 
      }
    );

    return () => {
      rellax.destroy();
    };
  }, []);

  return (
    <section className="hero-section">
      {/* Content Section with parallax */}
      <div className="hero-content rellax" data-rellax-speed="2">
        <div className="crawl-text" ref={crawlTextRef}>
          <h1 className="hero-title">Welcome Traveler</h1>
          <p className="hero-text">The Force is Strong with this One</p>
          <button className="hero-button">View the Galaxy of My Work</button>
        </div>
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

  