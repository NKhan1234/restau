import Image from "next/image";
import Link from "next/link";

export default function Dinner() {
  return (
    <div className="flex items-center justify-center flex-col py-6 px-[5%] sm:py-8 md:py-12 px-[10%]">
      <div className=" text-center">
        <Image
          src="/burger.jpg"
          alt="dinner-img"
          width={750}
          height={220}
          className="dinner-img w-[320px] h-[150px] sm:w-[550px] h-[180px] md:w-[750px] h-[220px]"
        />
        <div className="">
          <h1 className="text-2xl font-medium text-black mt-2 sm:text-4xl mt-2 font-semibold">
            Join Us for Dinner
          </h1>
          <button className="px-4 py-2 btn4 mt-2  outline-none border-none bg-yellow-500 text-white font-semibold leading-2 text-sm sm:px-4 py-2 mt-3">
            <Link href="/book">RESERVATIONS</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
