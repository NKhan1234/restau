import Image from "next/image";
import Link from "next/link";

export default function Dinner() {
  return (
    <div className="flex items-center justify-center flex-col py-12 ">
      <div className="relative text-center">
        <Image
          src="/burger.jpg"
          alt="dinner-img"
          width={750}
          height={220}
          className="dinner-img"
        />
        <div className="absolute top-[40%] left-[31%] ">
          <h1 className="dinner-h1 text-4xl font-semibold text-white">
            Join Us for Dinner
          </h1>
          <button className="btn4 mt-4 px-4 py-2 outline-none border-none bg-orange-500 text-white font-semibold leading-2">
            <Link href="/book">RESERVATIONS</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
