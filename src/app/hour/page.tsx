import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Hour() {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <div className="hour-img w-full h-[70vh] flex items-center justify-center py-16">
          <h1 className="text-white text-3xl sm:text-4xl font-semibold md:text-7xl font-bold">
            Hours & Location
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-8 text-center py-[60px]">
          <div className="">
            <h1 className="text-md sm:text-xl font-medium">
              <span>
                <i className="ri-map-pin-line text-yellow-700"></i>
              </span>{" "}
              Naini Tower (ground floor), Haldwani
            </h1>
            <h1 className="text-md sm:text-xl font-medium">
              <span>
                <i className="ri-map-pin-line text-yellow-700"></i>
              </span>{" "}
              Near Mega Mart, Rudrapur
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="mb-2 text-md font-semibold sm:text-xl sm:font-semibold sm:mb-4">
              OPEN EVERY DAY OF WEEK!
            </h3>
            <p>
              <span className="font-semibold text-sm sm:text-lg">
                Sunday - Thursday:
              </span>{" "}
              11 AM – 10 PM
            </p>
            <p>
              <span className="font-semibold text-sm sm:text-lg">
                Friday - Saturday:
              </span>{" "}
              11 AM - 10:30 PM
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
