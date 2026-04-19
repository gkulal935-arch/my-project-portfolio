import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const BackgroundSpace = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.05;
      groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }
  });

  return (
    <>
      <color attach="background" args={['#0a0a0a']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
      
      <group ref={groupRef}>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Sparkles count={200} scale={20} size={2} speed={0.5} opacity={0.5} color="#ec4899" />
        
        {/* Floating geometric shapes for added depth */}
        {Array.from({ length: 20 }).map((_, i) => (
          <Float key={i} speed={2} rotationIntensity={2} floatIntensity={2}>
            <mesh position={[
              (Math.random() - 0.5) * 50,
              (Math.random() - 0.5) * 50,
              (Math.random() - 0.5) * 50
            ]}>
              <octahedronGeometry args={[Math.random() * 0.5]} />
              <meshStandardMaterial 
                color={i % 2 === 0 ? "#a855f7" : "#3b82f6"} 
                wireframe 
                transparent 
                opacity={0.2} 
              />
            </mesh>
          </Float>
        ))}
      </group>

      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
    </>
  );
};

export default BackgroundSpace;
