import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Calendar, Clock, Linkedin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import BackgroundPattern from './BackgroundPattern';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const mailtoLink = `mailto:omkarfadnis777@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    
    // Open the user's email client
    window.open(mailtoLink, '_blank');
    
    // Show success toast and reset form
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Email Client Opened",
        description: "Your message has been prepared for sending via your email client.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 500);
  };

  return (
    <section id="contact" className="section-padding bg-black relative">
      {/* Premium background pattern */}
      <BackgroundPattern patternType="circles" opacity={0.05} />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In <span className="text-gold">Touch</span></h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gold/70 max-w-3xl mx-auto">
            Interested in discussing your project or program needs? I'm always open to new opportunities and challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-black/60 backdrop-blur-sm p-8 rounded-lg border border-gold/20 shadow-[0_0_25px_rgba(212,175,55,0.1)]">
            <h3 className="text-2xl font-semibold text-gold mb-6">Send a Message</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gold/80">Name</label>
                  <Input 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    className="bg-black/60 border-gold/20 text-white placeholder:text-gold/50 focus:border-gold focus:ring-gold/30" 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gold/80">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com" 
                    className="bg-black/60 border-gold/20 text-white placeholder:text-gold/50 focus:border-gold focus:ring-gold/30" 
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gold/80">Subject</label>
                <Input 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?" 
                  className="bg-black/60 border-gold/20 text-white placeholder:text-gold/50 focus:border-gold focus:ring-gold/30" 
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gold/80">Message</label>
                <Textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..." 
                  className="bg-black/60 border-gold/20 text-white placeholder:text-gold/50 min-h-[150px] focus:border-gold focus:ring-gold/30" 
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gold hover:bg-darkGold text-black flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gold mb-6">Contact Information</h3>
            
            <div className="bg-black/60 backdrop-blur-sm p-8 rounded-lg border border-gold/20 mb-8 shadow-[0_0_25px_rgba(212,175,55,0.1)]">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-black border border-gold/30 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-gold h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gold mb-1">Email</h4>
                    <a href="mailto:omkarfadnis777@gmail.com" className="text-white hover:text-gold/80 transition-colors">omkarfadnis777@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-black border border-gold/30 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-gold h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gold mb-1">Phone</h4>
                    <a href="tel:+919699903354" className="text-white hover:text-gold/80 transition-colors">+91 9699903354</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-black border border-gold/30 flex items-center justify-center mr-4 flex-shrink-0">
                    <Linkedin className="text-gold h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gold mb-1">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/omkarf/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold/80 transition-colors">linkedin.com/in/omkarf</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-black border border-gold/30 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-gold h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gold mb-1">Location</h4>
                    <p className="text-white">Pune, India (Open for remote work)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/60 backdrop-blur-sm p-8 rounded-lg border border-gold/20 shadow-[0_0_25px_rgba(212,175,55,0.1)]">
              <h3 className="text-xl font-semibold text-gold mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2" /> Availability
              </h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-black border border-gold/30 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="text-gold h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gold mb-1">Currently Available For</h4>
                    <ul className="text-white space-y-2">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2"></span>
                        Program Leadership Roles
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2"></span>
                        Strategic Advisory Positions
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2"></span>
                        Digital Transformation Projects
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2"></span>
                        AI Implementation Initiatives
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 border border-gold/20 rounded bg-black/80">
                <p className="text-center text-white mb-2">Available starting</p>
                <p className="text-center text-xl font-bold text-gold">Immediately</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
