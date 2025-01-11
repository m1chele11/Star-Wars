import PropTypes from 'prop-types';
import SkillsPlanets from './SkillsPlanets';

const Skills = ({ handleStartTransitionToAbout }) => {
  return (
    <section className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-content">
        <SkillsPlanets handleStartTransitionToAbout={handleStartTransitionToAbout} />
        <button 
          onClick={handleStartTransitionToAbout}
          style={{
            padding: '10px 20px',
            backgroundColor: '#fff',
            border: 'none',
            cursor: 'pointer',
            marginTop: '20px',
          }}
        >
          Back to About Me
        </button>
      </div>
    </section>
  );
};


Skills.propTypes = {
  handleStartTransitionToAbout: PropTypes.func.isRequired,
};

export default Skills;



