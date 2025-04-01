
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Calendar, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-black relative">
      {/* Premium background pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23D4AF37' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>
      
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
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gold/80">Name</label>
                  <Input id="name" placeholder="Your Name" className="bg-black/60 border-gold/20 text-white placeholder:text-gold/50 focus:border-gold focus:ring-gold/30" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gold/80">Email</label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="bg-black/60 border-gold/20 text-white placeholder:text-gold/50 focus:border-gold focus:ring-gold/30" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gold/80">Subject</label>
                <Input id="subject" placeholder="How can I help you?" className="bg-black/60 border-gold/20 text-white placeholder:text-gold/50 focus:border-gold focus:ring-gold/30" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gold/80">Message</label>
                <Textarea id="message" placeholder="Tell me about your project or inquiry..." className="bg-black/60 border-gold/20 text-white placeholder:text-gold/50 min-h-[150px] focus:border-gold focus:ring-gold/30" />
              </div>
              
              <Button type="submit" className="w-full bg-gold hover:bg-darkGold text-black">
                <Send className="mr-2 h-4 w-4" /> Send Message
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
                    <p className="text-white">omkarfadnis777@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-black border border-gold/30 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-gold h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gold mb-1">Phone</h4>
                    <p className="text-white">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-black border border-gold/30 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-gold h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gold mb-1">Location</h4>
                    <p className="text-white">San Francisco, CA (Available for remote work)</p>
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
                <p className="text-center text-xl font-bold text-gold">January 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
