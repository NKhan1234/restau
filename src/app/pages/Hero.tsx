"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBurger,
  faAppleWhole,
  faCarrot,
  faBacon,
} from "@fortawesome/free-solid-svg-icons";

const images: string[] = [
  "/burger.jpg",
  "/fruit.jpg",
  "/maggie.jpg",
  "/salad.jpg",
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [show, setShow] = useState<number | null>(null);
  const [isFading, setIsFading] = useState<boolean>(false);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setShow(newIndex);
  };

  const goToNext = () => {
    setIsFading(true);
    setTimeout(() => {
      const isLastSlide = currentIndex === images.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setShow(newIndex);
      setIsFading(false);
    }, 800);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="relative w-full h-full pb-24">
      <div className="w-full h-auto hero relative flex items-center justify-center mx-auto">
        <p
          onClick={goToPrevious}
          className="absolute top-[45%] left-0 rounded-[50%] w-[40px] h-[40px] p-3 bg-black z-50 text-white flex items-center justify-center cursor-pointer"
        >
          <i className="ri-arrow-left-line"></i>
        </p>

        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          width={1200}
          height={500}
          className={`w-[300px] h-[220px] lg:w-full lg:h-[500px] md:w-[700px] md:h-[350px] sm:w-[500px] sm:h-[300px] ${
            isFading ? "fade" : "show"
          }`}
        />

        <p
          onClick={goToNext}
          className="absolute top-[45%] right-0 rounded-[50%] w-[40px] h-[40px] p-3 bg-black text-white z-50 flex items-center justify-center cursor-pointer"
        >
          <i className="ri-arrow-right-line"></i>
        </p>
      </div>

      <div className="absolute mt-4 left-[43%] flex items-center justify-center gap-x-8">
        <p className={show === 0 ? "change" : "before"}>
          <FontAwesomeIcon icon={faBurger} />
        </p>
        <p className={show === 1 ? "change" : "before"}>
          <FontAwesomeIcon icon={faAppleWhole} />
        </p>
        <p className={show === 2 ? "change" : "before"}>
          <FontAwesomeIcon icon={faBacon} />
        </p>
        <p className={show === 3 ? "change" : "before"}>
          <FontAwesomeIcon icon={faCarrot} />
        </p>
      </div>
    </div>
  );
}

export default Hero;
