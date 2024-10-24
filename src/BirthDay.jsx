import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text, Box } from '@react-three/drei';
import { animated, useSpring } from '@react-spring/three';
import * as THREE from 'three';

const OpeningPackage = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation for the box lid to open and close
  const { lidRotation } = useSpring({
    lidRotation: isOpen ? [0, 0, Math.PI / 2] : [0, 0, 0], // Rotate 90 degrees to "open" or back to 0 to "close"
    config: { mass: 1, tension: 120, friction: 14 }
  });

  // Handle button click
  const handleClick = () => {
    setIsOpen((prev) => !prev); // Toggle open/close
  };

  return (
    <>
      <Canvas style={{ height: '600px', background: 'lightblue',   padding:'10px'}}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* The designed box (package) */}
        <animated.group position={[0, 0, 0]}>
          {/* Box body */}
          <Box args={[2, 2, 2]} position={[0, 0, 0]}>
            <meshStandardMaterial attach="material" color="#8B4513" />
          </Box>

          {/* The animated lid of the box */}
          <animated.group position={[0, 1, 0]} rotation={lidRotation}>
            <Box args={[2, 0.1, 2]} position={[0, 1, 0]}>
              <meshStandardMaterial attach="material" color="darkred" />
            </Box>
          </animated.group>
        </animated.group>

        {/* Box stripes for a gift appearance */}
        <Box args={[0.2, 2.1, 2.1]} position={[0, 0, 0]}>
          <meshStandardMaterial attach="material" color="#FFD700" />
        </Box>
        <Box args={[2.1, 0.2, 2.1]} position={[0, 0, 0]}>
          <meshStandardMaterial attach="material" color="#FFD700" />
        </Box>

        {/* The Happy Birthday Teletubbies message */}
        {isOpen && (
          <Text
            position={[0, 3, 0]}
            fontSize={0.2}
            color="red"
          >
            Happy Birthday Teletubbies 🧸❤ Bunny LOVES YOU!
          </Text>
        )}
      </Canvas>

      {/* Button to open/close the package */}
      <button onClick={handleClick} style={buttonStyle}>
        {isOpen ? 'Close the Package' : 'Open the Package'}
      </button>
    </>
  );
};

const buttonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#ff69b4',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default OpeningPackage;
