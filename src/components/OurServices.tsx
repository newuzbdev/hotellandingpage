// import Image from "next/image";
// import { Card, CardContent } from "./ui/card";
// import { Button } from "./ui/button";
// import dynamic from "next/dynamic";
// const Sidebar = dynamic(() => import("./Sidebar"));

// export default function OurServices() {
//   return (
//     <>
//       <div className="flex justify-center mx-24">
//         <div className="flex flex-col items-center justify-end  ">
//           <div className="flex gap-10 items-center my-3">
//             <Image
//               src={"/images/roundedline.svg"}
//               alt="logo"
//               width={132}
//               height={12}
//               className="hidden sm:hidden md:hidden lg:flex"
//             />
//             <h1
//               className="text-[30px] leading-[56px] font-normal sm:4xl md:4xl lg:text-[50px] font-[Zodiak] px-2"
//             >
//               Bizning Xizmatlar
//             </h1>
//             <Image
//               src={"/images/roundedline.svg"}
//               alt="logo"
//               width={132}
//               height={12}
//               className="rotate-180 hidden sm:hidden md:hidden lg:flex"
//             />
//           </div>

//           <p className="text-center text-gray-700 text-base leading-6 sm:w-60 md:w-72 lg:w-[800px]">
//             Farovonlik va zamonaviy qulayliklar bilan jihozlangan xona
//             xizmatlari, yuqori sifatli mijozlarga xizmat ko&apos;rsatish. Sizning dam
//             olishingiz uchun barcha tafsilotlar mukammal tarzda yaratilgan –
//             tasalli beruvchi muhit va doimiy e&apos;tibor bilan unutilmas tajriba
//             kafolatlanadi.
//           </p>
//         </div>
//       </div>
//       <div className="flex mx-4 sm:mx-4 md:mx-4 lg:mx-24 py-4">
//         <Sidebar />
//         <main className="flex-1 pl-5 h-[calc(100vh-60px)] overflow-y-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
//             <Card className="relative flex flex-col rounded-lg overflow-hidden">
//               <CardContent className="p-0 flex-grow">
//                 <div className="relative w-full h-[287px] rounded-lg overflow-hidden">
//                   <Image
//                     src={"/images/hotellanding.svg"}
//                     fill
//                     objectFit="cover"
//                     alt="Hotel Landing"
//                   />
//                   <div className="absolute inset-0 bg-black/40" />
//                 </div>
//                 <div className="absolute inset-0 flex flex-col items-center justify-center">
//                   <h3 className="text-[32px] text-white font-medium px-4 py-2 rounded">
//                     Hashamatli honalar
//                   </h3>
//                   <Button className="mt-4 px-12 py-6 rounded-full">
//                     Barchasi
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card className="relative flex flex-col rounded-lg overflow-hidden">
//               <CardContent className="p-0 flex-grow">
//                 <div className="relative w-full h-[287px] rounded-lg overflow-hidden">
//                   <Image
//                     src={"/images/hotellanding.svg"}
//                     fill
//                     objectFit="cover"
//                     alt="Hotel Landing"
//                   />
//                   <div className="absolute inset-0 bg-black/40" />
//                 </div>
//                 <div className="absolute inset-0 flex flex-col items-center justify-center">
//                   <h3 className="text-[32px] text-white font-medium px-4 py-2 rounded">
//                     Hashamatli honalar
//                   </h3>
//                   <Button className="mt-4 px-12 py-6 rounded-full">
//                     Barchasi
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card className="relative flex flex-col rounded-lg overflow-hidden">
//               <CardContent className="p-0 flex-grow">
//                 <div className="relative w-full h-[287px] rounded-lg overflow-hidden">
//                   <Image
//                     src={"/images/hotellanding.svg"}
//                     fill
//                     objectFit="cover"
//                     alt="Hotel Landing"
//                   />
//                   <div className="absolute inset-0 bg-black/40" />
//                 </div>
//                 <div className="absolute inset-0 flex flex-col items-center justify-center">
//                   <h3 className="text-[32px] text-white font-medium px-4 py-2 rounded">
//                     Hashamatli honalar
//                   </h3>
//                   <Button className="mt-4 px-12 py-6 rounded-full">
//                     Barchasi
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card className="relative flex flex-col rounded-lg overflow-hidden">
//               <CardContent className="p-0 flex-grow">
//                 <div className="relative w-full h-[287px] rounded-lg overflow-hidden">
//                   <Image
//                     src={"/images/hotellanding.svg"}
//                     fill
//                     objectFit="cover"
//                     alt="Hotel Landing"
//                   />
//                   <div className="absolute inset-0 bg-black/40" />
//                 </div>
//                 <div className="absolute inset-0 flex flex-col items-center justify-center">
//                   <h3 className="text-[32px] text-white font-medium px-4 py-2 rounded">
//                     Hashamatli honalar
//                   </h3>
//                   <Button className="mt-4 px-12 py-6 rounded-full">
//                     Barchasi
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card className="relative flex flex-col rounded-lg overflow-hidden">
//               <CardContent className="p-0 flex-grow">
//                 <div className="relative w-full h-[287px] rounded-lg overflow-hidden">
//                   <Image
//                     src={"/images/hotellanding.svg"}
//                     fill
//                     objectFit="cover"
//                     alt="Hotel Landing"
//                   />
//                   <div className="absolute inset-0 bg-black/40" />
//                 </div>
//                 <div className="absolute inset-0 flex flex-col items-center justify-center">
//                   <h3 className="text-[32px] text-white font-medium px-4 py-2 rounded">
//                     Hashamatli honalar
//                   </h3>
//                   <Button className="mt-4 px-12 py-6 rounded-full">
//                     Barchasi
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card className="relative flex flex-col rounded-lg overflow-hidden">
//               <CardContent className="p-0 flex-grow">
//                 <div className="relative w-full h-[287px] rounded-lg overflow-hidden">
//                   <Image
//                     src={"/images/hotellanding.svg"}
//                     fill
//                     objectFit="cover"
//                     alt="Hotel Landing"
//                   />
//                   <div className="absolute inset-0 bg-black/40" />
//                 </div>
//                 <div className="absolute inset-0 flex flex-col items-center justify-center">
//                   <h3 className="text-[32px] text-white font-medium px-4 py-2 rounded">
//                     Hashamatli honalar
//                   </h3>
//                   <Button className="mt-4 px-12 py-6 rounded-full">
//                     Barchasi
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </main>
//       </div>
//     </>
//   );
// }
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import dynamic from "next/dynamic";
const Sidebar = dynamic(() => import("./Sidebar"));

