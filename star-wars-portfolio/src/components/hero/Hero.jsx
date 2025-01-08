import './Hero.css';
import { useEffect, useRef } from 'react';
import Rellax from 'rellax';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const HeroSection = () => {
  const crawlTextRef = useRef(null); // Reference for the crawl text

  useEffect(() => {
    // Initialize Rellax for parallax effect
    const rellax = new Rellax('.rellax', {
      speed: -.1, // Negative for background scrolling effect
    });

    // GSAP ScrollTrigger for syncing scroll with crawl effect
    gsap.fromTo(
      crawlTextRef.current,
      {
        opacity: 0, // Start with invisible text
        y: 800, // Start a little below the screen (adjust this value for better visibility)
        rotateX: 15, // Slight tilt effect for 3D perspective
      },
      {
        opacity: 1, // Make text visible
        y: -900, // Move it up across the screen (adjust this for a more natural effect)
        rotateX: 0, // No more tilt after scroll starts
        scrollTrigger: {
          trigger: '.hero-section', // Trigger the scroll event when the section is in view
          start: 'top bottom', // Start when the top of the section hits the bottom of the viewport
          end: 'bottom top', // End when the bottom of the section hits the top of the viewport
          scrub: 1, // Smooth scrolling effect
          markers: false, // You can set this to true for debugging the scroll trigger
          toggleActions: 'play none none none', // Only play the animation once, no reverse or repeat
          once: true, // Play the animation only once (no reverse)
        },
        ease: 'none', // Smooth, consistent crawl speed
      }
    );

    return () => {
      // Cleanup Rellax on component unmount
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

  