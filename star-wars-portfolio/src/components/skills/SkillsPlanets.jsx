import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars, Text } from '@react-three/drei';
import { useRef, useState } from 'react';
import PropTypes from 'prop-types'; 

const SkillsPlanets = () => {
  const planets = [
    { name: 'Frontend', color: '#00BFFF', position: [-8, 5, 0], skills: ['React', 'HTML/CSS', 'JavaScript', 'Bootstrap' ] },
    { name: 'Backend', color: '#32CD32', position: [8, 5, 0], skills: ['Java', 'Node.js', 'Spring Boot', 'Python', 'Kotlin', 'C/C++', 'PostgeSQL', 'Docker'] },
    { name: 'Security', color: '#FF4500', position: [-8, -5, 0], skills: ['Snort', 'iptables', 'Certificate Management', 'PKI', 'Cryptography', 'Firewalls'] },
    { name: 'AI', color: '#8A2BE2', position: [8, -5, 0], skills: ['TensorFlow', 'PyTorch', 'NLP', 'Scikit-learn', 'NLP', 'Spacy'] },
  ];

  const [setHoveredPlanet] = useState(null);
  const [selectedPlanet, setSelectedPlanet] = useState(null); 

  return (
    <Canvas style={{ height: '100vh', background: 'black' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <OrbitControls enableZoom={!selectedPlanet} enablePan={!selectedPlanet} /> {/*orbit controls for zooming and rotation */}

      {planets.map((planet, index) => (
        <group
          key={index}
          position={planet.position}
          onPointerOver={() => setHoveredPlanet(planet)}
          onPointerOut={() => setHoveredPlanet(null)}
          onClick={() => setSelectedPlanet(planet)}
        >
          {/* Planet */}
          <Sphere args={[2, 32, 32]}>
            <meshStandardMaterial color={planet.color} />
          </Sphere>

          {/* Planet Title */}
          <Text
            position={[0, 3, 0]}
            fontSize={0.5}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {planet.name}
          </Text>

          {/* Rotating Skills */}
          <RotatingSkills skills={planet.skills} radius={4} />
        </group>
      ))}

      {/* Camera Movement */}
      {/*{selectedPlanet && <ZoomCamera target={selectedPlanet.position} />} */}
    </Canvas>
  );
};

const RotatingSkills = ({ skills, radius }) => {
  const groupRef = useRef();

  useFrame(({ camera }) => {
    if (groupRef.current) {
      
      groupRef.current.rotation.y += 0.01;

     
      groupRef.current.children.forEach((child) => {
        if (child.lookAt) {
          child.lookAt(camera.position);
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, idx) => {
        const angle = (idx * 2 * Math.PI) / skills.length; 
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;

        return (
          <Text
            key={idx}
            position={[x, 0, z]}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {skill}
          </Text>
        );
      })}
    </group>
  );
};


// Smooth camera zoom-in
const ZoomCamera = ({ target }) => {
    const { camera } = useThree();
    const targetRef = useRef(target);
    const zoomSpeed = 0.05;
  
    useFrame(() => {
      if (targetRef.current) {
        camera.position.lerp(
          { x: targetRef.current[0], y: targetRef.current[1], z: targetRef.current[2] + 5 }, 
          zoomSpeed
        );
        camera.lookAt(targetRef.current[0], targetRef.current[1], targetRef.current[2]); 
      }
    });
  
    return null;
  };
  
  ZoomCamera.propTypes = {
    target: PropTypes.arrayOf(PropTypes.number).isRequired,
  };
  
  RotatingSkills.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    radius: PropTypes.number.isRequired,
  };

RotatingSkills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  radius: PropTypes.number.isRequired,
};

export default SkillsPlanets;








