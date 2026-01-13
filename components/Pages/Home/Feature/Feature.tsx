"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    img: "/assets/path/feature_dashboard.png",
    title: "Dashboard UI/UX",
    sub: "Intuitive, data-driven interfaces designed for clarity and control.",
  },
  {
    img: "/assets/path/feature_web_app.png",
    title: "Web applications",
    sub: "Scalable, high-performance web apps built for enterprise needs.",
  },
  {
    img: "/assets/path/feature_internal_tools.png",
    title: "Internal tools",
    sub: "Streamline operations with custom tools tailored to your workflows.",
  },
  {
    img: "/assets/path/feature_admin.png",
    title: "Multi-role admin systems",
    sub: "Complex permission management made simple and secure.",
  },
  {
    img: "/assets/path/feature_saas_design.png",
    title: "Product design for SaaS & enterprise software",
    sub: "User-centric design that drives adoption and retention.",
  },
];

const Feature = () => {
  return (
    <div className="py-10 max-w-6xl max-md:px-3 mx-auto flex flex-col space-y-5">
      <div className="flex max-md:gap-5 max-md:flex-col justify-between gap-16">
        <h2 className="md:text-6xl text-4xl">
          Internal Tools That <br /> Actually Work at Scale
        </h2>
        <div className="flex md:justify-end md:items-end">
          <p className="max-w-md md:ml-5">
            Scaling teams often struggle with broken dashboards, manual workflows, and admin tools that don't scale. We fix these pain points by building:
          </p>
        </div>
      </div>

      {/* features */}

      <div className="flex flex-wrap justify-center gap-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="h-[450px] max-md:h-[400px] relative overflow-hidden w-full md:w-[calc(50%-6px)] lg:w-[calc(33.33%-8px)] p-1 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 * index }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* Background Image (Blurred) */}
            <div className="absolute inset-0 -z-10">
              <Image
                src={feature.img}
                alt={`${feature.title} background`}
                fill
                className="object-cover blur-sm brightness-50"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Main Content */}
            <div className="group z-20 relative flex h-full items-end w-full h-full">

              <div className="absolute inset-0 -z-1 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 transition-opacity duration-300"></div>
              </div>

              <div className="relative z-10 w-full px-7 pb-7 flex flex-col gap-2">
                <h2 className="font-semibold text-xl text-white drop-shadow-md">{feature.title}</h2>
                <p className="text-white/90 font-medium drop-shadow-sm leading-relaxed">{feature.sub}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
