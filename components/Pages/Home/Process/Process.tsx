"use client";
import { useRef } from "react";
import ScrollBeam from "./ScrollBeam";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

export default function Process() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const bg1 = useTransform(
    useScroll({ target: ref1, offset: ["start center", "end center"] })
      .scrollYProgress,
    [0, 1],
    ["#0f172a", "#ffffff"]
  );
  const bg2 = useTransform(
    useScroll({ target: ref2, offset: ["start center", "end center"] })
      .scrollYProgress,
    [0, 1],
    ["#0f172a", "#ffffff"]
  );

  return (
    <div className="px-10 max-sm:px-3 py-20 flex max-w-4xl mx-auto flex-col w-full">
      {/* header */}
      <div className="flex flex-col space-y-5 w-full px-5">
        <p className="uppercase">A Seamless Path</p>
        <h2 className="lg:text-7xl md:text-5xl sm:text-4xl text-4xl">
          From Idea to <br /> Implementation
        </h2>
        <p>
          Design and development for complex systems doesn’t have to be chaotic.
          We follow a clear, structured approach from the very first call to
          final delivery.
        </p>
      </div>
      {/* steps */}

      <div className="flex flex-col gap-5 mt-20">
        <div className="flex ">
          {/* Beam div */}
          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="h-4 w-4 rounded-full bg-white"></div>
            <ScrollBeam />
          </div>
          {/* content */}
          <div className="py-5 pl-5 flex-1">
            <div className="flex flex-col gap-5">
              <div className="flex">
                <div className="flex flex-col flex-1 space-y-2">
                  <h2 className="text-2xl">Diagnose</h2>
                  <p>
                    We begin with stakeholder interviews, workflow mapping, and risk & scalability assessment. Understanding your operations comes first.
                  </p>
                </div>
                <div className="hidden sm:block">
                  <div className="w-fit border border-white/10 px-4 py-1.5 rounded-full bg-white/5 text-sm backdrop-blur-sm text-muted-foreground">
                    Step 1
                  </div>
                </div>
              </div>
              <div className="h-[450px] border-2 w-full relative overflow-hidden rounded-lg">
                <Image
                  src="/assets/path/discovery_strategy.png"
                  alt="Discovery & Strategy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex ">
          {/* Beam div */}
          <div className="flex flex-col gap-3 justify-center items-center">
            <motion.div
              ref={ref1}
              className={`h-4 w-4 rounded-full `}
              style={{ backgroundColor: bg1 }}
            ></motion.div>
            <ScrollBeam />
          </div>
          {/* content */}
          <div className="py-5 pl-5 flex-1">
            <div className="flex flex-col gap-5">
              <div className="flex">
                <div className="flex flex-col flex-1 space-y-2">
                  <h2 className="text-2xl">Design</h2>
                  <p>
                    From UX flows to full dashboard architecture — designed for scalability, permission models, and integration requirements.
                  </p>
                </div>
                <div className="hidden sm:block">
                  <div className="w-fit border border-white/10 px-4 py-1.5 rounded-full bg-white/5 text-sm backdrop-blur-sm text-muted-foreground">
                    Step 2
                  </div>
                </div>
              </div>
              <div className="h-[450px] border-2 w-full relative overflow-hidden rounded-lg">
                <Image
                  src="/assets/path/design_architecture.png"
                  alt="Design & Architecture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          {/* Beam div */}
          <div className="flex flex-col gap-3 justify-start items-center pt-2">
            <motion.div
              ref={ref2}
              className={`h-4 w-4 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]`}
              style={{ backgroundColor: bg2 }}
            ></motion.div>
            <ScrollBeam />
          </div>
          {/* content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col gap-8">
              <div className="flex justify-between items-start">
                <div className="flex flex-col flex-1 space-y-3">
                  <h2 className="text-3xl font-semibold">Deploy</h2>
                  <p className="text-muted-foreground text-lg">
                    We turn designs into production-ready systems with testing protocols, rollout planning, and team training — built to grow with your business.
                  </p>
                </div>
                <div className="hidden sm:block">
                  <div className="w-fit border border-white/10 px-4 py-1.5 rounded-full bg-white/5 text-sm backdrop-blur-sm text-muted-foreground">
                    Step 3
                  </div>
                </div>
              </div>
              <div className="h-[450px] w-full shadow-2xl overflow-hidden relative flex items-center rounded-lg">
                {/* Background for step 3 */}
                <Image
                  src="/images/background/q3lzdr4u88731.jpg"
                  alt="Build Background"
                  fill
                  className="object-cover"
                />

                <div className="flex w-fit animate-scroll-slow gap-4 px-4 z-10">
                  {[...Array(4)].map((_, setIndex) => (
                    <div key={setIndex} className="flex gap-4 shrink-0">
                      {[
                        { src: "/assets/path/build_code.png", label: "Build" },
                        { src: "/assets/path/integration_cloud.png", label: "Integrate" },
                        { src: "/assets/path/delivery_mobile.png", label: "Deliver" },
                      ].map((item, i) => (
                        <div key={i} className="relative w-[300px] h-[350px] overflow-hidden border border-white/10 group rounded-md">
                          <Image
                            src={item.src}
                            alt={item.label}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white font-medium">{item.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
