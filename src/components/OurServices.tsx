import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import dynamic from "next/dynamic";
const Sidebar = dynamic(() => import("./Sidebar"));

export default function OurServices() {
  return (
    <>
      <div className="flex justify-center ">
        <div className="flex flex-col items-center justify-end  ">
          <div className="flex gap-10 items-center my-3">
            <Image
              src={"/images/roundedline.svg"}
              alt="logo"
              width={132}
              height={12}
            />
            <h1
              className="text-[48px] leading-[56px] font-normal "
              style={{ fontFamily: "Zodiak", textAlign: "left" }}
            >
              Bizning Xizmatlar
            </h1>
            <Image
              src={"/images/roundedline.svg"}
              alt="logo"
              width={132}
              height={12}
              className="rotate-180"
            />
          </div>

          <p className="text-center mb-8 text-gray-700 text-base w-[820px]">
            Farovonlik va zamonaviy qulayliklar bilan jihozlangan xona
            xizmatlari, yuqori sifatli mijozlarga xizmat ko'rsatish. Sizning dam
            olishingiz uchun barcha tafsilotlar mukammal tarzda yaratilgan –
            tasalli beruvchi muhit va doimiy e'tibor bilan unutilmas tajriba
            kafolatlanadi.
          </p>
        </div>
      </div>
      <div className="flex ">
        <Sidebar />
        <main className="flex-1 pl-5 h-[calc(100vh-60px)] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            <Card className="relative flex flex-col rounded-lg overflow-hidden">
              <CardContent className="p-0 flex-grow">
                <div className="relative w-full h-[287px] rounded-lg overflow-hidden">
                  <Image
                    src={"/images/hotellanding.svg"}
                    fill
                    objectFit="cover"
                    alt="Hotel Landing"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-[32px] text-white font-medium px-4 py-2 rounded">
                    Hashamatli honalar
                  </h3>
                  <Button className="mt-4 px-12 py-6 rounded-full">
                    Barchasi
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="relative flex flex-col rounded-lg overflow-hidden">
              <CardContent className="p-0 flex-grow">
                <div className="relative w-full h-[287px] rounded-lg overflow-hidden">
                  <Image
                    src={"/images/hotellanding.svg"}
                    fill
                    objectFit="cover"
                    alt="Hotel Landing"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-[32px] text-white font-medium px-4 py-2 rounded">
                    Hashamatli honalar
                  </h3>
                  <Button className="mt-4 px-12 py-6 rounded-full">
                    Barchasi
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="relative flex flex-col rounded-lg overflow-hidden">
              <CardContent className="p-0 flex-grow">
                <div className="relative w-full h-[287px] rounded-lg overflow-hidden">
                  <Image
                    src={"/images/hotellanding.svg"}
                    fill
                    objectFit="cover"
                    alt="Hotel Landing"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-[32px] text-white font-medium px-4 py-2 rounded">
                    Hashamatli honalar
                  </h3>
                  <Button className="mt-4 px-12 py-6 rounded-full">
                    Barchasi
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="relative flex flex-col rounded-lg overflow-hidden">
              <CardContent className="p-0 flex-grow">
                <div className="relative w-full h-[287px] rounded-lg overflow-hidden">
                  <Image
                    src={"/images/hotellanding.svg"}
                    fill
                    objectFit="cover"
                    alt="Hotel Landing"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-[32px] text-white font-medium px-4 py-2 rounded">
                    Hashamatli honalar
                  </h3>
                  <Button className="mt-4 px-12 py-6 rounded-full">
                    Barchasi
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="relative flex flex-col rounded-lg overflow-hidden">
              <CardContent className="p-0 flex-grow">
                <div className="relative w-full h-[287px] rounded-lg overflow-hidden">
                  <Image
                    src={"/images/hotellanding.svg"}
                    fill
                    objectFit="cover"
                    alt="Hotel Landing"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-[32px] text-white font-medium px-4 py-2 rounded">
                    Hashamatli honalar
                  </h3>
                  <Button className="mt-4 px-12 py-6 rounded-full">
                    Barchasi
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="relative flex flex-col rounded-lg overflow-hidden">
              <CardContent className="p-0 flex-grow">
                <div className="relative w-full h-[287px] rounded-lg overflow-hidden">
                  <Image
                    src={"/images/hotellanding.svg"}
                    fill
                    objectFit="cover"
                    alt="Hotel Landing"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-[32px] text-white font-medium px-4 py-2 rounded">
                    Hashamatli honalar
                  </h3>
                  <Button className="mt-4 px-12 py-6 rounded-full">
                    Barchasi
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}
