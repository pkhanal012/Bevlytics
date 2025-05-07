'use client';

import Image from 'next/image'
import VideoBackground from './components/VideoBackground'
import AnimatedText from './components/AnimatedText'
import StickyNavbar from './components/StickyNavbar'
import SmarterOperations from './components/SmarterOperations'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import ClientWrapper from './components/ClientWrapper'
import UseCaseSection from './components/UseCaseSection'
import BrandName from './components/BrandName'
import './styles/animations.css'

export default function Home() {
  return (
    <ClientWrapper>
      <main className="min-h-screen bg-black">
        <StickyNavbar />

        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden">
          <VideoBackground />
          <div className="absolute inset-0 flex py-24 sm:py-32 lg:py-58">
            <div className="container flex  mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl  sm:mx-0 md:mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <a 
                    href="https://www.paradymdata.com/" 
                    className="w-full sm:w-auto text-center border border-[#3A3939] px-2 sm:px-4 py-2 sm:py-2 rounded-full text-white text-sm sm:text-sm mb-4 relative overflow-hidden"
                  >
                    <span className="relative z-10">a division of parad<span className='text-[#D52383]'>Y</span>mdata.com</span>
                    <div className="absolute inset-0 shine-effect"></div>
                  </a>
                </div>
                <h1 className="text-left text-3xl leading-13 sm:text-3xl lg:text-5xl font-medium mb-3 sm:mb-4 text-white">
                Powered by Semantic AI: <br />Next-Level Insights for <br />  Beverage Data Analytics
                </h1>
                <p className="text-left text-lg sm:text-sm lg:text-base text-opacity-50 text-[#B4B2B3] mb-6 sm:mb-8">
                <BrandName variant="ai" /> leverages Semantic AI—an advanced technology combining machine learning (ML), natural language processing (NLP), and knowledge graphs—to transform raw distributor and point-of-sale (POS) data into meaningful insights that drive growth and strategic execution.
                </p>
                <div className="flex flex-col  sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <a 
                    href="/demo" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/demo";
                    }}
                    className="w-full sm:w-auto text-center bg-white text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-gray-200 transition-colors text-base sm:text-base relative overflow-hidden"
                  >
                    <span className="relative z-10">Get a free demo</span>
                    <div className="absolute inset-0 shine-effect"></div>
                  </a>
                  <a 
                    href="/contact" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/contact";
                    }}
                    className="w-full sm:w-auto text-center border border-[#686767] px-4 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-white hover:text-black transition-colors text-white text-base sm:text-base relative overflow-hidden"
                  >
                    <span className="relative z-10">Contact us</span>
                   
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Text Section */}
        <section className="bg-black min-h-screen relative py-12 sm:py-16 lg:py-24">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#D52383] text-white text-xs sm:text-sm mb-6 sm:mb-8 lg:mb-12">
              Unlock the Power of Semantic AI
              </div>
              <div className="flex justify-center">
                <AnimatedText 
                  text="Unlike traditional analytics tools that rely solely on pattern recognition, bevlYtics.ai's Semantic AI understands the meaning, context, and intent behind your Beverage's data. It connects dots across retailers, SKUs, regions, and timeframes, transforming fragmented data into a clear, actionable picture of your business."
                  className="max-w-4xl leading-tight text-2xl sm:text-2xl lg:text-4xl font-medium px-4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tailored Solutions Section */}
        <section id="solutions" className="bg-black pt-12 sm:pt-16 lg:pt-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
              {/* Left Column - Sticky */}
              <div className="lg:col-span-5 lg:sticky lg:top-24 h-fit mb-6 sm:mb-8 lg:mb-32">
                <h2 className="text-2xl sm:text-2xl lg:text-4xl font-medium text-white mb-3 sm:mb-4">
                Built for Beverage Distributors. Trusted by Analysts
                </h2>
                <p className="text-base sm:text-base lg:text-xl text-gray-400">
                  Whether you manage stock, track sales, or coordinate with distributors — your data should work for you.
                </p>
              </div>

              {/* Right Column - Cards */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6 lg:space-y-8 pb-12 sm:pb-16 lg:pb-32">
                {/* Card 1 */}
                <div className="bg-[#0F0E0E] border border-[#262626]  rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-12">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-6 sm:mb-8 lg:mb-12">
                    <div className="w-full sm:w-auto sm:flex-shrink-0">
                      <Image 
                        src="/block1.png" 
                        alt="Analytics Illustration"
                        width={250}
                        height={250}
                        className="object-contain float-animation w-full sm:w-[200px] lg:w-[250px]"
                      />
                    </div>
                    
                  </div>
                  <h3 className="text-xl sm:text-xl lg:text-2xl font-medium text-white mb-2">
                  Real-Time Dashboards
                  </h3>
                  <p className="text-base sm:text-base lg:text-xl text-[#9CA3AF] leading-relaxed">
                  Monitor trends across styles, SKUs, and segments instantly.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#0F0E0E] border border-[#262626]  rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-12">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-6 sm:mb-8 lg:mb-12">
                    <div className="w-full sm:w-auto sm:flex-shrink-0">
                      <Image 
                        src="/block2.png" 
                        alt="Data Transformation Illustration"
                        width={250}
                        height={250}
                        className="object-contain float-animation w-full sm:w-[200px] lg:w-[250px]"
                      />
                    </div>
                
                  </div>
                  <h3 className="text-xl sm:text-xl lg:text-2xl font-medium text-white mb-2">
                  SKU & Size Analysis
                  </h3>
                  <p className="text-base sm:text-base lg:text-xl text-[#9CA3AF] leading-relaxed">
                  See what sizes move best - by region, brand, or distributor.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#0F0E0E] border border-[#262626]  rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-12">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-6 sm:mb-8 lg:mb-12">
                    <div className="w-full sm:w-auto sm:flex-shrink-0">
                      <Image 
                        src="/block3.png" 
                        alt="Dashboard Illustration"
                        width={250}
                        height={250}
                        className="object-contain float-animation w-full sm:w-[200px] lg:w-[250px]"
                      />
                    </div>
              
                  </div>
                  <h3 className="text-xl sm:text-xl lg:text-2xl font-medium text-white mb-2"> 
                  New Product Analysis
                  </h3>
                  <p className="text-base sm:text-base lg:text-xl text-[#9CA3AF] leading-relaxed">
                  Track launch success with early sales and market response.

                  </p>    
                </div>

                {/* Card 4 */}
                <div className="bg-[#0F0E0E] border border-[#262626] C rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-12">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-6 sm:mb-8 lg:mb-12">
                    <div className="w-full sm:w-auto sm:flex-shrink-0">
                      <Image 
                        src="/block4.png" 
                        alt="Cloud Security Illustration"
                        width={250}
                        height={250}
                        className="object-contain float-animation w-full sm:w-[200px] lg:w-[250px]"
                      />
                    </div>
                    
                  </div>
                  <h3 className="text-xl sm:text-xl lg:text-2xl font-medium text-white mb-2">
                  AI Forecasting
                  </h3>
                  <p className="text-base sm:text-base lg:text-xl text-[#9CA3AF] leading-relaxed">
                  A modern, cloud-first platform designed for speed, reliability, and scale — wherever you are.
                  </p>
                </div>


                {/* Card 5 */}
                <div className="bg-[#0F0E0E] border border-[#262626]  rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-12">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-6 sm:mb-8 lg:mb-12">
                    <div className="w-full sm:w-auto sm:flex-shrink-0">
                      <Image 
                        src="/block5.png" 
                        alt="Dashboard Illustration"
                        width={250}
                        height={250}
                        className="object-contain float-animation w-full sm:w-[200px] lg:w-[250px]"
                      />
                    </div>
              
                  </div>
                  <h3 className="text-xl sm:text-xl lg:text-2xl font-medium text-white mb-2"> 
                  Data Upload Engine
                  </h3>
                  <p className="text-base sm:text-base lg:text-xl text-[#9CA3AF] leading-relaxed">
                  Upload messy Excel files - <BrandName /> AI Engine does the cleanup.

                  </p>    
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Case Section */}
        <UseCaseSection />

        {/* Smarter Operations Section */}
        <SmarterOperations />

     
        {/* Call to Action Section */}
        <CallToAction />

        {/* Footer */}
        <Footer />
      </main>
    </ClientWrapper>
  );
}
