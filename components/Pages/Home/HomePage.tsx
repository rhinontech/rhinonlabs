'use client'
import { motion } from "framer-motion";
import Hero from "./Hero/Hero";
import Process from "./Process/Process";
import Faq from "./Faq/Faq";
import TrustSection from "./TrustSection/TrustSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import ValueProposition from "./ValueProposition/ValueProposition";
import ICPSection from "./ICPSection/ICPSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import Testimonials from "./Testimonials/Testimonials";
import svgImages from "@/components/Constants/svgImages";

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
      <TrustSection />
      <ServicesSection />
      <ValueProposition />
      <Process />
      <ICPSection />
      <ProjectsSection />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default HomePage;
