import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">About Abbott</h3>
            <p className="text-white/80">
              Leading the way in healthcare innovation and technology for over 130 years.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Services</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Abbott. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}