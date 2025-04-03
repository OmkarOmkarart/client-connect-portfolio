
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { Toaster } from "@/components/ui/toaster";
import AnimatedGoldBanner from '../components/AnimatedGoldBanner';
import BackgroundAnimation from '../components/BackgroundAnimation';
import GoldenDecorations from '../components/GoldenDecorations';
import BackgroundPattern from '../components/BackgroundPattern';

// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <BackgroundAnimation />
      <GoldenDecorations />
      <BackgroundPattern patternType="dots" opacity={0.03} />
      
      <Navbar />
      
      <main>
        {/* Hero section with enhanced animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <HeroSection />
        </motion.div>
        
        <AnimatedGoldBanner />
        
        {/* About section with professional background */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <AboutSection />
        </motion.div>
        
        {/* Services section with staggered animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          transition={{ delay: 0.2 }}
        >
          <ServicesSection />
        </motion.div>
        
        {/* Projects section with portfolio showcase */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          transition={{ delay: 0.3 }}
        >
          <ProjectsSection />
        </motion.div>
        
        {/* Testimonials with slide-in animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          transition={{ delay: 0.4 }}
        >
          <TestimonialsSection />
        </motion.div>
        
        {/* Contact section with fade-in animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          transition={{ delay: 0.5 }}
        >
          <ContactSection />
        </motion.div>
      </main>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Footer />
      </motion.div>
      
      <Toaster />
    </div>
  );
};

export default Index;
