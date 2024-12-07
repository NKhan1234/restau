"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

export default function About() {
  useGSAP(() => {
    gsap.fromTo(
      ".about-h3",
      { x: -40 },
      {
        x: 40,
        duration: 1.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      }
    );
  });

  return (
    <div className="relative px-[10%] text-center w-full h-full flex items-center justify-center flex-col gap-4 bg-black text-white border-2 border-solid border-white py-16">
      <h3 className="about-h3 md:text-2xl font-bold absolute top-[8%] left-[8%] bg-black rounded px-2 py-2 text-white">
        About
      </h3>
      <div className="border border-solid border-white md:border-2 border-solid border-white px-6 py-4 sm:border border-solid border-white px-4 py-2">
        <h2 className="text-sm font-md leading-3 md:leading-7 pb-4 text-xl font-bold sm:leading-5 pb-2 text-sm font-normal">
          &quot;Rudra Resto, which means “Rudrapur Restaurent” in Uttarakhand,
          India, is just that – a compilation of lively dining experiences.
          Rudra celebrates the best of Indian dishes with welcoming hospitality
          and service. Seasonal changes guide the menu of scratch-made pasta
          made in-house daily, cheeses, antipastis, pizzas and more. Staying
          true to Indian dining traditions, Rudra also offers a “For the Table”
          dining option curated for a family-style experience, offered nightly
          alongside the full of carte menu. &quot;
        </h2>
        <button className="btn2 px-4 py-2 outline-none border-none bg-white text-black font-md text-sm">
          <Link href="/about">Learn more</Link>{" "}
        </button>
      </div>
    </div>
  );
}
