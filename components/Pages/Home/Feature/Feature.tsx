"use client";
import { motion } from "framer-motion";

const features = [
  {
    img: "/images/feature_dashboard_ui.png",
    title: "Dashboard UI/UX",
    sub: "Intuitive, data-driven interfaces designed for clarity and control.",
  },
  {
    img: "/images/feature_web_apps.png",
    title: "Web applications",
    sub: "Scalable, high-performance web apps built for enterprise needs.",
  },
  {
    img: "/images/feature_internal_tools.png",
    title: "Internal tools",
    sub: "Streamline operations with custom tools tailored to your workflows.",
  },
  {
    img: "/images/feature_admin_systems.png",
    title: "Multi-role admin systems",
    sub: "Complex permission management made simple and secure.",
  },
  {
    img: "/images/feature_saas_design.png",
    title: "Product design for SaaS & enterprise software",
    sub: "User-centric design that drives adoption and retention.",
  },
];

const Feature = () => {
  return (
    <div className="py-10 max-w-6xl max-md:px-3 mx-auto flex flex-col space-y-5">
      <div className="flex max-md:gap-5 max-md:flex-col justify-between gap-16">
        <h2 className="md:text-6xl text-4xl">
          Enterprise Design, <br /> Without the Complexity.
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

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="h-[450px] max-md:h-[400px] relative overflow-hidden p-1"
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
              className=" z-20 flex h-full items-end bg-cover bg-center"
              style={{ backgroundImage: `url(${feature.img})` }}
            >
              <div className="w-full px-7 pb-7 flex flex-col gap-3">
                <h2 className="font-semibold text-lg">{feature.title}</h2>
                <p>{feature.sub}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
