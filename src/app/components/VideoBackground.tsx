'use client';

export default function VideoBackground() {
  return (
    <div className="absolute left-0 w-full h-full overflow-hidden top-20 md:top-16 lg:top-8 ">
      <div className="absolute inset-0  z-10"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover "
      >
        <source src="/backvideo.mp4" type="video/mp4" />
      </video>
      {/* Mobile Fallback Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-0 sm:hidden"
        aria-hidden="true"
      ></div>
    </div>
  );
}
