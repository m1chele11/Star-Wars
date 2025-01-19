const Skillsp2 = () => {
    const skills = [
      {
        category: 'Frontend',
        skills: ['React', 'Bootstrap', 'JavaScript', 'HTML/CSS'],
        color: '#00BFFF', // Blue
      },
      {
        category: 'Backend',
        skills: ['Java', 'Node.js', 'Spring Boot', 'Python', 'Kotlin', 'C/C++', 'PostgreSQL', 'Docker'],
        color: '#32CD32', // Green
      },
      {
        category: 'Security',
        skills: ['Snort', 'iptables', 'Certificate Managment', 'PKI', 'Cryptography', 'Firewalls'],
        color: '#FF4500', // Red
      },
      {
        category: 'AI & ML',
        skills: ['TensorFlow', 'PyTorch', 'NLP', 'Scikit-learn', 'NLP', 'Spacy'],
        color: '#8A2BE2', // Purple
      },
    ];
  
    return (
      
      <section id="skills">
      <div style={{ padding: '2rem', backgroundColor: '#000', color: '#fff' }}>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '1.5rem',
            color: '#FFD700', // Yellow
            textShadow: '0 0 10px #FFD700, 0 0 20px #FFD700',
          }}
        >
          Skills at Lightspeed
        </h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              style={{
                border: `2px solid ${skillCategory.color}`,
                borderRadius: '10px',
                padding: '1rem',
                minWidth: '200px',
                background: `linear-gradient(145deg, #111, #222)`,
                boxShadow: `0 0 15px ${skillCategory.color}, 0 0 30px ${skillCategory.color}`,
                color: '#fff',
              }}
            >
              <h3
                style={{
                  color: skillCategory.color,
                  marginBottom: '1rem',
                  textShadow: `0 0 10px ${skillCategory.color}, 0 0 20px ${skillCategory.color}`,
                }}
              >
                {skillCategory.category}
              </h3>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {skillCategory.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    style={{
                      padding: '0.5rem 0',
                      borderBottom:
                        idx < skillCategory.skills.length - 1
                          ? '1px solid #444'
                          : 'none',
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      </section>
    );
  };
  
  export default Skillsp2;
  