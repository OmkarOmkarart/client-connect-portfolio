
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedGoldBanner: React.FC = () => {
  return (
    <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-charcoal to-black z-0" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute w-full h-full grid grid-cols-12 grid-rows-6">
          {Array.from({ length: 72 }).map((_, index) => (
            <motion.div
              key={index}
              className="border border-gold/20"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.02,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Animated gold particles */}
      <div className="absolute inset-0 z-20">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute h-2 w-2 rounded-full bg-gold/80"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: 0
            }}
            animate={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          />
        ))}
      </div>
      
      {/* Gold horizontal line */}
      <motion.div 
        className="absolute top-1/2 left-0 w-full h-px bg-gold/50 z-20"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      
      {/* Animated text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gradient-gold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Program Management Excellence
        </motion.h2>
        <motion.div
          className="h-1 w-20 bg-gold mx-auto mb-6"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 80, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
        <motion.p 
          className="text-gold/70 text-lg max-w-2xl text-center px-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Transforming ideas into successful digital solutions through strategic leadership and technical expertise
        </motion.p>
      </div>
      
      {/* Moving gold accent shapes */}
      <motion.div 
        className="absolute -top-10 -left-10 w-40 h-40 rounded-full border border-gold/30 z-10"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      <motion.div 
        className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full border border-gold/20 z-10"
        animate={{ 
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      {/* Additional decorative elements */}
      <motion.div 
        className="absolute top-10 right-10 w-16 h-16 rotate-45"
        animate={{ rotate: [45, 90, 45] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full border-t border-r border-gold/30"></div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-10 w-4 h-4 bg-gold/20 rounded-full"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default AnimatedGoldBanner;
