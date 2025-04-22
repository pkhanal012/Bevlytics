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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset status and start loading
    setIsSubmitting(true);
    setSubmitStatus({});
    
    console.log('Form being submitted:', form);

    try {
      // Send data to the API endpoint
      console.log('Sending request to /api/send-email');
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      console.log('Response received:', data);

      if (response.ok) {
        // Success - clear form and show success message
        setForm({
          email: '',
          firstName: '',
          lastName: '',
          companySize: '',
          hearAbout: '',
        });
        setSubmitStatus({ 
          success: true, 
          message: 'Thank you! Your demo request has been submitted and an email has been sent to pkhanal012@gmail.com with your information.' 
        });
      } else {
        // API returned an error
        setSubmitStatus({
          success: false,
          message: data.message || 'Something went wrong. Please try again later.',
        });
      }
    } catch (error) {
      // Network or other error occurred
      setSubmitStatus({
        success: false,
        message: 'Failed to submit the form. Please check your connection and try again.',
      });
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ClientWrapper>
      <main className="min-h-screen bg-black">
        {/* Header/Navigation */}
        <StickyNavbar />

        {/* Demo Form Section */}
        <section className="relative min-h-screen w-full overflow-hidden pt-24 sm:pt-32 lg:pt-40">
          <VideoBackground />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                {submitStatus.success ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                          stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-medium text-white mb-3">Request Submitted!</h3>
                    <p className="text-gray-300 mb-8">{submitStatus.message}</p>
                    <button
                      onClick={() => setSubmitStatus({})}
                      className="bg-[#E75010] hover:bg-[#D04000] text-white py-2 px-6 rounded-md font-medium transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {submitStatus.message && !submitStatus.success && (
                      <div className="bg-red-500/20 border border-red-500/30 text-white rounded-md p-4 mb-6">
                        <p>{submitStatus.message}</p>
                      </div>
                    )}
                    
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
                      disabled={isSubmitting}
                      className={`w-full ${isSubmitting ? 'bg-gray-500' : 'bg-[#E75010] hover:bg-[#D04000]'} text-white py-3 px-6 rounded-md font-medium transition-colors flex justify-center items-center`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : 'Book Now'}
                    </button>
                  </form>
                )}
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