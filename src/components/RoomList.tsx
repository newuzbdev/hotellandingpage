// import { Card } from "./ui/card";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";

// const RoomList = () => {
//   const rooms = [
//     {
//       title: "Satandart bir kishilik",
//       description: "Ta'sirchan manzarali shinam xonalar",
//       number: "01",
//       image: "/images/aboutUs1.jpg",
//     },
//     {
//       title: "Satandart ikki kishilik",
//       description: "Ta'sirchan manzarali shinam xonalar",
//       number: "02",
//       image: "/images/aboutUs1.jpg",
//     },
//     {
//       title: "Superior",
//       description: "Ta'sirchan manzarali shinam xonalar",
//       number: "03",
//       image: "/images/aboutUs1.jpg",
//     },
//     {
//       title: "Oilaviy xona",
//       description: "Ta'sirchan manzarali shinam xonalar",
//       number: "04",
//       image: "/images/aboutUs1.jpg",
//     },
//     {
//       title: "VIP",
//       description: "Ta'sirchan manzarali shinam xonalar",
//       number: "05",
//       image: "/images/aboutUs1.jpg",
//     },
//   ];

//   return (
//     <Card className="my-10 w-full">
//       {rooms.map((room, index) => (
//         <div
//           key={index}
//           className="relative flex border rounded-lg overflow-hidden transition-all duration-100 group hover:bg-primary hover:text-white"
//         >
//           <div className="absolute top-0 left-0 w-0 h-full bg-cover bg-center transition-all duration-300 group-hover:w-[18%]">
//             <Image
//               src={room.image}
//               alt={room.title}
//               layout="fill"
//               objectFit="cover"
//               className="transition-all duration-300"
//               loading="lazy"

//             />
//           </div>

//           <div className="relative z-10 flex-1 px-4 group-hover:pl-[20%] transition-all duration-300">
//             <div className="flex justify-between items-center h-[128px]">
//               <div>
//                 <h2
//                   className="text-[32px] font-normal hover:text-white"
//                   style={{ fontFamily: "Zodiak", textAlign: "left" }}
//                 >
//                   {room.title}
//                 </h2>
//                 <p className="text-sm hover:text-white">{room.description}</p>
//               </div>
//               <span className="relative bg-yellow-400 text-white rounded-full px-3 py-1 text-xs">
//                 <span className="group-hover:hidden w-[49px] h-7">{room.number}</span>
//                 <span className="absolute inset-0 items-center justify-center ml-20 group-hover:flex group-hover:text-black hidden bg-white rounded-full w-[49px] h-7">
//                   <ArrowRight size={20} />
//                 </span>
//               </span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </Card>
//   );
// };

// export default RoomList;

import { Card } from "./ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const RoomList = () => {
  const rooms = [
    {
      title: "Standard bir kishilik",
      description: "Ta'sirchan manzarali shinam xonalar",
      number: "01",
      image: "/images/aboutUs1.jpg",
    },
    {
      title: "Standard ikki kishilik",
      description: "Ta'sirchan manzarali shinam xonalar",
      number: "02",
      image: "/images/aboutUs1.jpg",
    },
    {
      title: "Superior",
      description: "Ta'sirchan manzarali shinam xonalar",
      number: "03",
      image: "/images/aboutUs1.jpg",
    },
    {
      title: "Oilaviy xona",
      description: "Ta'sirchan manzarali shinam xonalar",
      number: "04",
      image: "/images/aboutUs1.jpg",
    },
    {
      title: "VIP",
      description: "Ta'sirchan manzarali shinam xonalar",
      number: "05",
      image: "/images/aboutUs1.jpg",
    },
  ];

  return (
    <Card className="my-10 w-full">
      {rooms.map((room, index) => (
        <div
          key={index}
          className="relative flex border rounded-lg overflow-hidden transition-all duration-100 group hover:bg-primary hover:text-white"
        >
          <div className="absolute top-0 left-0 w-0 h-full bg-cover bg-center transition-all duration-300 group-hover:w-[18%]">
            <Image
              src={room.image}
              alt={room.title}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-300"
              loading="lazy"
            />
          </div>

          <div className="relative z-10 flex-1 px-4 group-hover:pl-[20%] transition-all duration-300">
            <div className="flex justify-between items-center h-[128px]">
              <div>
                <h2
                  className="text-[32px] font-normal hover:text-white"
                  style={{ fontFamily: "Zodiak", textAlign: "left" }}
                >
                  {room.title}
                </h2>
                <p className="text-sm hover:text-white">{room.description}</p>
              </div>
              <span className="relative rounded-full w-[49px] h-7">
                <span
                  className="absolute inset-0 items-center justify-center font-normal bg-yellow-400 text-white rounded-full px-4 py-[1px]  group-hover:hidden "
                  style={{ fontFamily: "Satashi" }}
                >
                  {room.number}
                </span>
                <span className="absolute inset-0 items-center justify-center hidden group-hover:flex bg-white text-black rounded-full px-3 py-1 text-xs">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default RoomList;
