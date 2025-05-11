"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

export default function About() {
  useGSAP(() => {
    const isLargeScreen = window.innerWidth > 768;

    gsap.fromTo(
      ".about-h3",
      { x: isLargeScreen ? -40 : -20 },
      {
        x: isLargeScreen ? 40 : 20,
        duration: 1.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      }
    );
  });

  return (
    <div
      style={{ backgroundColor: "#D1D100" }}
      className="relative px-[10%] text-center w-full h-full flex items-center justify-center flex-col gap-4 bg-black text-white border-2 border-solid border-white py-16"
    >
      <h3 className="about-h3 text-sm md:text-xl font-semibold tracking-wide absolute top-[8%] left-[8%] bg-white rounded px-2 py-2 text-yellow-500">
        About
      </h3>
      <div className="border border-solid border-white p-2 md:border-2 border-solid border-white px-6 py-4 sm:border border-solid border-white px-4 py-2">
        <h2 className="text-xs font-medium leading-2 sm:text-sm leading-4 pb-2  font-normal md:text-lg leading-7 pb-4  font-semibold">
          &quot;Rudra Resto, which means “Rudrapur Restaurent” in Uttarakhand,
          India, is just that – a compilation of lively dining experiences.
          Rudra celebrates the best of Indian dishes with welcoming hospitality
          and service. Seasonal changes guide the menu of scratch-made pasta
          made in-house daily, cheeses, antipastis, pizzas and more. Staying
          true to Indian dining traditions, Rudra also offers a “For the Table”
          dining option curated for a family-style experience, offered nightly
          alongside the full of carte menu.&quot;
        </h2>
        <button className="btn2 px-6 rounded-md py-3 outline-none border-none bg-white text-yellow-400 font-md text-sm shadow-lg shadow-black hover:shadow-sm">
          <Link href="/about">Learn more</Link>{" "}
        </button>
      </div>
    </div>
  );
}
