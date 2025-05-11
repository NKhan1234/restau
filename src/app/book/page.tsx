"use client";

import { useRouter } from "next/navigation";
import { useMessageContext } from "../MessageContext";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
  const [loading, setLoading] = useState(false);

  const form = useRef<HTMLFormElement | null>(null);

  const handleFocus = () => setIsFocus(true);
  const handleBlur = () => setIsFocus(false);

  const handleMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedEmail || !form.current) return;

    const newMessage = `${selectedName} has booked ${selectedPlace} for ${selectedPeople} people on ${selectedDate} at ${selectedTime}, and an email has been sent to ${selectedEmail} for confirmaion.`;
    setMessage(newMessage);
    setLoading(true);

    emailjs
      .sendForm(
        "service_3sux4yh",
        "template_xi2sjie",
        form.current,
        "thEpNHlpATgAdrMgc"
      )
      .then(() => {
        alert("🎉 CONGRATULATIONS! BOOKING SUCCESS!");
        router.push("/book/confirm");
      })
      .catch((error) => {
        console.error("FAILED...", error.text);
        alert("❌ Something went wrong. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0">
        <div className="relative">
          <div className="absolute top-[20%] left-0 z-50 w-full h-screen bg-stone-200 text-black flex items-center justify-center flex-col gap-y-6">
            <div className="text-center font-bold tracking-wider text-3xl sm:text-4xl md:text-5xl">
              <h2>Reservations</h2>
            </div>

            <form ref={form} onSubmit={handleMessage} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={selectedName}
                onChange={(e) => setSelectedName(e.target.value)}
                className="block w-[230px] sm:w-[400px] md:w-[500px] p-3 border-2 border-gray-400 outline-none rounded placeholder:text-black focus-visible:ring"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={selectedEmail}
                onChange={(e) => setSelectedEmail(e.target.value)}
                className="block w-[230px] sm:w-[400px] md:w-[500px] p-3 border-2 border-gray-400 outline-none rounded placeholder:text-black focus-visible:ring"
                required
              />
              <select
                name="place"
                value={selectedPlace}
                onChange={(e) => setSelectedPlace(e.target.value)}
                className="block w-[230px] sm:w-[400px] md:w-[500px] p-3 border-2 border-gray-400 rounded focus-visible:ring"
                required
              >
                {places.map((place, idx) => (
                  <option key={idx} value={place}>
                    {place}
                  </option>
                ))}
              </select>
              <select
                name="people"
                value={selectedPeople}
                onChange={(e) => setSelectedPeople(e.target.value)}
                className="block w-[230px] sm:w-[400px] md:w-[500px] p-3 border-2 border-gray-400 rounded focus-visible:ring"
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
                  name="date"
                  onBlur={handleBlur}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                  className="block w-[230px] sm:w-[400px] md:w-[500px] outline-none p-3 border-2 border-gray-400 rounded text-black focus-visible:ring"
                />
              ) : (
                <input
                  type="text"
                  placeholder="Date"
                  onFocus={handleFocus}
                  className="block w-[230px] sm:w-[400px] md:w-[500px] p-3 border-2 border-gray-400 rounded placeholder:text-black"
                />
              )}
              <select
                name="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="block w-[230px] sm:w-[400px] md:w-[500px] focus-visible:ring p-3 border-2 border-gray-400 rounded placeholder:text-black font-normal"
                required
              >
                {time.map((t, index) => (
                  <option key={index} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              {/* Hidden input for message */}
              <input
                type="hidden"
                name="message"
                value={`${selectedName} has booked ${selectedPlace} for ${selectedPeople} people on ${selectedDate} at ${selectedTime}, and an email has been sent to ${selectedEmail}.`}
              />

              <button
                type="submit"
                className="btn6 px-2 rounded-md py-2 sm:px-4 sm:py-3 bg-black text-white text-sm sm:text-md font-semibold text-center cursor-pointer tracking-wide flex justify-center"
              >
                {loading ? "FINDING..." : "FIND A TABLE"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
