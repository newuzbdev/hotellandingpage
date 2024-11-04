import Image from "next/image"

export default function Services() {
  const services = [
    {
      title: "Restoran va taomlar",
      image: "/images/services2.svg",
    },
    {
      title: "Spa va sog'liqni saqlash",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      title: "Yig'ilish va tadbirlar",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      title: "Transport va ekskursiyalar",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      title: "Xona xizmatlari",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      title: "24-soatli xizmat",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      title: "Xavfsizlik va qo'riqlash",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[1px] bg-gray-300" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif">
              Bizning hizmatlar
            </h2>
            <div className="w-16 h-[1px] bg-gray-300" />
          </div>
          <p className="text-gray-600 leading-relaxed">
            Bizning mehmonxonamiz qulay xonalar, mazali taomlar, spa va sog'liqni saqlash xizmatlari bilan sizga unutilmas dam
            olish imkonini beradi. Shuningdek, tadbirlar uchun konferensiya zallari, transport va boshqa qo'llab-quvvat xizmatlar
            ham mavjud. Maxsus takliflarimizdan foydalanib, sayohatingizni yanada yoqimli qiling!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-2xl border border-orange-100 hover:border-orange-200 transition-colors"
            >
              <div className="relative w-72 h-48 mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-center font-medium text-gray-800">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}