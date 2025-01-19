import './projects.css';

const projects = [
  {
    title: "Momentum",
    description: "Set daily goals. REACT Native",
    tech: "React native, Expo Go",
    link: "https://github.com/m1chele11/Momentum",
  },
  {
    title: "Disney NLP",
    description: "Sentiment Analyis ML. Python",
    tech: "Python,jupyter notebook",
    link: "https://github.com/m1chele11/DisneyNLP",
  },
  {
    title: "Algorithm Application",
    description: "Various tree traversal. Java",
    tech: "Java",
    link: "https://github.com/m1chele11/DSA",
  },
  {
    title: "Certificate Signing",
    description: "Key generation and file encryption. Python",
    tech: "Python",
    link: "https://github.com/m1chele11/Certificate-Based-File-Encryption",
  },
  
 
];

const Projects = () => {
  return (
    <section id="projects" className="star-map-section">
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

