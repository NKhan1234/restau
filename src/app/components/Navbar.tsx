"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [showNav, setShowNav] = useState<boolean>(false);
  function handleNavShow() {
    setShowNav(!showNav);
  }
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= 100) {
          navRef.current.classList.add("newnav");
        } else {
          navRef.current.classList.remove("newnav");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={navRef}
      className="fixed top-0 left-0 right-0 py-2 px-[3%] z-50 flex items-center justify-between bg-white text-yellow-500  px-8 mb-8 md:py-4 px-2 "
    >
      <div className="">
        <Image src="/restologo.png" alt="nav-logo" width={100} height={50} />
      </div>
      <div className="hidden lg:flex items-center justify-center gap-x-8">
        <p className="nav-a text-md font-bold">
          <Link href="/about">ABOUT</Link>{" "}
        </p>
        <p className="nav-a text-md font-bold">
          <Link href="/event">EVENTS</Link>{" "}
        </p>
        <p className="nav-a text-md font-bold">
          <Link href="/menu"> MENUS</Link>
        </p>
        <p className="nav-a text-md font-bold">
          <Link href="/hour">HOURS & LOCATION</Link>{" "}
        </p>
        <button className="btn1 py-2 px-4 outline-none border-none bg-yellow-500 text-white font-semibold text-md tracking-wide  ">
          <Link href="/book">RESERVATIONS</Link>
        </button>
      </div>

      <div className="relative lg:hidden">
        {showNav && (
          <div className="absolute top-[90%] w-[240px] right-[5%] py-10 px-10 bg-white rounded">
            <p className="text-sm font-bold py-2">ABOUT</p>
            <p className="text-sm font-bold py-2">SERVICES</p>
            <p className="text-sm font-bold py-2">MENUS</p>
            <p className="text-sm font-bold py-2">GALLERY</p>
            <button className="btn1 py-2 px-4 outline-none border-none bg-yellow-500 text-white font-normal text-sm tracking-wide ">
              <Link href="/book">RESERVATIONS</Link>
            </button>
          </div>
        )}
        <div className="">
          <h1
            className="text-orange-500 cursor-pointer"
            onClick={handleNavShow}
          >
            {showNav ? (
              <FontAwesomeIcon icon={faX} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </h1>
        </div>
      </div>
    </div>
  );
}
