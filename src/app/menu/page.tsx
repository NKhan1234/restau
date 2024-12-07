import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { menuItems } from "../pages/api/hello";

export default function Menu() {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <div className="menu-img w-full h-[70vh] flex items-center justify-center py-16">
          <h1 className="text-white text-4xl font-semibold sm:text-6xl font-semibold md:text-7xl font-bold">
            OUR MENU
          </h1>
        </div>
        <div className="px-[7%] py-[60px] grid items-center justify-center gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {menuItems.map((item) => (
            <div
              className="border border-solid border-black py-2 px-4 grid  gap-2 items-center "
              key={item.id}
            >
              <h1 className="font-bold text-md sm:text-lg">{item.name}</h1>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
