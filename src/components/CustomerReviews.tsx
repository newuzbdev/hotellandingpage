// import { Card, CardContent } from "@/components/ui/card";
// import { Star } from "lucide-react";
// import Image from "next/image";

// export default function CustomerReviews() {
//   const testimonials = [
//     {
//       rating: 5,
//       text: "Mehmonxona juda qalay va toza edi. Xizmat ham, xonalarning qulayliklarga ega va xavfsiz juda yaxshi darajada. Oziq-ovqatlar ham mazali va xilma-xil, yaxshi qilingan!",
//       author: "Sapirboyev Mukhtor",
//       role: "Davolanib",
//       image: "/images/services.svg",
//       icon: "/images/comma.svg",
//     },
//     {
//       rating: 3,
//       text: "Mehmonxonaning joylashuvi yaxshi, lekin xonalar unchalik toza emas edi va xizmat ko'rsatish ham bo'sh. Shunday bo'lsada narxi arzon va yaxshi bo'ldi.",
//       author: "Muidamov Xudoshkur",
//       role: "Davolanib",
//       image: "/images/services.svg",
//       icon: "/images/comma.svg",
//     },
//     {
//       rating: 4,
//       text: "Mehmonxona umumiy jihatdan yaxshi edi, lekin ba'zi kamchiliklar bor. Yaxshi jihati, xonalar qulay va xavfsiz edi, mehmonxona xodimlari qabul qilinishi kechikmasdan to'g'rilandi, yemida yaxshi bo'lar edi.",
//       author: "Kurbaniyozov Quvondik",
//       role: "Qalay xizm",
//       image: "/images/services.svg",
//       icon: "/images/comma.svg",
//     },
//   ];

//   return (
//     <div className="w-full px-4 py-12 relative mt-20 h-auto md:h-auto">
//       <Image
//         src={"/images/mijozfikri.jpg"}
//         alt="Background"
//         fill
//         className="object-cover brightness-50 hidden md:block"
//       />
//       <div className="max-w-6xl mx-auto space-y-4 relative z-10">
//         <div className="flex gap-10 my-3 justify-center">
//           <Image
//             src={"/images/whiteline.svg"}
//             alt="logo"
//             width={132}
//             height={12}
//             className="hidden md:hidden lg:flex"
//           />
//           <h1
//             className="text-[28px] leading-[56px] font-normal text-white md:text-[32px]"
//             style={{ fontFamily: "Zodiak", textAlign: "left" }}
//           >
//             Mijozlarning fikrlari
//           </h1>
//           <Image
//             src={"/images/whiteline.svg"}
//             alt="logo"
//             width={132}
//             height={12}
//             className="rotate-180 hidden md:hidden lg:flex"
//           />
//         </div>

