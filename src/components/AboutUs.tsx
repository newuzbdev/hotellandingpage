import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="px-4 py-16 md:py-18 mx-4 sm:mx-4 md:mx-4 lg:mx-24" id="aboutus">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-[32px] text-black leading-3 font-normal">
              Biz Haqimizda
            </span>
            <Image
              src={"/images/aboutUsLine.svg"}
              alt="logo"
              width={135}
              height={16}
              className="hidden md:block"
            />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 max-w-[602px]">
            At Diamond Luxury Hotel
          </h2>

          <p className="text-gray-600 leading-6 max-w-[610px]">
            Bizning mehmonxonamiz — shinamlik va qulaylik uyg&apos;unlashgan maskan.
            Mehmonlarimizga yuksak darajadagi xizmat ko&apos;rsatish va unutilmas
            tajriba ulashish bizning bosh maqsadimizdir. Zamonaviy dizayndagi
            xonalarimiz, do&apos;stona muhit va ehtiyotkor xizmatimiz bilan sizga
            huzur bag&apos;ishlaymiz.Har bir mehmon biz uchun alohida ahamiyatga ega.
            Sizning istak va ehtiyojlaringizni inobatga olib, har bir tafsilotni
            mukammal qilishga intilamiz. Ish safaringiz bo&apos;ladimi yoki dam olish
            uchun kelgan bo&apos;lasizmi, bizning mehmonxonamizda siz o&apos;zingizni uyda
            his qilasiz.Kelgusidagi tashriflaringizni quvonch bilan kutib
            qolamiz va sizga eng yaxshi dam olish imkoniyatini taqdim etishga
            tayyormiz!
          </p>

          <Button className="bg-[#FFA724] hover:bg-[#FF9500] text-white px-8 py-6 rounded-full">
            BAND QILISH <ArrowRight color="#ffffff" />
          </Button>
        </div>

        {/* Images */}
        <div className="relative h-[500px] w-full">
          <div className="absolute w-full lg:w-[326px] lg:right-0 lg:top-10 h-[436px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/aboutUs1.jpg"
              alt="Hotel pool view"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute hidden lg:block right-44 bottom-0 w-[270px] h-[360px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/aboutUs1.jpg"
              alt="Hotel dining area"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
