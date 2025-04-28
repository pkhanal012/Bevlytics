'use client';

import Link from 'next/link';

export default function DemoSection() {
  return (
    <div>
      <div className="text-[#D52383] uppercase font-medium tracking-wider mb-4">FREE DEMO</div>
      <h1 className="text-4xl md:text-5xl font-medium text-white mb-6">Get a Bevlytics Demo</h1>
      <p className="text-lg text-gray-300 mb-4">
        Get a free 1:1 demo with our team to understand how you can leverage 
        data to insights to level up your team and operations.
      </p>
      
      {/* Login button below the subheader */}
      <div className="inline-flex items-center mb-8 mt-2 border border-gray-800 px-6 py-2 rounded-full">
        <p className="text-gray-400 text-base mr-3">Already have an account?</p>
        <Link 
          href="https://datatoinsights.ai/" 
          className="font-medium relative overflow-hidden"
        >
          <span className="text-white text-base lowercase border-b border-gray-500 hover:border-white transition-colors">login</span>
        </Link>
      </div>
    </div>
  );
} 