
import React from 'react';
import { motion } from 'framer-motion';

const GoldenDecorations: React.FC = () => {
  // Different shapes for decorations
  const decorationShapes = [
    { shape: 'circle', classNames: 'h-3 w-3 rounded-full' },
    { shape: 'dot', classNames: 'h-1.5 w-1.5 rounded-full' },
    { shape: 'line', classNames: 'h-1 w-16 rounded-full' },
    { shape: 'square', classNames: 'h-3 w-3 rotate-45' },
    { shape: 'diamond', classNames: 'h-4 w-4 rotate-45' },
  ];

  // Generate random positions for decorations
  const generateRandomPositions = (count: number) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const shapeIndex = Math.floor(Math.random() * decorationShapes.length);
      positions.push({
        x: `${Math.random() * 95}%`,
        y: `${Math.random() * 95}%`,
        opacity: Math.random() * 0.4 + 0.1, // Between 0.1 and 0.5
        delay: Math.random() * 10,
        duration: Math.random() * 15 + 25, // Between 25 and 40 seconds
        shape: decorationShapes[shapeIndex],
      });
    }
    return positions;
  };

  const decorations = generateRandomPositions(30);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {decorations.map((decoration, index) => (
        <motion.div
          key={index}
          className={`absolute ${decoration.shape.classNames} bg-gold`}
          style={{
            left: decoration.x,
            top: decoration.y,
            opacity: decoration.opacity,
          }}
          animate={{
            y: ["0%", "5%", "-5%", "0%"],
            opacity: [decoration.opacity, decoration.opacity * 1.5, decoration.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: decoration.duration,
            repeat: Infinity,
            delay: decoration.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Glowing orbs */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={`orb-${index}`}
          className="absolute w-40 h-40 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0) 70%)",
            left: `${20 + index * 15}%`,
            top: `${30 + (index % 3) * 20}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            delay: index * 2,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Gold particles */}
      <div className="fixed top-0 left-0 w-full h-full">
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute h-1 w-1 rounded-full bg-gold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0.5]
            }}
            transition={{
              duration: 10 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 20,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
      
      {/* Decorative golden lines in corners */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-20">
        <div className="absolute top-16 left-0 h-0.5 w-24 bg-gradient-to-r from-transparent to-gold"></div>
        <div className="absolute top-0 left-16 h-24 w-0.5 bg-gradient-to-b from-transparent to-gold"></div>
      </div>
      
      <div className="absolute top-0 right-0 w-40 h-40 opacity-20">
        <div className="absolute top-16 right-0 h-0.5 w-24 bg-gradient-to-l from-transparent to-gold"></div>
        <div className="absolute top-0 right-16 h-24 w-0.5 bg-gradient-to-b from-transparent to-gold"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-40 h-40 opacity-20">
        <div className="absolute bottom-16 left-0 h-0.5 w-24 bg-gradient-to-r from-transparent to-gold"></div>
        <div className="absolute bottom-0 left-16 h-24 w-0.5 bg-gradient-to-t from-transparent to-gold"></div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-20">
        <div className="absolute bottom-16 right-0 h-0.5 w-24 bg-gradient-to-l from-transparent to-gold"></div>
        <div className="absolute bottom-0 right-16 h-24 w-0.5 bg-gradient-to-t from-transparent to-gold"></div>
      </div>
    </div>
  );
};

export default GoldenDecorations;
