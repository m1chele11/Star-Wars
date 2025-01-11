import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const LightSpeed = () => {
  const mountRef = useRef(null);
  const starRefs = useRef([]); 
  const speed = useRef(1); 

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create particles (stars)
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 10000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;  
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;  
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;  
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    camera.position.z = 5;

    
    const animate = () => {
      requestAnimationFrame(animate);

      
      for (let i = 0; i < starCount; i++) {
        starRefs.current[i] = starRefs.current[i] || positions[i * 3 + 2];

        
        starRefs.current[i] -= speed.current * (1 + Math.abs(positions[i * 3 + 2]) / 1000); // Adjust speed with distance

        
        if (starRefs.current[i] < -1000) {
          starRefs.current[i] = 2000; 
        }
        positions[i * 3 + 2] = starRefs.current[i];
      }

      stars.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
      
      
      if (stars) {
        stars.geometry.dispose(); 
        stars.material.dispose();  
      }
      renderer.dispose(); 
    };
  }, []);

  // To trigger the light-speed jump effect, increase the speed over time or based on an event
  useEffect(() => {
    const interval = setInterval(() => {
      speed.current = 10;
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1, height: '100vh', width: '100%' }} />;
};

export default LightSpeed;
