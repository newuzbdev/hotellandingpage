import Image from "next/image";
import { Card, CardContent } from "./ui/card";

export default function Gallery() {
  return (
    <>
      <div className="flex justify-center mt-20">
        <div className="flex flex-col items-center justify-end">
          <div className="flex gap-10 items-center my-3">
            <Image
              src={"/images/roundedline.svg"}
              alt="logo"
              width={132}
              height={12}
              className="hidden sm:hidden md:hidden lg:flex"
            />
            <h1
              className="text-[40px] leading-[56px] font-normal sm:4xl md:text-[50px] lg:text-[55px] "
              style={{ fontFamily: "Zodiak", textAlign: "left" }}
            >
              Bizning Galereyamiz
            </h1>
            <Image
              src={"/images/roundedline.svg"}
              alt="logo"
              width={132}
              height={12}
              className="rotate-180 hidden sm:hidden md:hidden lg:flex"
            />
          </div>
          <p className="text-center mb-8 text-gray-700 text-base ">
            Biz taklif qilayotgan go&apos;zallik va qulaylikni o&apos;rganish
            uchun galereyamizga qarang.
          </p>
        </div>
      </div>
      <main className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 mx-4 sm:mx-4 md:mx-4 lg:mx-24">
          {/* First Row: 2 Images */}
          <Card className="relative flex flex-col rounded-lg overflow-hidden">
            <CardContent className="p-0 flex-grow group">
              <div className="relative w-full h-[336px] rounded-lg overflow-hidden">
                <Image
                  src={"/images/hotellanding.svg"}
                  fill
                  objectFit="cover"
                  alt="Hotel Landing"
                  className="transition-transform duration-500 ease-in-out group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </CardContent>
          </Card>
          <Card className="relative flex flex-col rounded-lg overflow-hidden">
            <CardContent className="p-0 flex-grow group">
              <div className="relative w-full h-[340px] rounded-lg overflow-hidden">
                <Image
                  src={"/images/hotellanding.svg"}
                  fill
                  objectFit="cover"
                  alt="Hotel Landing"
                  className="transition-transform duration-500 ease-in-out group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Second Row: 4 Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mx-4 sm:mx-4 md:mx-4 lg:mx-24">
          <Card className="relative flex flex-col rounded-lg overflow-hidden">
            <CardContent className="p-0 flex-grow group">
              <div className="relative w-full h-[236px] rounded-lg overflow-hidden">
                <Image
                  src={"/images/hotellanding.svg"}
                  fill
                  objectFit="cover"
                  alt="Hotel Landing"
                  className="transition-transform duration-500 ease-in-out group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </CardContent>
          </Card>
          <Card className="relative flex flex-col rounded-lg overflow-hidden">
            <CardContent className="p-0 flex-grow group">
              <div className="relative w-full h-[236px] rounded-lg overflow-hidden">
                <Image
                  src={"/images/hotellanding.svg"}
                  fill
                  objectFit="cover"
                  alt="Hotel Landing"
                  className="transition-transform duration-500 ease-in-out group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </CardContent>
          </Card>
          <Card className="relative flex flex-col rounded-lg overflow-hidden">
            <CardContent className="p-0 flex-grow group">
              <div className="relative w-full h-[236px] rounded-lg overflow-hidden">
                <Image
                  src={"/images/hotellanding.svg"}
                  fill
                  objectFit="cover"
                  alt="Hotel Landing"
                  className="transition-transform duration-500 ease-in-out group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </CardContent>
          </Card>
          <Card className="relative flex flex-col rounded-lg overflow-hidden">
            <CardContent className="p-0 flex-grow group">
              <div className="relative w-full h-[236px] rounded-lg overflow-hidden">
                <Image
                  src={"/images/hotellanding.svg"}
                  fill
                  objectFit="cover"
                  alt="Hotel Landing"
                  className="transition-transform duration-500 ease-in-out group-hover:scale-125"
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
