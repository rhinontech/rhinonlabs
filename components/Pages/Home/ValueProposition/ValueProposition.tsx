"use client";
import { motion } from "framer-motion";
import { Zap, Code2, Layers, ArrowRight } from "lucide-react";

const valueProps = [
    {
        icon: Zap,
        title: "Ship in 1-2 weeks*",
        description: "Launch your MVP faster than hiring a dev team",
    },
    {
        icon: Code2,
        title: "AI driven development",
        description: "Modern AI tools for clean, production-grade code",
    },
    {
        icon: Layers,
        title: "Scalable tech stack",
        description: "Built with industry-standard, future-proof technologies",
    },
    {
        icon: ArrowRight,
        title: "End-to-end delivery",
        description: "design → dev → launch",
    },
];

const ValueProposition = () => {
    return (
        <section id="value" className="relative py-20 px-5 bg-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {valueProps.map((prop, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-start gap-4 p-6 rounded-xl bg-black/30 border border-white/5 backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                                <prop.icon className="w-6 h-6 text-white" />
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    {prop.title}
                                </h3>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    {prop.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
