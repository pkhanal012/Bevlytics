import { useState, useEffect } from "react";

interface ShakingButtonProps {
  className?: string;
  text?: string;
  href?: string;
}

export default function ShakingButton({
  className = "bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200",
  text = "Get a free demo",
  href = "/demo",
}: ShakingButtonProps) {
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    // Initial shake after 1 second
    const initialTimeout = setTimeout(() => {
      setIsShaking(true);
    }, 1000);

    // Set up interval for periodic shaking
    const interval = setInterval(() => {
      setIsShaking(true);
    }, 5000);

    // Clean up function
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  // Reset shaking state after animation completes
  const handleAnimationEnd = () => {
    setIsShaking(false);
  };

  return (
    <a
      href={href}
      className={`${className} ${isShaking ? "animate-shake" : ""}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {text}
    </a>
  );
}
