import Image from "next/image";

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
            />
            <h1
              className="text-[48px] leading-[56px] font-normal"
              style={{ fontFamily: "Zodiak", textAlign: "left" }}
            >
              Tez-Tez So'raladigan Savollar
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
            Bu yerda siz bizning xizmatlarimiz va turar joyingiz haqidagi eng
            keng tarqalgan savollarga tezkor javoblarni topasiz.
          </p>
        </div>
      </div>
    </>
  );
}