export default function OurServices() {
  return (
    <>
      <div className="flex justify-center px-4 lg:px-24">
        <div className="flex flex-col items-center">
          <div className="flex gap-4 lg:gap-10 items-center my-3">
            <Image
              src={"/images/roundedline.svg"}
              alt="line logo"
              width={132}
              height={12}
              className="hidden lg:block"
            />
            <h1 className="text-2xl lg:text-[50px] font-normal font-[Zodiak] px-2 text-center">
              Bizning Xizmatlar
            </h1>
            <Image
              src={"/images/roundedline.svg"}
              alt="line logo"
              width={132}
              height={12}
              className="hidden lg:block rotate-180"
            />
          </div>
          <p className="text-center text-gray-700 text-sm md:text-base leading-6 max-w-md lg:max-w-3xl">
            Farovonlik va zamonaviy qulayliklar bilan jihozlangan xona
            xizmatlari, yuqori sifatli mijozlarga xizmat ko&apos;rsatish. Sizning dam
            olishingiz uchun barcha tafsilotlar mukammal tarzda yaratilgan –
            tasalli beruvchi muhit va doimiy e&apos;tibor bilan unutilmas tajriba
            kafolatlanadi.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row px-4 lg:px-24 py-4">
        <Sidebar />
        <main className="flex-1 lg:pl-5 mt-4 lg:mt-0 h-[calc(100vh-60px)] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="relative flex flex-col rounded-lg overflow-hidden">
                <CardContent className="p-0 flex-grow">
                  <div className="relative w-full h-[200px] md:h-[287px] rounded-lg overflow-hidden">
                    <Image
                      src={"/images/hotellanding.svg"}
                      layout="fill"
                      objectFit="cover"
                      alt="Hotel Landing"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h3 className="text-2xl md:text-xl lg:text-3xl text-white font-medium px-4 py-2 rounded">
                      Hashamatli honalar
                    </h3>
                    <Button className="mt-4 px-8 py-3 md:px-12 md:py-4 rounded-full">
                      Barchasi
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}