import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Event() {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <div className="event-img w-full h-[70vh] flex items-center justify-center py-16">
          <h1 className="text-white text-4xl sm:text-5xl font-semibold md:text-7xl font-bold">
            Private Events
          </h1>
        </div>
        <div className="py-[60px] grid items-center justify-center gap-y-6">
          <h1 className="text-3xl font-bold">Book an event</h1>
          <div className="btn10 outline-none m-auto px-4 py-2 border border-solid border-yellow-500 text-yellow-500">
            <Link href="/book">INQUIRE NOW</Link>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
