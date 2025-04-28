'use client';

import Image from 'next/image';

const features = [
  {
    icon: '/icons/report.svg',
    title: 'Automated Weekly Reports',
    description: 'Zero manual effort. Full operational clarity.'
  },
  {
    icon: '/icons/forecast.svg',
    title: 'AI Forecasting',
    description: 'Know what your customers will want — before they do.'
  },
  {
    icon: '/icons/alert.svg',
    title: 'Stock Alerts',
    description: 'Stay proactive — not reactive.'
  },
  {
    icon: '/icons/price.svg',
    title: 'Price Optimization',
    description: 'Find the sweet spot between margin and movement.'
  },
  {
    icon: '/icons/pipeline.svg',
    title: 'Clean Data Pipeline',
    description: 'Say goodbye to errors, inconsistencies, and cleanup headaches.'
  },
  {
    icon: '/icons/gap.svg',
    title: 'Fulfillment Gap Detection',
    description: 'Upload messy Excel files and let AI handle ingestion, structure, and cleanup in real-time.'
  },
  {
    icon: '/icons/analytics.svg',
    title: 'Distributor Analytics',
    description: 'Compare, rank, and optimize your distributor network.'
  },
  {
    icon: '/icons/sales.svg',
    title: 'Lost Sales Finder',
    description: "Uncover the sales you didn't even know you missed."
  },
  {
    icon: '/icons/insights.svg',
    title: 'Conversational Insights',
    description: 'Ask your data. Get instant answers. No training needed.'
  }
];

export default function TailoredSolutions() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-gray-900 mb-4">
            Tailored Solutions for Key Challenges
          </h2>
          <p className="text-xl text-gray-600">
            Whether you manage stock, track sales, or coordinate with distributors — your data should work for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <div key={index} className="p-6">
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="text-[#D52383]"
                  />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 