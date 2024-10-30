import React from 'react';
import { Search } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="w-full bg-[#001F3F]">
      <div className="max-w-7xl mx-auto">
        {/* Top Navigation */}
        <div className="border-b border-gray-700">
          <div className="px-4 flex justify-end">
            <div className="flex space-x-8 text-sm text-white/90">
              <a href="#" className="py-3 hover:text-white">INVESTORS</a>
              <a href="#" className="py-3 hover:text-white">NEWSROOM</a>
              <a href="#" className="py-3 hover:text-white">RESPONSIBILITY</a>
              <a href="#" className="py-3 hover:text-white">SUBSCRIBE</a>
              <a href="#" className="py-3 hover:text-white flex items-center">
                <span className="mr-1">🌐</span> EN
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="px-4 flex items-center justify-between py-4">
          <div className="flex items-center space-x-12">
            <a href="#" className="flex items-center">
              <svg className="h-8 w-auto text-white" viewBox="0 0 100 30" fill="currentColor">
                <path d="M20,5 L80,5 C85,5 90,10 90,15 L90,25 C90,30 85,35 80,35 L20,35 C15,35 10,30 10,25 L10,15 C10,10 15,5 20,5 Z"/>
              </svg>
              <span className="text-white text-2xl font-bold ml-2">Abbott</span>
            </a>
            
            <div className="hidden md:flex space-x-8 text-white">
              <a href="#" className="font-medium hover:text-blue-200">CONSUMERS</a>
              <a href="#" className="font-medium hover:text-blue-200">HEALTHCARE PROFESSIONALS</a>
              <a href="#" className="font-medium hover:text-blue-200">CAREERS</a>
              <a href="#" className="font-medium hover:text-blue-200">ABOUT ABBOTT</a>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="SEARCH"
              className="w-64 bg-transparent border-2 border-white/30 rounded-full py-2 px-4 text-white placeholder-white/70 focus:outline-none focus:border-white"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
          </div>
        </div>
      </div>
    </nav>
  );
}