import AboutUs from "@/components/aboutUs";
import Hero from "@/components/hero";
import OurServices from "@/components/ourServices";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="overflow-hidden mx-[100px]">
        <AboutUs />
        <OurServices />
      </div>
    </>
  );
}
