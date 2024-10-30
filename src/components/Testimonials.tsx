import React from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      content: 'Abbott Health has transformed how I manage my healthcare. The AI assistant is incredibly helpful and accurate.',
      rating: 5
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Healthcare Professional',
      content: "As a healthcare provider, I'm impressed with Abbott's commitment to innovation and patient care.",
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Chronic Care Patient',
      content: 'The 24/7 support has been invaluable for managing my condition. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">What People Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by patients and healthcare professionals worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}