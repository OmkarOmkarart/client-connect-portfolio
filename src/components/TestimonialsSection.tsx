
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Testimonial {
  content: string;
  author: string;
  position: string;
  rating: number;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    content: "Well, Omkar is one of those men who will keep on asking the right questions unless he finds the best solution for you. Appreciate this quality of yours Omkar, it really helps get the right solution design, Omkar has helped me with a great job on the email automation piece and we are working together now on an RPA solution. Thank you Omkar for your energetic and at the same time calm approach to deliver the best to suit the customer's requirements.",
    author: "Murtuza Balasinorwala",
    position: "Client",
    rating: 5,
    initials: "MB"
  },
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
    <section id="testimonials" className="section-padding bg-black relative">
      {/* Premium background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/90 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black/95 z-20"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1770')] bg-cover bg-center bg-fixed z-0"
          style={{ filter: 'brightness(0.2)' }}
        ></div>
      </div>
      
      <div className="container mx-auto relative z-30">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What <span className="text-gold">Clients Say</span></h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gold/70 max-w-3xl mx-auto">
            Feedback from clients and stakeholders who've experienced the impact of my program management approach.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="bg-black/30 backdrop-blur-sm border border-gold/20 text-gold card-hover h-full">
                      <CardContent className="pt-6">
                        <div className="relative mb-8">
                          <Quote className="h-10 w-10 text-gold/20 absolute -top-2 -left-2" />
                          <div className="mb-4 flex justify-end">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                            ))}
                          </div>
                          <p className="relative z-10 mb-6 text-gold/80 italic">"{testimonial.content}"</p>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t border-gold/10 pt-4 flex items-center">
                        <Avatar className="h-10 w-10 mr-3 bg-gold text-black">
                          <AvatarFallback>{testimonial.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-white">{testimonial.author}</p>
                          <p className="text-sm text-gold/70">{testimonial.position}</p>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-6">
              <CarouselPrevious className="relative static -translate-y-0 bg-black border-gold/20 text-gold hover:bg-gold hover:text-black" />
              <CarouselNext className="relative static -translate-y-0 bg-black border-gold/20 text-gold hover:bg-gold hover:text-black" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
