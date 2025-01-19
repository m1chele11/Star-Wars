import './Hero.css';
import { useEffect, useRef } from 'react';
import Rellax from 'rellax';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 

gsap.registerPlugin(ScrollTrigger); 

const HeroSection = () => {
  const crawlTextRef = useRef(null);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = (cvType) => {
    const filePath = cvType === 'Security' ? '/path/to/security-cv.pdf' : '/path/to/swe-cv.pdf';
    const link = document.createElement('a');
    link.href = filePath;
    link.download = `${cvType}_CV.pdf`;
    link.click();
  };

  useEffect(() => {
    const rellax = new Rellax('.rellax', {
      speed: -0.1, 
    });

    gsap.fromTo(
      crawlTextRef.current,
      {
        opacity: 0,
        y: 800, 
        rotateX: 15,
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
      <div className="hero-content rellax" data-rellax-speed="2">
        <div className="crawl-text" ref={crawlTextRef}>
          <h1 className="hero-title">Welcome Traveler</h1>
          <p className="hero-text">The Force is Strong with this One</p>
          <button className="hero-button" onClick={scrollToProjects}>
            View the Galaxy of My Work
          </button>
          <button
            className="hero-button cv-button"
            onClick={() => {
              const cvType = window.confirm('Download Security CV? Click Cancel for SWE CV.')
                ? 'Security'
                : 'SWE';
              handleDownloadCV(cvType);
            }}
          >
            Download CV
          </button>
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

  