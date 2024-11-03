import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="relative w-full h-[614px] overflow-hidden">
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
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-[120px] leading-[104px] font-[400] mb-6 text-center font-['Zodiak']">
          ERA
          <br />
          Hotel
        </h1>

        <Button className="bg-[#FFA724] hover:bg-[#FF9500] text-white font-medium py-6 px-8 rounded-full transition-colors duration-200 uppercase text-sm tracking-wider">
          Band olish
        </Button>
      </div>{" "}
    </div>
  );
}
