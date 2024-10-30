import React from 'react';
import { Shield, Clock, Heart, Activity, Users, Phone } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your health information is protected with enterprise-grade security'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Access healthcare support anytime, anywhere'
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Get tailored healthcare recommendations and support'
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Track your health progress with advanced analytics'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Connect with healthcare professionals when needed'
    },
    {
      icon: Phone,
      title: 'Mobile Access',
      description: 'Use our services on any device, anywhere'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Abbott Health</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the way in innovative healthcare solutions with advanced technology and personalized care
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}