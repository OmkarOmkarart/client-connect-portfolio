
import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated golden particles */}
      {Array.from({ length: 15 }).map((_, index) => (
        <motion.div
          key={`bg-particle-${index}`}
          className="absolute h-1 w-1 rounded-full bg-gold/30"
          initial={{ 
            x: Math.random() * 100 + 'vw', 
            y: Math.random() * 100 + 'vh',
            opacity: 0 
          }}
          animate={{ 
            x: [
              Math.random() * 100 + 'vw',
              Math.random() * 100 + 'vw',
              Math.random() * 100 + 'vw'
            ],
            y: [
              Math.random() * 100 + 'vh',
              Math.random() * 100 + 'vh',
              Math.random() * 100 + 'vh'
            ],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: Math.random() * 20 + 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Golden geometric shapes */}
      <motion.div 
        className="absolute left-[5vw] top-[15vh] w-24 h-24 border border-gold/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div 
        className="absolute right-[10vw] top-[40vh] w-16 h-16 border border-gold/10 rotate-45"
        animate={{ rotate: [45, 225, 45] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute left-[20vw] bottom-[10vh] w-32 h-32 border border-gold/5 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Diagonal gold lines */}
      <motion.div 
        className="absolute left-0 top-[30vh] w-[50vw] h-[1px] bg-gold/5 origin-left"
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ transform: 'rotate(30deg)' }}
      />
      
      <motion.div 
        className="absolute right-0 bottom-[20vh] w-[40vw] h-[1px] bg-gold/5 origin-right"
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        style={{ transform: 'rotate(-25deg)' }}
      />
    </div>
  );
};

export default BackgroundAnimation;
