import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars, Text } from '@react-three/drei';
import { useState } from 'react';

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
            position={[0, 3, 0]}  // Increased vertical offset for title
            fontSize={0.5}
            color="white"
            anchorX="center"
            anchorY="middle"
            glow={hoveredPlanet === planet ? 1 : 0.5}
          >
            {planet.name}
          </Text>

          {/* Rotating Skills (Text) */}
          {planet.skills.map((skill, idx) => {
            const angle = (idx * 2 * Math.PI) / planet.skills.length; // Evenly distribute the skills in a circle
            const radius = 4; // Distance from the planet
            const orbitSpeed = 0.02; // Speed of rotation

            return (
              <group
                key={idx}
                position={[
                  Math.sin(angle) * radius,  // Horizontal orbit path
                  0,                          // Fixed height
                  Math.cos(angle) * radius,  // Vertical orbit path
                ]}
                rotation={[0, angle + orbitSpeed, 0]} // Continuous rotation of text
              >
                <Text
                  position={[1.8, 0, 0]}  // Adjusted position of skill text
                  fontSize={0.2}
                  color="white"
                  anchorX="center"
                  anchorY="middle"
                  glow={hoveredPlanet === planet ? 1 : 0.3}
                >
                  {skill}
                </Text>
              </group>
            );
          })}
        </group>
      ))}
    </Canvas>
  );
};

export default SkillsPlanets;



