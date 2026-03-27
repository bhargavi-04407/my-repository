import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedStars = () => {
  const starsRef = useRef<THREE.Points>(null);
  
  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0002;
      starsRef.current.rotation.x += 0.0001;
    }
  });

  return (
    <Stars ref={starsRef} radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
  );
};

const AbstractShapes = () => {
  return (
    <>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2} floatingRange={[-0.5, 0.5]}>
        <Icosahedron args={[1, 0]} position={[-4, 2, -5]}>
          <MeshDistortMaterial color="#4f46e5" attach="material" distort={0.3} speed={2} roughness={0.2} metalness={0.8} />
        </Icosahedron>
      </Float>
      
      <Float speed={3} rotationIntensity={2} floatIntensity={1.5} floatingRange={[-0.5, 0.5]}>
        <Icosahedron args={[0.8, 0]} position={[5, -2, -8]}>
          <MeshDistortMaterial color="#ec4899" attach="material" distort={0.4} speed={3} roughness={0.2} metalness={0.8} />
        </Icosahedron>
      </Float>

      <Float speed={1.5} rotationIntensity={1} floatIntensity={3} floatingRange={[-1, 1]}>
        <Icosahedron args={[1.5, 0]} position={[0, -5, -10]}>
          <MeshDistortMaterial color="#8b5cf6" attach="material" distort={0.2} speed={1} roughness={0.3} metalness={0.7} />
        </Icosahedron>
      </Float>
    </>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-[-10] w-full h-full pointer-events-none bg-[#0a0a1a]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#4f46e5" />
        <AnimatedStars />
        <AbstractShapes />
      </Canvas>
    </div>
  );
};

export default Background3D;
