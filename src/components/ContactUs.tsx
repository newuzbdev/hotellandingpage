"use client";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

// const center = {
//   lat: 41.311081,
//   lng: 69.240562,
// };

// const mapContainerStyle = {
//   width: "100%",
//   height: "400px",
// };

export default function ContactUs() {
  return (
    <div className="my-10 p-4 mx-4 sm:mx-4 md:mx-4 lg:mx-24">
      <div className="flex gap-10 items-center my-3 justify-center">
        <Image
          src={"/images/roundedline.svg"}
          alt="logo"
          width={132}
          height={12}
          className="hidden md:hidden lg:flex"
        />
        <h1
          className="text-[40px] leading-[56px] font-normal sm:4xl md:text-[50px] lg:text-[55px] "
          style={{ fontFamily: "Zodiak",  }}
        >
          Biz Bilan Bog&apos;lanish
        </h1>
        <Image
          src={"/images/roundedline.svg"}
          alt="logo"
          width={132}
          height={12}
          className="rotate-180 hidden md:hidden lg:flex"
        />
      </div>

      <p className="text-center mb-8 text-gray-700 text-base ">
        Savollaringiz bormi yoki yordam kerakmi? Biz bilan bog&apos;laning - biz
        yordam berishga tayyormiz!
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="w-full">
          <CardContent className="w-full h-[523px]">
            {/* <LoadScript
              googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            >
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript> */}
          </CardContent>
        </Card>

        <div>
          <CardContent className=" h-[523px]">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    className="h-[86px] placeholder:text-gray-500 text-lg px-5"
                    id="firstName"
                    name="firstName"
                    placeholder="Isim"
                    required
                  />
                </div>
                <div>
                  <Input
                    className="h-[86px] placeholder:text-gray-500 text-lg px-5"
                    id="lastName"
                    name="lastName"
                    placeholder="Familya"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex">
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="h-[86px] placeholder:text-gray-500 text-lg px-5"
                    placeholder="+998"
                    required
                  />
                </div>
              </div>

              <div>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Xabar"
                  rows={4}
                  required
                  className="h-[305px] placeholder:text-gray-500 text-lg px-5"
                />
              </div>
            </form>
          </CardContent>
        </div>
      </div>
      <div className="flex items-end justify-end py-4 px-6">
        <Button type="submit" className=" bg-[#F5A623]">
          YUBORISH
        </Button>
      </div>
    </div>
  );
}
