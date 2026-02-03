"use client";
import { motion } from "framer-motion";
import { Building2, Rocket } from "lucide-react";

const targetSegments = [
    {
        icon: Building2,
        title: "SMBs and Startups",
        description: "Who need to build products, websites, internal tools and automation workflows",
    },
    {
        icon: Rocket,
        title: "Founders & Solopreneurs",
        description: "Who want to build and launch MVPs, prototypes and validate ideas fast",
    },
];

const ICPSection = () => {
    return (
        <section id="icp" className="relative py-20 px-5">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    className="text-center text-4xl md:text-5xl font-semibold mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Who we work with
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {targetSegments.map((segment, index) => (
                        <motion.div
                            key={index}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
                            initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-16 h-16 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                                <segment.icon className="w-8 h-8 text-white" />
                            </div>

                            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                                {segment.title}
                            </h3>

                            <p className="text-white/70 text-lg leading-relaxed">
                                {segment.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ICPSection;
