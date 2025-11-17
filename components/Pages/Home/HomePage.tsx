import svgImages from "@/components/Constants/svgImages";
import Image from "next/image";
import Process from "./Process/Process";
import Feature from "./Feature/Feature";
import Testimonials from "./Testimonials/Testimonials";
import Pricing from "./Pricing/Pricing";
import Faq from "./Faq/Faq";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";

const HomePage = () => {
  return (
    <div className="relative flex flex-col ">
      <div className="absolute top-0 left-0">
        <svgImages.starBgImage />
      </div>
      <Hero />
      
      <Process />
      <Feature />
      <Testimonials />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomePage;
