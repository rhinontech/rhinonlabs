"use client";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Photos from "./PhotosCrauser";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="overflow-hidden relative min-h-screen flex flex-col justify-center">
      <motion.div
        className="absolute inset-0 top-64 max-sm:top-52 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div
          className="mask-[linear-gradient(to_bottom,transparent,white_30%,white_60%,transparent)]
                mask-mode:luminance relative w-full h-full"
        >
          <Image
            src="https://framerusercontent.com/images/oEeFUDDyOcLHiBBci1NNXPxqE.jpg?scale-down-to=2048"
            fill
            className="object-cover"
            alt="Hero Background"
            priority
            sizes="100vw"
          />
        </div>
      </motion.div>
      <div className="pt-32 max-sm:pt-24 px-5 pb-14 flex flex-col gap-10 max-w-5xl mx-auto w-full">
        <div className="flex flex-col gap-5 items-center">
          <motion.p
            className="text-center uppercase text-sm md:text-base tracking-widest"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Your Design Agency Template
          </motion.p>

          <div className="flex flex-col gap-0 w-full">
            <TextGenerateEffect
              className="text-center lg:text-7xl md:text-5xl text-4xl font-semibold leading-tight"
              words={"Your Digital Product, <br /> Re-Engineered for Scale"}
            />
          </div>
          <motion.p
            className="text-center max-w-2xl text-base md:text-lg text-white/80 leading-relaxed px-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Rhinon Web builds powerful, enterprise-grade dashboards, web apps,
            internal tools, and mission-critical digital platforms. No
            subscriptions. No generic templates. Just tailored solutions
            designed to fit the way your business works.
          </motion.p>
        </div>
        <motion.div
          className="flex items-center justify-center flex-col md:flex-row gap-5 md:gap-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="z-20">
            <Button
              className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg font-semibold rounded-none border-3 border-black/30 transition-all"
              onClick={() => router.push("/contact-us")}
            >
              Start a Project
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-4">
            {/* Avatar Stack */}
            <div className="flex -space-x-4">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className="w-12 h-12 rounded-full bg-gray-600 border-2 border-black flex items-center justify-center relative overflow-hidden"
                >
                  <Image
                    src={
                      num === 2
                        ? `https://randomuser.me/api/portraits/men/${num}.jpg`
                        : `https://randomuser.me/api/portraits/women/${num}.jpg`
                    }
                    alt={`User ${num}`}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
              ))}
            </div>

            {/* Rating & Trust Text */}
            <div className="flex flex-col">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-white text-white"
                  />
                ))}
              </div>
              <span className="text-white/80 text-xs md:text-sm font-light mt-1">
                Trusted by leading enterprises.
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col gap-5 mt-10">
        <motion.div
          className="flex flex-col md:flex-row justify-between px-5 gap-5 md:gap-10 max-w-4xl mx-auto text-sm md:text-base text-center md:text-left text-white/70"
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
          className="pb-3 mask-[linear-gradient(to_bottom,black_50%,transparent_100%)] webkit-mask-[linear-gradient(to_bottom,black_50%,transparent_100%)]"
        >
          <Photos />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
