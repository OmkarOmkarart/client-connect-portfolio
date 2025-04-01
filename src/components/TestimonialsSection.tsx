
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  position: string;
  rating: number;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    content: "An exceptional program manager who consistently delivers results. Their strategic approach to our digital transformation initiative was instrumental in its success.",
    author: "Jennifer Thompson",
    position: "CIO, Healthcare Solutions Inc.",
    rating: 5,
    initials: "JT"
  },
  {
    content: "I've worked with many program managers, but none as thorough and communicative. Our ERP implementation was complex, but they navigated every challenge with expertise.",
    author: "Michael Rodriguez",
    position: "VP of Operations, Manufacturing Corp",
    rating: 5,
    initials: "MR"
  },
  {
    content: "Their ability to align technical teams with business objectives is remarkable. They transformed our internal processes while maintaining operational continuity.",
    author: "Sarah Chen",
    position: "Director of Technology, Retail Innovations",
    rating: 5,
    initials: "SC"
  },
  {
    content: "A truly exceptional leader who understands how to drive meaningful change. They managed stakeholder expectations flawlessly throughout our entire project lifecycle.",
    author: "David Washington",
    position: "CEO, FinTech Solutions",
    rating: 5,
    initials: "DW"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-navy text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
          <div className="w-20 h-1 bg-teal mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Feedback from clients and stakeholders who've experienced the impact of my program management approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white card-hover">
              <CardContent className="pt-6">
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mb-6 text-gray-200 italic">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter className="border-t border-white/10 pt-4 flex items-center">
                <Avatar className="h-10 w-10 mr-3 bg-teal text-white">
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-300">{testimonial.position}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
