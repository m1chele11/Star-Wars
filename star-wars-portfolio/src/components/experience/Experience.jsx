import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="experience-title">Galactic Mission Log</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <h3 className="mission-title">Chief Engineer – Millennium Falcon</h3>
            <p className="mission-duration">2019 - 2022</p>
            <ul className="mission-description">
              <li>Managed the ship’s critical systems and technologies.</li>
              <li>Coordinated repairs and upgrades during missions.</li>
              <li>Ensured crew safety during deep space travels.</li>
            </ul>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3 className="mission-title">Tactical Officer – Rebel Alliance</h3>
            <p className="mission-duration">2022 - Present</p>
            <ul className="mission-description">
              <li>Led tactical operations for fleet coordination.</li>
              <li>Developed strategic plans for space battles.</li>
              <li>Monitored enemy activity across the galaxy.</li>
            </ul>
          </div>
        </div>
        {/* Add more timeline items here */}
      </div>
    </section>
  );
};

export default Experience;
