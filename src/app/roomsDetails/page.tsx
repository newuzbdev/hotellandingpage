import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Wifi, Wind, Bath, Car } from "lucide-react"

export default function RoomsDetails() {
  const amenities = {
    roomFeatures: [
      "Telefon",
      "Panjara",
      "Garderob",
      "Oyna",
      "Stullar",
      "Minibar",
      "Adl mebellar",
      "Yostiqlar",
      "Bepul ichimliklar",
    ],
    security: [
      "Gullargan eshiklar",
      "Xavfs kaliti",
      "24/7 yong'inga qarshi xizmati",
      "Elektron kalit",
      "Tutun detektori",
      "24/7 mehmonxona xavfsizligi",
    ],
    commonAmenities: [
      "Xizmatlar",
      "Favqulodda chiqish",
      "Gigiya vositalari",
      "Dush",
      "Yostiqlar",
      "Soch quritish moslamasi",
      "Sochiqlar",
      "Shipaklar",
    ],
  }

  return (
    <div className="container  px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-serif">Standart bir kishilik</h1>
        <Button className="bg-[#FFA724] hover:bg-[#FF9500] text-white px-8 rounded-full">
          BAND OLISH
        </Button>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="md:col-span-2">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
             src="/images/hotellanding.svg"
              alt="Luxury bedroom"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="relative h-[180px] rounded-lg overflow-hidden">
              <Image
                src="/images/hotellanding.svg"
                alt={`Room view ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Amenity Badges */}
      <div className="flex flex-wrap gap-4 mb-8">
        {[
          { icon: Check, text: "Yaxshi narsalar" },
          { icon: Wifi, text: "Bepul Wi-Fi" },
          { icon: Wind, text: "Konditsioner" },
          { icon: Bath, text: "Shaxsiy hammom" },
          { icon: Car, text: "Bepul avto turargoh" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm"
          >
            <item.icon className="w-4 h-4" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-8 leading-relaxed">
        MIOS Hotel - keng xonalar, sezgir xodimlar va yuqori sifatli xizmat ko'rsatishdan qulay mehmonxona. Shahar markazida — Urgench shahridagi joylashganigi sababli uni mahalliy
        aholi va chet ellik sayohatlar uchun tanlashadi. Yaqin atrofda do'konlar, kafe va restoranlar joylashgandir, unda va ko'ngilochar maskanlari yaylab masofada joylashgan.
      </p>

      {/* Amenity Lists */}
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-medium mb-4">Xona xususiyatlari</h3>
          <ul className="space-y-2">
            {amenities.roomFeatures.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4">Xavfsizlik</h3>
          <ul className="space-y-2">
            {amenities.security.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4">Hammam uchun qulayliklar</h3>
          <ul className="space-y-2">
            {amenities.commonAmenities.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}