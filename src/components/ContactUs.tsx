"use client";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
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
    <div className="my-10 p-4">
      <div className="flex gap-10 items-center my-3 justify-center">
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
          Biz Bilan Bog'lanish
        </h1>
        <Image
          src={"/images/roundedline.svg"}
          alt="logo"
          width={132}
          height={12}
          className="rotate-180"
        />
      </div>

      <p className="text-center mb-8 text-gray-700 text-base ">
        Savollaringiz bormi yoki yordam kerakmi? Biz bilan bog'laning - biz
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

        <Card>
          <CardContent className="p-6">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Isim</Label>
                  <Input
                    className="h-[76px]"
                    id="firstName"
                    name="firstName"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="">
                    Familya
                  </Label>
                  <Input
                    className="h-[76px]"
                    id="lastName"
                    name="lastName"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Telefon</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground">
                    +998
                  </span>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="rounded-l-none h-24"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Xabar</Label>
                <Textarea id="message" name="message" rows={4} required className="h-[231px]" />
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="flex items-end justify-end py-4">
        <Button type="submit" className=" bg-[#F5A623]">
          YUBORISH
        </Button>
      </div>
    </div>
  );
}
