import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex flex-col items-center justify-center bg-white gap-4 w-full h-full py-6 px-[5%] sm:flex-row sm:py-8 sm:px-[10%]">
      {/* Left Section */}
      <div className="h-auto border border-black border-solid px-3 py-2 sm:border-2 border-black border-solid px-4 py-2 md:px-6 py-4">
        <h2 className="text-xl font-normal border-b sm:border-b-2 border-black pb-2 sm:text-3xl sm:font-semibold md:text-4xl">
          Menus
        </h2>
        <p className="text-sm font-normal pt-4 pb-2 sm:text-base sm:font-medium md:text-lg md:font-bold">
          Come see the items featured <br /> from our scratch-made kitchen.
        </p>
        <button className="bg-black text-white text-xs px-4 py-2 md:text-sm">
          <Link href="/menu">Check Now</Link>
        </button>
      </div>

      {/* Right Section */}
      <div>
        <Image
          src="/plate-text.png"
          alt="plate-img"
          width={320}
          height={370}
          className="w-[250px] h-[280px] hidden sm:block w-[280px] sm:h-[300px] md:w-[320px] md:h-[350px]"
        />
      </div>
    </div>
  );
}
