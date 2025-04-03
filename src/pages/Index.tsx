
import React from 'react';
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

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <BackgroundAnimation />
      <GoldenDecorations />
      <Navbar />
      <main>
        <HeroSection />
        <AnimatedGoldBanner />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
