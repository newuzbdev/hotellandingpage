import Hero from "@/components/hero";
import dynamic from "next/dynamic";
const OurServices = dynamic(() => import("@/components/OurServices"));
const HotelLoaction = dynamic(() => import("@/components/HotelLocation"));
const AboutUs = dynamic(() => import("@/components/AboutUs"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const CustomerReviews = dynamic(() => import("@/components/CustomerReviews"));
const Questions = dynamic(() => import("@/components/Questions"));
const ContactUs = dynamic(() => import("@/components/ContactUs"));
const RoomList = dynamic(() => import("@/components/RoomList"));

export default function Home() {
  return (
    <div className="my-10">
      <Hero />
      <AboutUs />
      <OurServices />
      <RoomList />
      <HotelLoaction />
      <Gallery />
      <CustomerReviews />
      <Questions />
      <ContactUs />
    </div>
  );
}
