"use client";

import { useRouter } from "next/navigation";
import { useMessageContext } from "../MessageContext";
import { useState } from "react";

const people = ["Number of People", "1", "2", "3", "4", "5", "6+"];
const time = [
  "Time",
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
const places = ["Location", "Rudrapur", "Haldwani"];

export default function Book() {
  const { setMessage } = useMessageContext();
  const router = useRouter();
  const [isFocus, setIsFocus] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [selectedPeople, setSelectedPeople] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  function handleMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newMessage = `${selectedName} has booked ${selectedPlace} for ${selectedPeople} people on ${selectedDate} at ${selectedTime}, and an email has been sent to ${selectedEmail}.`;
    setMessage(newMessage);
    router.push("/book/confirm");
  }

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0">
        <div className="relative">
          <div className="absolute top-[20%] left-0 z-50 w-full h-screen bg-stone-200 text-black flex items-center justify-center flex-col gap-y-6">
            <div className="text-center font-bold tracking-wider text-3xl sm:text-4xl md:text-5xl  ">
              <h2>Reservations</h2>
            </div>

            <form onSubmit={handleMessage} className="space-y-4">
              <input
                type="text"
                placeholder="Enter Name"
                value={selectedName}
                onChange={(e) => setSelectedName(e.target.value)}
                className="block w-[230px] sm:w-[400px] md:w-[500px] p-3 border-2 border-gray-400 outline-none rounded placeholder:text-black focus:border-2 border-gray-400 focus-visible:ring"
                required
              />
              <input
                type="email"
                placeholder="Enter Email"
                value={selectedEmail}
                onChange={(e) => setSelectedEmail(e.target.value)}
                className="block w-[230px] sm:w-[400px] md:w-[500px] p-3 border-2 border-gray-400 outline-none rounded placeholder:text-black focus-visible:ring"
                required
              />
              <select
                name="place"
                id="place-id"
                className="block w-[230px] sm:w-[400px] md:w-[500px] p-3 border-2 border-gray-400 rounded focus:border-2 border-gray-400 focus-visible:ring"
                value={selectedPlace}
                onChange={(e) => setSelectedPlace(e.target.value)}
                required
              >
                {places.map((place, idx) => (
                  <option value={place} key={idx}>
                    {place}
                  </option>
                ))}
              </select>

              <select
                name="people"
                id="people-select"
                className="block w-[230px] sm:w-[400px] md:w-[500px] p-3 border-2 border-gray-400 rounded focus-visible:ring"
                value={selectedPeople}
                onChange={(e) => setSelectedPeople(e.target.value)}
                required
              >
                {people.map((person, index) => (
                  <option key={index} value={person}>
                    {person}
                  </option>
                ))}
              </select>

              {isFocus ? (
                <input
                  type="date"
                  className="block w-[230px] sm:w-[400px] md:w-[500px] outline-none p-3 border-2 border-gray-400 rounded text-black focus-visible:ring"
                  onBlur={handleBlur}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                />
              ) : (
                <input
                  type="text"
                  placeholder="Date"
                  className="block w-[230px] sm:w-[400px] md:w-[500px] p-3 border-2 border-gray-400 rounded placeholder:text-black"
                  onFocus={handleFocus}
                />
              )}

              <select
                name="time"
                id="time-id"
                className="block w-[230px] sm:w-[400px] md:w-[500px] focus-visible:ring p-3 border-2 border-gray-400 rounded placeholder:text-black font-normal"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
              >
                {time.map((t, index) => (
                  <option key={index} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="btn6 px-2 py-2 sm:px-4 sm:py-3 bg-black text-white text-sm sm:text-md font-semibold text-center cursor-pointer tracking-wide flex justify-center"
              >
                FIND A TABLE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
