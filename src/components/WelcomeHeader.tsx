import React from 'react';
import { Heart, Clock, Shield } from 'lucide-react';

export function WelcomeHeader() {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Abbott Health Support</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Patient Care</h3>
          </div>
          <p className="mt-2 text-sm text-gray-600">24/7 support for your healthcare needs</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Quick Response</h3>
          </div>
          <p className="mt-2 text-sm text-gray-600">Immediate assistance when you need it</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Secure Chat</h3>
          </div>
          <p className="mt-2 text-sm text-gray-600">Your privacy is our priority</p>
        </div>
      </div>
    </div>
  );
}