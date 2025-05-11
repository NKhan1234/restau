"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images: string[] = [
  "/burger.jpg",
  "/fruit.jpg",
  "/maggie.jpg",
  "/salad.jpg",
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    setIsFading(true);
    setTimeout(() => {
      const isLastSlide = currentIndex === images.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setIsFading(false);
    }, 800);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className=" relative w-full h-full">
      <div className="w-full h-auto hero relative flex items-center justify-center mx-auto">
        <p
          onClick={goToPrevious}
          className="absolute top-[45%] left-0 rounded-[50%] w-[40px] h-[40px] p-2 sm:p-3 bg-black z-40 text-white flex items-center justify-center cursor-pointer"
        >
          <i className="ri-arrow-left-line"></i>
        </p>

        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          width={1200}
          height={500}
          className={`w-[300px] h-[220px] lg:w-full lg:h-[550px] md:w-[700px] md:h-[350px] sm:w-[500px] sm:h-[300px] ${
            isFading ? "fade" : "show"
          }`}
        />

        <p
          onClick={goToNext}
          className="absolute top-[45%] right-0 rounded-[50%] w-[40px] h-[40px] p-2 sm:p-3 bg-black text-white z-40 flex items-center justify-center cursor-pointer"
        >
          <i className="ri-arrow-right-line"></i>
        </p>
      </div>
    </div>
  );
}

export default Hero;
