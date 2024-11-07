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
    <section className="py-16 md:py-24">
      <div className="mx-[100px] px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
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
          </div>
          <p className="leading-relaxed text-center mb-8  text-base w-[820px]">
            Bizning mehmonxonamiz qulay xonalar, mazali taomlar, spa va
            sog'liqni saqlash xizmatlari bilan sizga unutilmas dam olish
            imkonini beradi. Shuningdek, tadbirlar uchun konferensiya zallari,
            transport va boshqa qo'llab-quvvat xizmatlar ham mavjud. Maxsus
            takliflarimizdan foydalanib, sayohatingizni yanada yoqimli qiling!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="p-6 rounded-2xl border border-primary mb-4 w-full">
                  <div className="relative w-72 h-80">
                    <Image
                      src={service.image}
                      alt={service.description}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>  
              </div>
            ))}
          </div>
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  justify-items-center">
            {services.slice(4).map((service, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="p-6 rounded-2xl border border-primary mb-4 w-full">
                  <div className="relative w-72 h-80">
                    <Image
                      src={service.image}
                      alt={service.description}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-sm text-left font-[Satoshi] text-[18px] font-[500] leading-[24px]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
