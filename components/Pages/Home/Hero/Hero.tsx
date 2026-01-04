"use client";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

import Photos from "./PhotosCrauser";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="absolute inset-0 top-64 max-sm:top-96 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div
          className="mask-[linear-gradient(to_bottom,transparent,white_30%,white_60%,transparent)]
                mask-mode:luminance"
        >
          <img
            src="https://framerusercontent.com/images/oEeFUDDyOcLHiBBci1NNXPxqE.jpg?scale-down-to=2048"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </motion.div>
      <div className="pt-44 max-sm:pt-20 px-5 pb-14 flex flex-col gap-10 max-w-5xl mx-auto">
        <div className="flex flex-col gap-5 items-center">
          <motion.p
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Your Design Agency Template
          </motion.p>

          <div className="flex flex-col gap-0">
            <TextGenerateEffect
              className="text-center lg:text-7xl md:text-5xl text-4xl font-normal"
              words={"Your Digital Product, <br /> Re-Engineered for Scale"}
            />
          </div>
          <motion.p
            className="text-center max-w-2xl text-lg text-white/80"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Rhinon Web builds powerful, enterprise-grade dashboards, web apps,
            internal tools, and mission-critical digital platforms.
            No subscriptions. No generic templates. Just tailored solutions designed to fit the way your business works.
          </motion.p>
        </div>
        <motion.div
          className="flex items-center justify-center max-md:flex-col gap-5 md:gap-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="">
            <Button className="bg-white text-black hover:bg-gray-200 px-4 py-4 md:px-6 md:py-6 text-base font-semibold rounded-none border-3 border-black/30">
              Start a Project
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-4">
            {/* Avatar Stack */}
            <div className="flex -space-x-4">
              <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-black flex items-center justify-center">
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt="User 1"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-black flex items-center justify-center">
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="User 2"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-black flex items-center justify-center">
                <img
                  src="https://randomuser.me/api/portraits/women/3.jpg"
                  alt="User 3"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* Rating & Trust Text */}
            <div className="flex flex-col">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-white text-white" />
                ))}
              </div>
              <span className="text-white/80 text-sm font-light mt-1">
                Trusted by leading enterprises & fast-growing teams worldwide.
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-white text-white" />
                ))}
              </div>
              <span className="text-white/70 text-sm">
                Trusted by leading enterprises & fast-growing teams worldwide.
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col gap-5">

        <motion.div
          className="flex justify-between px-5 gap-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }} // 👈 only animate on first view
        >
          <span>2024 – 2025 Case Study Showcase</span>
          <span>Live Sessions • Dedicated Teams • Enterprise Delivery</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="pb-3"
        >
          <Photos />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
