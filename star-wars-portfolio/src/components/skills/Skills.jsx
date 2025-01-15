import PropTypes from 'prop-types';
import SkillsPlanets from './SkillsPlanets';
import './skills.css';

const Skills = ({ handleStartTransitionToAbout }) => {
  return (
    <section id='skills1' className="skills-section">
      <h2 className="section-title">My Skills</h2>
      {/* Full-window effect for SkillsPlanets */}
      <div className="skills-window">
        <SkillsPlanets handleStartTransitionToAbout={handleStartTransitionToAbout} />
      </div>
      <button onClick={handleStartTransitionToAbout}>Jump to Light Speed</button>
    </section>
  );
};

Skills.propTypes = {
  handleStartTransitionToAbout: PropTypes.func.isRequired,
};

export default Skills;




