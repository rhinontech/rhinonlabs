'use client'
import svgImages from "@/components/Constants/svgImages";
import Image from "next/image";
import Process from "./Process/Process";
import Feature from "./Feature/Feature";
import Testimonials from "./Testimonials/Testimonials";
import Pricing from "./Pricing/Pricing";
import Faq from "./Faq/Faq";
import Hero from "./Hero/Hero";
import { motion } from "framer-motion";
import Testimonials2 from "./Testimonials2/Testimonials2";

const HomePage = () => {
  return (
    <div className="relative flex flex-col gap-10">
      <motion.div
        className="absolute inset-0 top-0 left-0"
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <svgImages.starBgImage />
      </motion.div>
      <Hero />
      <Process />
      <Feature />
      <Testimonials />
      <Testimonials2 />
      {/* <Pricing /> */}
      <Faq />
    </div>
  );
};

export default HomePage;
