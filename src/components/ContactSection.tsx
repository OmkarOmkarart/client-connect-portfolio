
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Globe, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-lightGray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-teal mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Interested in discussing your project or program needs? I'm always open to new opportunities and challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-navy mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                  <Input id="name" placeholder="Your Name" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="border-gray-300" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                <Input id="subject" placeholder="How can I help you?" className="border-gray-300" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <Textarea id="message" placeholder="Tell me about your project or inquiry..." className="border-gray-300 min-h-[150px]" />
              </div>
              
              <Button type="submit" className="w-full bg-teal hover:bg-teal/90 text-white">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-navy mb-6">Contact Information</h3>
            
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-teal mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-navy mb-1">Email</h4>
                    <p className="text-gray-600">contact@programmanager.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-teal mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-navy mb-1">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Globe className="text-teal mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-navy mb-1">Location</h4>
                    <p className="text-gray-600">San Francisco, CA (Available for remote work)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-navy p-8 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-4">Availability</h3>
              <p className="mb-4">Currently available for new program management opportunities starting:</p>
              <p className="text-xl font-bold text-teal mb-4">January 2024</p>
              <p className="text-gray-300">I specialize in complex programs requiring strategic oversight and cross-functional leadership.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
