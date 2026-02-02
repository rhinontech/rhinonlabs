"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2, FileText, GitBranch, Layers, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";

const included = [
    {
        icon: GitBranch,
        title: "Workflow Mapping",
        description: "We document your current processes and identify bottlenecks"
    },
    {
        icon: Layers,
        title: "Architecture Assessment",
        description: "Technical review of existing systems and integration points"
    },
    {
        icon: TrendingUp,
        title: "Scalability Review",
        description: "Analysis of what will break as your team grows"
    },
    {
        icon: FileText,
        title: "Technical Roadmap",
        description: "Clear recommendations with effort estimates and priority ranking"
    }
];

const deliverables = [
    "Documented findings with specific pain points",
    "Technical architecture recommendations",
    "3-6 month implementation roadmap",
    "Build vs. buy vs. fix assessment",
    "No commitment to proceed with development"
];

const AuditOffer = () => {
    const router = useRouter();

    return (
        <div className="py-20 px-5 max-w-6xl mx-auto">
            <motion.div
                className="relative overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 p-8 md:p-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className="relative z-10 flex flex-col gap-10">
                    {/* Header */}
                    <div className="flex flex-col gap-4 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 text-sm font-semibold uppercase tracking-wider mb-4">
                                Low-Risk Entry Point
                            </span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                            7-Day Internal Systems Audit
                        </h2>
                        <p className="text-lg md:text-xl text-white/80 max-w-3xl">
                            Not ready to commit to a full rebuild? Start with a focused assessment. We'll diagnose what's broken, what can be fixed, and what needs replacing.
                        </p>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* What's Included */}
                        <div className="flex flex-col gap-5">
                            <h3 className="text-2xl font-semibold flex items-center gap-2">
                                What's Included
                            </h3>
                            <div className="flex flex-col gap-4">
                                {included.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex gap-3"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">{item.title}</h4>
                                            <p className="text-sm text-white/70">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Deliverables */}
                        <div className="flex flex-col gap-5">
                            <h3 className="text-2xl font-semibold">Deliverables</h3>
                            <div className="flex flex-col gap-3">
                                {deliverables.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-3"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <p className="text-white/80">{item}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
                                <p className="text-sm text-white/70 italic">
                                    <strong className="text-white">No pressure.</strong> The audit stands on its own. Use it internally, shop it around, or work with us to execute. Your choice.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-5"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Button
                            onClick={() => router.push("/contact-us")}
                            className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg font-semibold rounded-none"
                        >
                            Request Audit
                        </Button>
                        <div className="flex flex-col items-center sm:items-start gap-1">
                            <p className="text-white/90 font-medium">Or call us directly:</p>
                            <a
                                href="tel:+918249291789"
                                className="text-xl font-bold hover:text-white/80 transition-colors"
                            >
                                +91 8249 291 789
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default AuditOffer;
