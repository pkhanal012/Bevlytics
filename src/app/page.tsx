import Image from 'next/image'
import VideoBackground from './components/VideoBackground'
import AnimatedText from './components/AnimatedText'
import StickyNavbar from './components/StickyNavbar'
import SmarterOperations from './components/SmarterOperations'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import ClientWrapper from './components/ClientWrapper'
import UseCaseSection from './components/UseCaseSection'
import './styles/animations.css'

export default function Home() {
  return (
    <ClientWrapper>
      <main className="min-h-screen bg-black">
        <StickyNavbar />

        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden">
          <VideoBackground />
          <div className="absolute inset-0 flex py-24 sm:py-32 lg:py-48">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl sm:mx-0 md:mx-auto lg:mx-8">
                
                <h1 className="text-3xl sm:text-3xl lg:text-5xl font-medium mb-3 sm:mb-4 text-white">
                AI-Powered Market <br /> Intelligence for Breweries
                </h1>
                <p className="text-lg sm:text-sm lg:text-xl text-opacity-50 text-gray-400 mb-6 sm:mb-8">
                Bevlytics.ai transforms raw distributor data into real-time <br />performance dashboards, SKU analysis, and category insights <br /> — built to grow your beverage business.
                </p>
                <div className="flex flex-col  sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <a href="/demo" className="w-full sm:w-auto text-center bg-white text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-gray-200 transition-colors text-base sm:text-base">
                    Get a free demo
                  </a>
                  <a href="#contact" className="w-full sm:w-auto text-center border border-white border-opacity-10 px-4 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-white hover:text-black transition-colors text-white text-base sm:text-base">
                    Contact us
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
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#E75010] text-white text-xs sm:text-sm mb-6 sm:mb-8 lg:mb-12">
                Your End-to-End Control Tower for Operational Clarity
              </div>
              <div className="flex justify-center">
                <AnimatedText 
                  text="Ditch the manual reports and data chaos. Our AI-driven platform turns disconnected distributor data into a clear, real-time view of what&apos;s happening — and what to do next."
                  className="max-w-4xl leading-tight text-2xl sm:text-2xl lg:text-5xl font-medium px-4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tailored Solutions Section */}
        <section className="bg-black pt-12 sm:pt-16 lg:pt-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
              {/* Left Column - Sticky */}
              <div className="lg:col-span-5 lg:sticky lg:top-24 h-fit mb-6 sm:mb-8 lg:mb-32">
                <h2 className="text-2xl sm:text-2xl lg:text-4xl font-medium text-white mb-3 sm:mb-4">
                  Tailored Solutions for Key Challenges
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
                    <span className="text-[#E75010] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4">AI-DRIVEN ANALYTICS</span>
                  </div>
                  <h3 className="text-xl sm:text-xl lg:text-2xl font-medium text-white mb-2">
                    Let Your Data Think for You
                  </h3>
                  <p className="text-base sm:text-base lg:text-xl text-[#9CA3AF] leading-relaxed">
                    Predict what&apos;s next — from stock needs to demand spikes — with powerful AI forecasting and sales modeling.
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
                    <span className="text-[#E75010] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4">DATA TRANSFORMATION</span>
                  </div>
                  <h3 className="text-xl sm:text-xl lg:text-2xl font-medium text-white mb-2">
                    From Spreadsheet Chaos to Clean, Connected Data — Instantly
                  </h3>
                  <p className="text-base sm:text-base lg:text-xl text-[#9CA3AF] leading-relaxed">
                    Upload messy files and let AI handle ingestion, structure, and cleanup in real-time.
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
                    <span className="text-[#E75010] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4">INTERACTIVE DASHBOARDS</span>
                  </div>
                  <h3 className="text-xl sm:text-xl lg:text-2xl font-medium text-white mb-2"> 
                    See Everything. Understand Anything. Act Instantly.
                  </h3>
                  <p className="text-base sm:text-base lg:text-xl text-[#9CA3AF] leading-relaxed">
                    Dynamic, real-time dashboards built for clarity, speed, and smarter decisions.
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
                    <span className="text-[#E75010] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4">CLOUD-NATIVE & BUILT TO SCALE</span>
                  </div>
                  <h3 className="text-xl sm:text-xl lg:text-2xl font-medium text-white mb-2">
                    Fast, Secure, and Ready to Grow With You
                  </h3>
                  <p className="text-base sm:text-base lg:text-xl text-[#9CA3AF] leading-relaxed">
                    A modern, cloud-first platform designed for speed, reliability, and scale — wherever you are.
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
