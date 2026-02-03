"use client";
import { motion } from "framer-motion";
import { Bot, Globe, Smartphone, Workflow } from "lucide-react";

const services = [
    {
        icon: Bot,
        title: "MVPs & AI SaaS",
        description: "Launch your AI-powered product fast with clean, scalable architecture",
    },
    {
        icon: Globe,
        title: "Websites & Landing Pages",
        description: "High-converting sites built in days, not weeks",
    },
    {
        icon: Smartphone,
        title: "Mobile Apps (iOS / Android)",
        description: "Cross-platform apps with native performance",
    },
    {
        icon: Workflow,
        title: "Internal Tools & Automations",
        description: "Custom dashboards and workflows that scale with your team",
    },
];

const ServicesSection = () => {
    return (
        <section id="services" className="relative py-20 px-5">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-semibold mb-4">
                        What we build
                    </h2>
                    <p className="text-lg md:text-xl text-white/70">
                        We ship products 3x faster than traditional teams
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:bg-white/15 transition-all">
                                <service.icon className="w-7 h-7 text-white" />
                            </div>

                            <h3 className="text-xl md:text-2xl font-semibold mb-3">
                                {service.title}
                            </h3>

                            <p className="text-white/70 text-base leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
