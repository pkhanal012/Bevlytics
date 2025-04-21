'use client';

import { useState } from 'react';
import StickyNavbar from '../components/StickyNavbar';
import Footer from '../components/Footer';
import ClientWrapper from '../components/ClientWrapper';
import VideoBackground from '../components/VideoBackground';

export default function DemoPage() {
  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    companySize: '',
    hearAbout: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', form);
    // You could add API call here to submit the form data
  };

  return (
    <ClientWrapper>
      <main className="min-h-screen bg-black">
        {/* Header/Navigation */}
        <StickyNavbar />

        {/* Demo Form Section */}
        <section className="relative min-h-screen w-full overflow-hidden pt-24 sm:pt-32 lg:pt-40">
          <VideoBackground />
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
              {/* Left side - Content */}
              <div>
                <div className="text-[#E75010] uppercase font-medium tracking-wider mb-4">FREE DEMO</div>
                <h1 className="text-4xl md:text-5xl font-medium text-white mb-6">Get a Bevlytics Demo</h1>
                <p className="text-lg text-gray-300 mb-8">
                  Get a free 1:1 demo with our team to understand how you can leverage data to insights (D2I) to level up your team and operations.
                </p>
              </div>

              {/* Right side - Form */}
              <div className="bg-[#1A1A1A]/90 backdrop-blur-sm p-8 rounded-xl">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-white mb-2">Work Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full py-3 px-4 bg-[#252525] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#E75010]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-white mb-2">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="w-full py-3 px-4 bg-[#252525] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#E75010]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-white mb-2">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="w-full py-3 px-4 bg-[#252525] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#E75010]"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="companySize" className="block text-white mb-2">Company Size</label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={form.companySize}
                      onChange={handleChange}
                      className="w-full py-3 px-4 bg-[#252525] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#E75010] appearance-none"
                      required
                    >
                      <option value="" disabled>Please select an option</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="501+">501+ employees</option>
                    </select>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="hearAbout" className="block text-white mb-2">How did you first hear about Data to insights (D2I&apos;s)</label>
                    <select
                      id="hearAbout"
                      name="hearAbout"
                      value={form.hearAbout}
                      onChange={handleChange}
                      className="w-full py-3 px-4 bg-[#252525] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#E75010] appearance-none"
                      required
                    >
                      <option value="" disabled>Email</option>
                      <option value="social">Social Media</option>
                      <option value="search">Search Engine</option>
                      <option value="friend">Friend or Colleague</option>
                      <option value="event">Event or Conference</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#E75010] hover:bg-[#D04000] text-white py-3 px-6 rounded-md font-medium transition-colors"
                  >
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </ClientWrapper>
  );
} 