"use client";

import Hero from "./pages/Hero";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import Dinner from "./pages/Dinner";
import Footer from "./components/Footer";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const people: string[] = ["Number of People", "1", "2", "3", "4", "5", "6+"];
const time: string[] = [
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
  "6PM",
];

export default function Home() {
  const [showTable, setShowTable] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleShowTable = () => {
    setShowTable(!showTable);
  };

  return (
    <div className="relative">
      {showTable ? (
        <div className="absolute top-0 left-0 right-0">
          <div className="relative">
            <p
              className="absolute top-[210px] right-[125px] text-black cursor-pointer"
              onClick={handleShowTable}
            >
              <FontAwesomeIcon icon={faX} />
            </p>

            <div className="absolute top-[20%] left-0 z-50 w-full h-screen bg-stone-200 text-black flex items-center justify-center flex-col gap-y-6">
              <div className="text-center text-2xl font-bold tracking-wider">
                <h2>Reservations</h2>
              </div>

              <form className="space-y-4">
                {/* Location input */}
                <input
                  type="text"
                  placeholder="Location"
                  className="block w-[500px] p-2 border border-gray-300 rounded"
                  required
                />

                {/* Number of people select */}
                <select
                  name="people"
                  id="people-select"
                  className="block w-[500px] p-2 border border-gray-300 rounded"
                  required
                >
                  {people.map((person, index) => (
                    <option key={index} value={person}>
                      {person}
                    </option>
                  ))}
                </select>

                {/* Date input */}
                {isFocus ? (
                  <input
                    type="date"
                    className="block w-[500px] p-2 border border-gray-300 rounded"
                    onBlur={handleBlur}
                    required
                  />
                ) : (
                  <input
                    type="text"
                    placeholder="Date"
                    className="block w-[500px] p-2 border border-gray-300 rounded"
                    onFocus={handleFocus}
                  />
                )}

                {/* Time select */}
                <select
                  name="time"
                  id="time-id"
                  className="block w-[500px] p-2 border border-gray-300 rounded"
                  required
                >
                  {time.map((t, index) => (
                    <option key={index} value={t}>
                      {t}
                    </option>
                  ))}
                </select>

                <div className="btn6 px-4 py-2 bg-black text-white text-sm font-semibold text-center cursor-pointer inline-block tracking-wide flex justify-center">
                  FIND A TABLE
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Menu />
          <Dinner />
          <Footer />
        </>
      )}
    </div>
  );
}
