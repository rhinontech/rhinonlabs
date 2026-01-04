"use client";
import { motion } from "framer-motion";

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
          Enterprise Design, <br /> Simplified.
        </h2>
        <div className="flex md:justify-end md:items-end">
          <p className="max-w-md md:ml-5">
            You get the quality of a world-class product team without the
            overhead. We partner closely with your engineering, operations, and
            leadership teams to deliver:
          </p>
        </div>
      </div>

      {/* features */}

      <div className="flex flex-wrap justify-center gap-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="h-[450px] max-md:h-[400px] relative overflow-hidden w-full md:w-[calc(50%-6px)] lg:w-[calc(33.33%-8px)] p-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 * index }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div
              className={`absolute -z-1 inset-0 bg-cover bg-center blur-sm`}
              style={{ backgroundImage: `url(${feature.img})` }}
            ></div>
            <div
              className="group z-20 relative flex h-full items-end bg-cover bg-center"
              style={{ backgroundImage: `url(${feature.img})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 transition-opacity duration-300"></div>
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
