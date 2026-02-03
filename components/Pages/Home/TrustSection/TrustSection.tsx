"use client";
import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

const trustSignals = [
    {
        icon: TrendingUp,
        label: "Built 5+ MVPs",
    },
    {
        icon: Users,
        label: "10+ Websites developed",
    },
    {
        icon: Award,
        label: "98% client satisfaction",
    },
    {
        icon: Clock,
        label: "100% on-time delivery",
    },
];

const TrustSection = () => {
    return (
        <section id="trust" className="relative py-16 px-5">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-center text-3xl md:text-4xl font-semibold mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Trusted by 20+ startups and global businesses
                </motion.h2>

                {/* Trust Signals Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12">
                    {trustSignals.map((signal, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center gap-3 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <signal.icon className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-sm md:text-base text-white/80 font-medium">
                                {signal.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
