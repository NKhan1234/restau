import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex items-center justify-center bg-white gap-2  w-full h-full py-8 px-[10%] sm:flex items-center justify-center bg-white gap-2  w-full h-full py-8 px-[10%] md:flex items-center justify-center bg-white gap-8  w-full h-full py-8 px-[10%]">
      <div className="h-auto border-1 border-black border-solid px-3 py-2 sm:h-auto border-1 border-black border-solid px-4 py-2 md:h-[200px] border-2 border-black border-solid px-4 py-2">
        <h2 className="menu-h2 text-3xl font-normal border-b-1 border-black border-solid sm:text-4xl font-semibold border-b-1 border-black border-solid md:text-5xl font-semibold border-b-2 border-black border-solid">
          Menus
        </h2>
        <p className="text-sm font-normal sm:text-lg font-semibold md:text-xl font-bold m-0 pt-4 pb-2">
          Come see the items featured <br /> from our scratch made kitchen.
        </p>
        <button className="btn3 px-3 py-1.5 outline-none border-none bg-black text-xs font-normal md: px-4 py-2 outline-none border-none bg-black text-sm font-normal text-white ">
          <Link href="/menu">Check Now</Link>
        </button>
      </div>
      <div className="">
        <Image
          src="/plate-text.png"
          alt="plate-img"
          width={320}
          height={370}
          className="menu-img w-[250px] h-[280px] sm:w-[280px] h-[300px] md:w-[320px] h-[350px]"
        />
      </div>
    </div>
  );
}
