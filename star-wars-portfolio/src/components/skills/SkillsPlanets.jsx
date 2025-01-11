import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars, Text } from '@react-three/drei';
import { useRef, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

const SkillsPlanets = () => {
  const planets = [
    { name: 'Frontend', color: '#00BFFF', position: [-5, 5, 0], skills: ['React', 'CSS', 'JavaScript'] },
    { name: 'Backend', color: '#32CD32', position: [5, 5, 0], skills: ['Java', 'Node.js', 'Spring Boot'] },
    { name: 'Security', color: '#FF4500', position: [-5, -5, 0], skills: ['Snort', 'iptables', 'OWASP'] },
    { name: 'AI', color: '#8A2BE2', position: [5, -5, 0], skills: ['TensorFlow', 'PyTorch', 'NLP'] },
  ];

  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  return (
    <Canvas style={{ height: '100vh', background: 'black' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <OrbitControls /> {/* Keep orbit controls for zooming and rotation */}

      {planets.map((planet, index) => (
        <group
          key={index}
          position={planet.position}
          onPointerOver={() => setHoveredPlanet(planet)}
          onPointerOut={() => setHoveredPlanet(null)}
        >
          {/* Planet */}
          <Sphere args={[2, 32, 32]}>
            <meshStandardMaterial color={planet.color} />
          </Sphere>

          {/* Planet Title */}
          <Text
            position={[0, 3, 0]} // Increased vertical offset for title
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
    </Canvas>
  );
};

const RotatingSkills = ({ skills, radius }) => {
  const groupRef = useRef();

  useFrame(({ camera }) => {
    if (groupRef.current) {
      // Rotate the entire group of orbiting skills
      groupRef.current.rotation.y += 0.01;

      // Make each skill text face the camera
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
        const angle = (idx * 2 * Math.PI) / skills.length; // Evenly spaced angle
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

// Prop validation for RotatingSkills
RotatingSkills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  radius: PropTypes.number.isRequired,
};

export default SkillsPlanets;








