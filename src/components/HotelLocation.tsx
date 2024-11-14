import Image from "next/image";
import { Card, CardContent } from "./ui/card";

export default function HotelLocation() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col items-center justify-end  ">
          <div className="flex gap-10 items-center my-3">
            <Image
              src={"/images/roundedline.svg"}
              alt="logo"
              width={132}
              height={12}
              className="sm:hidden md:hidden lg:flex hidden"
            />
            <h1
              className="text-[40px] leading-[56px] font-normal sm:2xl md:text-[30px] lg:text-[55px] flex items-center justify-center"
              style={{ fontFamily: "Zodiak",}}
            >
              Mehmonxonang Joylashuvi
            </h1>
            <Image
              src={"/images/roundedline.svg"}
              alt="logo"
              width={132}
              height={12}
              className="rotate-180 sm:hidden md:hidden lg:flex hidden"
            />
          </div>
          <p className="text-center mb-8 text-gray-700 text-base  text-[18px] leading-[40px] font-normal sm:2xl md:text-[20px] lg:text-[18px]">
            Sizning dam olishingiz uchun barcha tafsilotlar mukammal tarzda
            yaratilgan
          </p>
        </div>
      </div>
      <main className="flex-1 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-4 sm:mx-4 md:mx-4 lg:mx-24">
          <Card className="relative flex flex-col rounded-lg overflow-hidden">
            <CardContent className="p-0 flex-grow group">
              <div className="relative w-full h-[420px] rounded-lg overflow-hidden">
                <Image
                  src={"/images/hotellanding.svg"}
                  fill
                  objectFit="cover"
                  alt="Hotel Landing"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </CardContent>
          </Card>
          <Card className="relative flex flex-col rounded-lg overflow-hidden">
            <CardContent className="p-0 flex-grow group">
              <div className="relative w-full h-[420px] rounded-lg overflow-hidden">
                <Image
                  src={"/images/hotellanding.svg"}
                  fill
                  objectFit="cover"
                  alt="Hotel Landing"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </CardContent>
          </Card>
          <Card className="relative flex flex-col rounded-lg overflow-hidden">
            <CardContent className="p-0 flex-grow group">
              <div className="relative w-full h-[420px] rounded-lg overflow-hidden">
                <Image
                  src={"/images/hotellanding.svg"}
                  fill
                  objectFit="cover"
                  alt="Hotel Landing"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
