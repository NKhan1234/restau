"use client";

import { useMessageContext } from "../../MessageContext";

export default function Confirm() {
  const { message } = useMessageContext();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-stone-200 text-black">
      <h1 className="text-4xl font-bold">Booking Confirmation</h1>
      <p className="mt-4 text-lg font-semibold">{message}</p>
    </div>
  );
}
