import React from 'react';

export function Services() {
  const services = [
    {
      title: 'Preventive Care',
      description: 'Stay ahead of health issues with personalized prevention strategies',
      image: 'https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Chronic Disease Management',
      description: 'Comprehensive support for managing long-term health conditions',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Mental Health Support',
      description: 'Professional guidance for mental wellness and emotional health',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/90">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}