
import React from 'react';
import { Mail, Linkedin, Phone, MapPin, ChevronRight, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gold pt-16 pb-8 border-t border-gold/20 relative">
      {/* Golden particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      {/* Golden line decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="mb-6 relative">
              <img 
                src="/lovable-uploads/35957e47-1a44-4523-8523-ccbc288580dd.png" 
                alt="Omkar Fadnis" 
                className="h-12 relative z-10" 
              />
              <motion.div 
                className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-gold/5" 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            
            <p className="text-gold/70 mb-8 max-w-md relative">
              Strategic program management professional specializing in AI-driven automation, 
              fintech solutions, and digital transformation with proven expertise in 
              delivering mission-critical projects.
              <motion.div 
                className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-gold/5"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </p>
            
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ scale: 1.1, backgroundColor: "rgba(212,175,55,0.3)" }}
                href="mailto:omkarfadnis777@gmail.com" 
                className="bg-black/50 hover:bg-gold/20 transition-colors p-2 rounded-full border border-gold/20"
              >
                <Mail size={18} className="text-gold" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, backgroundColor: "rgba(212,175,55,0.3)" }}
                href="https://www.linkedin.com/in/omkarf/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-black/50 hover:bg-gold/20 transition-colors p-2 rounded-full border border-gold/20"
              >
                <Linkedin size={18} className="text-gold" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, backgroundColor: "rgba(212,175,55,0.3)" }}
                href="tel:+919699903354" 
                className="bg-black/50 hover:bg-gold/20 transition-colors p-2 rounded-full border border-gold/20"
              >
                <Phone size={18} className="text-gold" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, backgroundColor: "rgba(212,175,55,0.3)" }}
                href="#" 
                className="bg-black/50 hover:bg-gold/20 transition-colors p-2 rounded-full border border-gold/20"
              >
                <MapPin size={18} className="text-gold" />
              </motion.a>
            </div>
            
            {/* Certification badges */}
            <div className="flex space-x-4 mt-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-black/50 border border-gold/30 px-3 py-2 rounded-md"
              >
                <Award size={16} className="text-gold mr-2" />
                <span className="text-gold/80 text-sm">PMP® Certified</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-black/50 border border-gold/30 px-3 py-2 rounded-md"
              >
                <Award size={16} className="text-gold mr-2" />
                <span className="text-gold/80 text-sm">PRINCE2® Certified</span>
              </motion.div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center">
              <span className="w-6 h-px bg-gold mr-2"></span>
              Expertise
            </h4>
            <ul className="space-y-3">
              {[
                "Program Strategy", 
                "AI Implementation", 
                "Digital Transformation", 
                "Agile Methodology", 
                "Enterprise Integrations"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a href="#services" className="text-gold/70 hover:text-gold transition-colors flex items-center">
                    <ChevronRight size={14} className="text-gold mr-2" />
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            {/* Decorative element */}
            <div className="mt-6 relative h-20 w-full">
              <motion.div 
                className="absolute bottom-0 right-0 h-16 w-16 rounded-full border border-gold/20"
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center">
              <span className="w-6 h-px bg-gold mr-2"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Contact", href: "#contact" }
              ].map((link, i) => (
                <motion.li 
                  key={i}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a href={link.href} className="text-gold/70 hover:text-gold transition-colors flex items-center">
                    <ChevronRight size={14} className="text-gold mr-2" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            {/* Client rating */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="mt-8 p-3 border border-gold/20 rounded-md bg-black/50"
            >
              <div className="text-center">
                <p className="text-sm text-gold/80 mb-1">Client Satisfaction</p>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold mx-0.5" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="border-t border-gold/10 pt-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gold/50 text-sm">© {new Date().getFullYear()} Omkar Fadnis. All rights reserved.</p>
            <p className="text-gold/50 text-sm mt-2 md:mt-0 flex items-center justify-center">
              <Award size={14} className="mr-2 text-gold/70" />
              PMP & PRINCE2 Certified Program Manager | Pune, India
            </p>
          </div>
          
          {/* Decorative bottom elements */}
          <div className="w-full flex justify-center mt-6">
            <div className="inline-flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <motion.div 
                  key={i}
                  className="h-1 w-1 rounded-full bg-gold/40"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
