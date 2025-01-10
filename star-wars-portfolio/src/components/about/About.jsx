import { useEffect } from 'react';
import './About.css';


const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('start-animation');
        }
      });
    });

    const aboutTextElement = document.querySelector('.about-text');
    observer.observe(aboutTextElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="about-me">
      {/* Avatar Image */}
      <div className="avatar-container">
        <img
          src="../../../public/assets/images/AvatarMic.png"
          alt="Avatar"
          className="avatar-hologram"
        />
      </div>
      <div className="about-text">
        <p>A long time ago, in a galaxy far, far away...</p>
        <h2>About Me</h2>
        <div className="lightsaber-separator"></div>
        <p>
        🚀 As a driven and enthusiastic 3rd-year Computer 
        Science student specializing in software engineering with a
        minor in security informatics at Indiana University&apos;s Luddy 
        School of Informatics, Computing, Engineering, I bring a strong 
        academic foundation from the International School of Indiana&apos;s 
        IB diploma program. Proficient in Java, Kotlin, Python, and C, as
         well as libraries like React, React Native, and frameworks like J
         etpack Compose, I&apos;m passionate about developing innovative 
         solutions to complex problems. Eager to immerse myself in hands-on 
         experiences and collaborative environments, I aim to contribute my 
         technical expertise from coursework and personal projects to innovate
          within a dynamic internship opportunity.
         Let&apos;s connect and explore the realms of tech together! 🌐💻
        </p>
      </div>
    </section>
  );
};

export default About;


