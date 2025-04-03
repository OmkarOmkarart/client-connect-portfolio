
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowUp, ArrowDown, MoveHorizontal } from 'lucide-react';

const GoldenDecorations: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  
  // Different shapes for decorations
  const decorationShapes = [
    { shape: 'circle', classNames: 'h-3 w-3 rounded-full' },
    { shape: 'dot', classNames: 'h-1.5 w-1.5 rounded-full' },
    { shape: 'line', classNames: 'h-1 w-16 rounded-full' },
    { shape: 'square', classNames: 'h-3 w-3 rotate-45' },
    { shape: 'diamond', classNames: 'h-4 w-4 rotate-45' },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Subtly animate particles based on mouse movement
      controls.start({
        x: e.clientX / 100,
        y: e.clientY / 100,
        transition: { duration: 2, ease: "easeOut" }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [controls]);

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

  const decorations = generateRandomPositions(40); // Increased from 30 to 40

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
            x: index % 4 === 0 ? [0, 10, 0, -10, 0] : undefined, // horizontal movement for some particles
          }}
          transition={{
            duration: decoration.duration,
            repeat: Infinity,
            delay: decoration.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Interactive glowing orbs that respond to cursor movement */}
      {[...Array(7)].map((_, index) => (
        <motion.div
          key={`orb-${index}`}
          className="absolute w-40 h-40 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0) 70%)",
            left: `${15 + index * 12}%`,
            top: `${25 + (index % 3) * 20}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: mousePosition.x / (50 + index * 10), // Orbs follow cursor at different speeds
            y: mousePosition.y / (50 + index * 10),
          }}
          transition={{
            scale: {
              duration: 8 + index * 2,
              repeat: Infinity,
              delay: index * 2,
              ease: "easeInOut"
            },
            opacity: {
              duration: 8 + index * 2,
              repeat: Infinity,
              delay: index * 2,
              ease: "easeInOut"
            },
            x: { duration: 1, ease: "easeOut" },
            y: { duration: 1, ease: "easeOut" }
          }}
        />
      ))}
      
      {/* Enhanced gold particles with more dynamic movements */}
      <div className="fixed top-0 left-0 w-full h-full">
        {[...Array(30)].map((_, index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute h-1 w-1 rounded-full bg-gold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={controls}
            initial={{
              y: 0,
              x: 0,
              opacity: 0,
              scale: 0
            }}
            whileInView={{
              y: [-100, 0, 100],
              x: [0, Math.random() * 50 - 25, 0],
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
      
      {/* Animated floating icons */}
      <div className="fixed top-20 right-10 opacity-20">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowUp className="text-gold w-8 h-8" />
        </motion.div>
      </div>
      
      <div className="fixed bottom-20 left-10 opacity-20">
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-gold w-8 h-8" />
        </motion.div>
      </div>
      
      <div className="fixed top-1/2 left-10 opacity-20">
        <motion.div
          animate={{ x: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <MoveHorizontal className="text-gold w-8 h-8" />
        </motion.div>
      </div>
      
      {/* Enhanced decorative golden lines in corners with animation */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-20">
        <motion.div 
          className="absolute top-16 left-0 h-0.5 w-24 bg-gradient-to-r from-transparent to-gold"
          animate={{ width: ["0%", "100%", "100%", "0%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div 
          className="absolute top-0 left-16 h-24 w-0.5 bg-gradient-to-b from-transparent to-gold"
          animate={{ height: ["0%", "100%", "100%", "0%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        ></motion.div>
      </div>
      
      <div className="absolute top-0 right-0 w-40 h-40 opacity-20">
        <motion.div 
          className="absolute top-16 right-0 h-0.5 w-24 bg-gradient-to-l from-transparent to-gold"
          animate={{ width: ["0%", "100%", "100%", "0%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        ></motion.div>
        <motion.div 
          className="absolute top-0 right-16 h-24 w-0.5 bg-gradient-to-b from-transparent to-gold"
          animate={{ height: ["0%", "100%", "100%", "0%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        ></motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-40 h-40 opacity-20">
        <motion.div 
          className="absolute bottom-16 left-0 h-0.5 w-24 bg-gradient-to-r from-transparent to-gold"
          animate={{ width: ["0%", "100%", "100%", "0%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-0 left-16 h-24 w-0.5 bg-gradient-to-t from-transparent to-gold"
          animate={{ height: ["0%", "100%", "100%", "0%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        ></motion.div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-20">
        <motion.div 
          className="absolute bottom-16 right-0 h-0.5 w-24 bg-gradient-to-l from-transparent to-gold"
          animate={{ width: ["0%", "100%", "100%", "0%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-0 right-16 h-24 w-0.5 bg-gradient-to-t from-transparent to-gold"
          animate={{ height: ["0%", "100%", "100%", "0%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        ></motion.div>
      </div>
      
      {/* Animated diagonal gold lines */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-0.5 h-40 bg-gold/10 origin-top-left"
        style={{ transform: "rotate(45deg)" }}
        animate={{ 
          opacity: [0, 0.3, 0],
          scaleY: [0, 1, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      ></motion.div>
      
      <motion.div 
        className="absolute top-1/4 right-1/4 w-0.5 h-40 bg-gold/10 origin-top-right"
        style={{ transform: "rotate(-45deg)" }}
        animate={{ 
          opacity: [0, 0.3, 0],
          scaleY: [0, 1, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-0.5 h-40 bg-gold/10 origin-bottom-left"
        style={{ transform: "rotate(-45deg)" }}
        animate={{ 
          opacity: [0, 0.3, 0],
          scaleY: [0, 1, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-0.5 h-40 bg-gold/10 origin-bottom-right"
        style={{ transform: "rotate(45deg)" }}
        animate={{ 
          opacity: [0, 0.3, 0],
          scaleY: [0, 1, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 8 }}
      ></motion.div>
    </div>
  );
};

export default GoldenDecorations;
