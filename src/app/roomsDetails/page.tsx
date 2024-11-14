"use client";
import Image from "next/image";
import { useState } from "react";
import { Bath, CircleParking, Coffee, Wifi, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function Component() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
    "/images/hotellanding.svg",
    "/images/aboutUs.jpg",
    "/images/hotellanding.svg",
    "/images/hotellanding.svg",
    "/images/hotellanding.svg",
  ];

  const amenities = {
    roomFeatures: [
      ["Telefon", "Oyna", "Aqlli televizor"],
      ["Pardalar", "Blanket", "Yostiqlar"],
      ["Garderob", "Mini-bar", "Bepul ichimliklar"],
    ],
    security: [
      ["Gullargan eshiklar", "Xavfs kaliti"],
      ["24/7 yong'inga qarshi xizmati", "Elektron kalit"],
      ["Tutun detektori", "24/7 mehmonxona xavfsizligi"],
    ],
    commonAmenities: [
      ["Xizmatlar", "Favqulodda chiqish", "Gigiya vositalari"],
      ["Dush", "Yostiqlar", "Soch quritish moslamasi"],
      ["Sochiqlar", "Shipaklar"],
    ],
  };

  return (
    <div className="py-8 mx-4 sm:mx-8 md:mx-[120px] pt-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between md:mt-10 mt-12 lg:mt-24">
          <h1 className="text-3xl font-serif">Standart bir kishilik</h1>
          <Button className="w-full bg-[#FFA724] text hover:bg-[#FF9500] sm:w-auto py-6 rounded-[24px] px-8">
            BAND QILISH
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="relative h-[460px] w-full overflow-hidden rounded-l-lg">
              <Image
                src={images[0]}
                alt="Main room view"
                fill
                className="object-cover cursor-pointer"
                onClick={() => setSelectedImage(images[0])}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-6">
            {images.slice(1).map((image, index) => (
              <div
                key={index}
                className="relative h-[220px] overflow-hidden cursor-pointer rounded-r-lg"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`Room view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-[90vw] sm:max-w-[69vw]">
            <DialogTitle></DialogTitle>
            {selectedImage && (
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage}
                  alt="Selected room view"
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>

        <div className="flex flex-wrap gap-3">
          {[
            { icon: Coffee, text: "Yaxshi Nonushta" },
            { icon: Wifi, text: "Bepul Wi-Fi" },
            { icon: Wind, text: "Konditsioner" },
            { icon: Bath, text: "Shaxsiy hammom" },
            { icon: CircleParking, text: "Bepul avto turargoh" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-md bg-[#BAC6DC] px-4 py-3 text-sm"
            >
              <item.icon className="h-5 w-5 text-cards-background" />
              <span className="text-cards-background font-normal text-base">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <p className="font-normal text-base leading-8">
          MBOS Hotel - keng xonalar, sezgir xodimlar va yuqori sifatli xizmat
          ko&apos;rsatadigan qulay mehmonxona. Shahar markazida – Urganch
          shahrida joylashganligi sababli uni mahalliy aholi va chet ellik
          sayyohlar uchun topish oson. Yaqin atrofda do&apos;konlar, kafe va
          restoranlar, supermarketlar, savdo va ko&apos;ngilochar markazlar,
          yurish masofasida zarur bo&apos;lgan barcha narsalar mavjud.
          Mehmonxonada ushbu toifadagi xonalar soni 17 ta. Mehmonxonamiz kir
          yuvish va xonalarni kundalik tozalash xizmatlarini taklif etadi. Xona
          xizmati, xavfsizlik, qabulxona va avtoturargoh kunning istalgan
          vaqtida sizga xizmat ko&apos;rsatishdan mamnun bo&apos;ladi. Siz
          tinchgina uxlashingiz mumkin, biz sizning xavfsizligingiz uchun
          g&apos;amxo&apos;rlik qilamiz! Yo&apos;laklardagi yong&apos;indan
          himoya qilish tizimi va videokuzatuv tizimi 24 soat ishlaydi.
        </p>
        <div>
          <Button className="w-[10px] bg-[#FFA724] text hover:bg-[#FF9500] sm:w-28 py-6 rounded-[24px] px-16">
            BAND QILISH
          </Button>
        </div>
        <div className="my-4 border-b w-full"></div>

        <div className="space-y-5">
          <h3 className="text-xl font-medium font-[Zodiak]">
            Xona xususiyatlari
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 border-b py-4">
            {amenities.roomFeatures.map((group, groupIndex) => (
              <ul key={groupIndex} className="space-y-3">
                {group.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Image
                      src="/images/check.svg"
                      alt="check"
                      width={20}
                      height={20}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <h3 className="text-xl font-medium font-[Zodiak]">Xavfsizlik</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 border-b py-4">
            {amenities.security.map((group, groupIndex) => (
              <ul key={groupIndex} className="space-y-4">
                {group.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Image
                      src="/images/check.svg"
                      alt="check"
                      width={20}
                      height={20}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <h3 className="text-xl font-medium font-[Zodiak]">
            Hammam uchun qulayliklar
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3">
            {amenities.commonAmenities.map((group, groupIndex) => (
              <ul key={groupIndex} className="space-y-3">
                {group.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Image
                      src="/images/check.svg"
                      alt="check"
                      width={20}
                      height={20}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
