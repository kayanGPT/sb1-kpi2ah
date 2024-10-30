import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onStartChat: () => void;
}

export function Hero({ onStartChat }: HeroProps) {
  return (
    <div className="relative bg-[#B42C01] text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2940"
          alt="Medical background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#B42C01] to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6 tracking-tight leading-tight">
            YOUR HEALTH
            <br />
            ASSISTANT
          </h1>
          <p className="text-2xl mb-8 font-light">
            Get instant support and guidance from our AI-powered healthcare assistant.
            Available 24/7 to answer your questions and provide reliable healthcare information.
          </p>
          <button 
            onClick={onStartChat}
            className="group bg-[#0076CE] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#005DA3] transition-colors inline-flex items-center"
          >
            START CHAT
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-32 flex flex-col justify-center">
        <div className="space-y-2">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="h-1 bg-white/20 mr-4"></div>
          ))}
        </div>
      </div>
    </div>
  );
}