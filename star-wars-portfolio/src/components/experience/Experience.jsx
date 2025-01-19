import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="experience-title">Galactic Mission Log</h2>
      <div className="timeline">
      <div className="timeline-item">
          <div className="timeline-content">
            <h3 className="mission-title">Assistant Supervisor – IU Rec Sports</h3>
            <p className="mission-duration">2022 - Present</p>
            <ul className="mission-description">
              <li>Managed and resolved operational incidents involving over 6,000 participants, improving event reliability and communication during critical situations, ensuring participant satisfaction</li>
              <li>Supervised and mentored a team of referees and event staff, ensuring adherence to guidelines and fostering a collaborative work environment.</li>
            </ul>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3 className="mission-title">SWE Intern – LTC Language Solutions</h3>
            <p className="mission-duration">Summer 2024</p>
            <ul className="mission-description">
              <li>Enhanced the reliability and performance of the financial analysis system by adding core functionalities using Python and Java, leading to a 15% improvement in forecasting accuracy.</li>
              <li>Automated ETL reducing data processing time by 20%, and streamlining data flow for improved efficiency.</li>
              <li>Participated in daily stand-ups, sprint planning, and retrospectives as part of an Agile team, contributing to the timely delivery of project milestones.</li>
            </ul>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3 className="mission-title">STEM Program Leader – DNOVA</h3>
            <p className="mission-duration">Late Spring 2024</p>
            <ul className="mission-description">
              <li>Led technical workshops in web development and security for underprivileged high school students, fostering an understanding of secure software practices.</li>
              <li>Designed interactive coding activities and mentorship sessions, inspiring students to pursue STEM careers and enhancing their problem-solving skills through hands-on learning experiences.</li>
            </ul>
          </div>
        </div>
        {/* Add more timeline items here */}
      </div>
    </section>
  );
};

export default Experience;
