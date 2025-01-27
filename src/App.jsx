// src/App.js
import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const dots = Array.from({ length: 200 }, (_, index) => index);

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Starry Background with Motion */}
      {dots.map((dot) => (
        <motion.div
          key={dot}
          className="absolute bg-white rounded-full"
          style={{
            width: '2px',
            height: '2px',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 50, 0],
            x: [0, 50, -50, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5, // Random duration between 5-10 seconds
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        ></motion.div>
      ))}


        <p>
          Hello
        </p>





    </div>
  );
}

export default App;