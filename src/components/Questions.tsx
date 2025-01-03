import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Gallery() {
  return (
    <div className="px-4">
      <div className="flex justify-center mt-20">
        <div className="flex flex-col items-center justify-end">
          <div className="flex gap-10 items-center my-3">
            <Image
              src="/images/roundedline.svg"
              alt="decorative line"
              width={132}
              height={12}
              className="hidden md:hidden lg:flex"
            />
            <h1
              className="text-[35px] leading-[56px] font-normal sm:text-4xl md:text-4xl lg:text-[48px]"
              style={{ fontFamily: "Zodiak", textAlign: "left" }}
            >
              Tez-Tez So&apos;raladigan Savollar
            </h1>
            <Image
              src="/images/roundedline.svg"
              alt="decorative line"
              width={132}
              height={12}
              className="rotate-180 hidden md:hidden lg:flex"
            />
          </div>

          <p className="text-center mb-8 text-gray-700 text-base max-w-[820px]">
            Bu yerda siz bizning xizmatlarimiz va turar joyingiz haqidagi eng
            keng tarqalgan savollarga tezkor javoblarni topasiz.
          </p>
        </div>
      </div>
      <>
        <Accordion
          type="single"
          collapsible
          className="space-y-4 mx-4 sm:mx-4 md:mx-4 lg:mx-24"
        >
          <AccordionItem
            value="item-1"
            className="border rounded-lg px-6 py-2 shadow-sm"
          >
            <AccordionTrigger className="flex justify-between hover:no-underline">
              <span className="text-base font-medium">
                Mehmonxonaga kirish va chiqish vaqtlari qanday?
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              Check-in va check-out vaqtlari mehmonxona qoidalariga muvofiq
              belgilanadi.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border rounded-lg px-6 py-2 shadow-sm"
          >
            <AccordionTrigger className="flex justify-between hover:no-underline">
              <span className="text-base font-medium">
                Mehmonxonada ovqatlanish imkoniyatlari bormi?
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4 ">
              Ha, bizning restoranimiz har kuni ertalabdan kechgacha xizmat
              ko&apos;rsatadi va turli xil milliy va xalqaro taomlarni taklif etadi.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border rounded-lg px-6 py-2 shadow-sm"
          >
            <AccordionTrigger className="flex justify-between hover:no-underline">
              <span className="text-base font-medium">
                Mehmonxona bepul Wi-Fi xizmatini taqdim etadimi?
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              Ha, barcha xonalarda va umumiy joylarda bepul Wi-Fi mavjud.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border rounded-lg px-6 py-2 shadow-sm"
          >
            <AccordionTrigger className="flex justify-between hover:no-underline">
              <span className="text-base font-normal">
                Mehmonxonaga yaqin diqqatga sazovor joylar bormi?
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              Ha, mehmonxona markaziy joyda joylashgan va ko&apos;plab diqqatga
              sazovor joylar yaqin masofada joylashgan.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </>
    </div>
  );
}
