import Image from "next/image";

export default function Services() {
  const services = [
    {
      image: "/images/bizningxizmatlar.jpg",
      description: "Restoran va taomlar",
    },
    {
      image: "/images/services2.svg",
      description: "Restoran va taomlar",
    },
    {
      image: "/images/services2.svg",
      description: "Restoran va taomlar",
    },
    {
      image: "/images/services2.svg",
      description: "Restoran va taomlar",
    },
    {
      image: "/images/services2.svg",
      description: "Restoran va taomlar",
    },
    {
      image: "/images/services2.svg",
      description: "Restoran va taomlar",
    },
    {
      image: "/images/services2.svg",
      description: "Restoran va taomlar",
    },
  ];

  return (
    <section className="mt-12  lg:py-24">
      <div className=" mx-24 px-4">
        <div className="max-w-3xl mx-auto ">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex gap-10 items-center my-3">
              <Image
                src={"/images/roundedline.svg"}
                alt="logo"
                width={132}
                height={12}
                className="sm:hidden md:hidden lg:flex hidden"
              />
              <h1
                className="text-[28px] leading-[56px] font-normal sm:2xl md:4xl lg:text-[48px]"
                style={{ fontFamily: "Zodiak", textAlign: "left" }}
              >
                Bizning Xizmatlar
              </h1>
              <Image
                src={"/images/roundedline.svg"}
                alt="logo"
                width={132}
                height={12}
                className="rotate-180 sm:hidden md:hidden lg:flex hidden"
              />
            </div>
          </div>
          <p className="leading-relaxed text-center mb-8 text-[20px] font-[Satoshi]">
            Bizning mehmonxonamiz qulay xonalar, mazali taomlar, spa va
            sog&apos;liqni saqlash xizmatlari bilan sizga unutilmas dam olish
            imkonini beradi. Shuningdek, tadbirlar uchun konferensiya zallari,
            transport va boshqa qo&apos;llab-quvvat xizmatlar ham mavjud. Maxsus
            takliflarimizdan foydalanib, sayohatingizni yanada yoqimli qiling!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map((service, index) => (
            <div key={index} className="w-full">
              <div className="p-6 rounded-2xl border border-primary mb-4 w-full">
                <div className="relative w-full aspect-square">
                  <Image
                    src={service.image}
                    alt={service.description}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-[20px] leading-[56px] font-normal sm:2xl md:4xl lg:text-[20px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 max-w-4xl mx-auto">
          {services.slice(4).map((service, index) => (
            <div key={index} className="w-full">
              <div className="p-6 rounded-2xl border border-primary mb-2 w-full">
                <div className="relative w-full aspect-square">
                  <Image
                    src={service.image}
                    alt={service.description}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-[20px] leading-[56px] font-normal sm:2xl md:4xl lg:text-[20px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
