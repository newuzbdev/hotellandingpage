import Hero from "@/components/hero";
import dynamic from "next/dynamic";
const OurServices = dynamic(() => import("@/components/OurServices"));
const HotelLoaction = dynamic(() => import("@/components/HotelLocation"));
const AboutUs = dynamic(() => import("@/components/AboutUs"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const CustomerReviews = dynamic(() => import("@/components/CustomerReviews"));
const Questions = dynamic(() => import("@/components/Questions"));

export default function Home() {
  return (
    <>
      <Hero />
      <div className="overflow-hidden mx-[100px]">
        <AboutUs />
        <OurServices />
        <HotelLoaction />
        <Gallery />
      </div>
      <CustomerReviews />
      <div className="overflow-hidden mx-[100px]">
        <Questions />
      </div>
    </>
  );
}