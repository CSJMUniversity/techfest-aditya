import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center overflow-hidden flex items-center px-6 md:px-20 bg-[url('https://media.istockphoto.com/id/477260677/photo/kumbh-mela-the-worlds-largest-religious-gathering.jpg?s=612x612&w=0&k=20&c=2tFCubsuTQIlY9Zeck2DImEYRQWOy9eSTZcS5Ji2bNs=')]">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 max-w-xl text-left">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-orange-500 drop-shadow-lg">
          MAHAKUMBH 2025
        </h1>
        <p className="text-white text-lg sm:text-xl md:text-2xl mt-4">
          The divine gathering of faith and tradition.
        </p>
        <Button />
      </div>
    </div>
  );
}

export default Hero;
