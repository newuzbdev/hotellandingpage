import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className=" w-full h-screen">
      <div className="absolute inset-0">
        <Image
          src="/images/hotellanding.svg"
          alt="Hotel exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-center font-[Zodiak] sm:text-[50px] md:text-[100px] md:leading-[104px] lg:text-[120px] text-[70px]">
          MBOS
        </h1>
        <p className="leading-10 sm:text-4xl md:text-7xl lg:text-[102px] text-[40px] font-[Zodiak]">
          Hotel
        </p>
        <Button className="bg-[#FFA724] hover:bg-[#FF9500] text-white font-medium py-6 px-8 rounded-full transition-colors duration-200 uppercase text-sm tracking-wider">
          Band olish
        </Button>
      </div>
    </div>
  );
}