//         <p className="text-center mb-8 text-white text-base flex items-center justify-center px-4">
//           Fikringiz biz uchun qadrli! Yordamingiz bilan xizmatlarimizni yanada
//           yaxshilaymiz.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
//           {testimonials.map((testimonial, index) => (
//             <Card
//               key={index}
//               className="bg-cards-background border-none text-white relative"
//             >
//               <CardContent className="p-6 space-y-4">
//                 <div className="flex gap-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className={`w-4 h-4 ${
//                         i < testimonial.rating
//                           ? "text-yellow-400 fill-yellow-400"
//                           : "text-gray-400"
//                       }`}
//                     />
//                   ))}
//                 </div>
//                 <blockquote
//                   className="font-medium text-[16px] md:text-[18px] leading-[24px]"
//                   style={{ fontFamily: "Satoshi" }}
//                 >
//                   &quot;{testimonial.text}&quot;
//                 </blockquote>
//                 <div className="flex items-center gap-3">
//                   <Image
//                     src={testimonial.image}
//                     alt={`${testimonial.author}'s profile picture`}
//                     className="rounded-full w-8 md:w-10 h-8 md:h-10 object-cover"
//                     width={40}
//                     height={40}
//                   />
//                   <div>
//                     <div className="font-medium text-sm md:text-base">
//                       {testimonial.author}
//                     </div>
//                     <div className="text-xs md:text-sm text-blue-200">
//                       {testimonial.role}
//                     </div>
//                   </div>
//                 </div>
//                 <Image
//                   src={testimonial.icon}
//                   alt="comma"
//                   width={46}
//                   height={38}
//                   className="absolute bottom-12 right-6"
//                 />
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export default function CustomerReviews() {
  const testimonials = [
    {
      rating: 5,
      text: "Mehmonxona juda qalay va toza edi. Xizmat ham, xonalarning qulayliklarga ega va xavfsiz juda yaxshi darajada. Oziq-ovqatlar ham mazali va xilma-xil, yaxshi qilingan!",
      author: "Sapirboyev Mukhtor",
      role: "Davolanib",
      image: "/images/services.svg",
      icon: "/images/comma.svg",
    },
    {
      rating: 3,
      text: "Mehmonxonaning joylashuvi yaxshi, lekin xonalar unchalik toza emas edi va xizmat ko'rsatish ham bo'sh. Shunday bo'lsada narxi arzon va yaxshi bo'ldi.",
      author: "Muidamov Xudoshkur",
      role: "Davolanib",
      image: "/images/services.svg",
      icon: "/images/comma.svg",
    },
    {
      rating: 4,
      text: "Mehmonxona umumiy jihatdan yaxshi edi, lekin ba'zi kamchiliklar bor. Yaxshi jihati, xonalar qulay va xavfsiz edi, mehmonxona xodimlari qabul qilinishi kechikmasdan to'g'rilandi, yemida yaxshi bo'lar edi.",
      author: "Kurbaniyozov Quvondik",
      role: "Qalay xizm",
      image: "/images/services.svg",
      icon: "/images/comma.svg",
    },
  ];

  return (
    <div className="w-full px-4 py-12 relative mt-20 h-auto md:h-auto">
      <Image
        src={"/images/mijozfikri.jpg"}
        alt="Background"
        fill
        className="object-cover brightness-50"
      />
      <div className="max-w-6xl mx-auto space-y-4 relative z-10">
        <div className="flex gap-10 my-3 justify-center">
          <Image
            src={"/images/whiteline.svg"}
            alt="logo"
            width={132}
            height={12}
            className="hidden lg:flex"
          />
          <h1
            className="text-white text-center text-[30px] md:text-[30px] lg:text-[42px] font-normal"
            style={{ fontFamily: "Zodiak" }}
          >
            Mijozlarning fikrlari
          </h1>
          <Image
            src={"/images/whiteline.svg"}
            alt="logo"
            width={132}
            height={12}
            className="rotate-180 hidden lg:flex"
          />
        </div>

        <p className="text-center mb-8 text-white text-sm md:text-base flex items-center justify-center px-4">
          Fikringiz biz uchun qadrli! Yordamingiz bilan xizmatlarimizni yanada yaxshilaymiz.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-cards-background border-none text-white relative"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-400"
                      }`}
                    />
                  ))}
                </div>
                <blockquote
                  className="font-medium text-[14px] md:text-[16px] lg:text-[18px] leading-[24px]"
                  style={{ fontFamily: "Satoshi" }}
                >
                  &quot;{testimonial.text}&quot;
                </blockquote>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.author}'s profile picture`}
                    className="rounded-full w-8 md:w-10 h-8 md:h-10 object-cover"
                    width={40}
                    height={40}
                  />
                  <div>
                    <div className="font-medium text-sm md:text-base">
                      {testimonial.author}
                    </div>
                    <div className="text-xs md:text-sm text-blue-200">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <Image
                  src={testimonial.icon}
                  alt="comma"
                  width={46}
                  height={38}
                  className="absolute bottom-12 right-6"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
