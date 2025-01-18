import './projects.css';

const projects = [
  {
    title: "Hydro Hero",
    description: "Track your hydration using OCR and React.",
    tech: "React, OCR, Node.js",
    link: "#",
  },
  {
    title: "Real-Time Expense Tracker",
    description: "Monitor expenses with AWS serverless architecture.",
    tech: "AWS, Lambda, QuickSight",
    link: "#",
  },
  {
    title: "Snort Intrusion Detection",
    description: "A security project for detecting malicious traffic.",
    tech: "Snort, Linux, iptables",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="star-map" className="star-map-section">
      <h2 className="section-title">Star Map: Explorations</h2>
      <div className="star-map-container">
        {projects.map((project, index) => (
          <div key={index} className="star" title={project.title}>
            <div className="tooltip">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Mission
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

