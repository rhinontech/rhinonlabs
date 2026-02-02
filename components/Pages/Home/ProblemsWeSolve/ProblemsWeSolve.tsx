"use client";

import { motion } from "framer-motion";
import { AlertCircle, Database, Users, FileSpreadsheet, Clock, GitBranch, BarChart3, AlertTriangle } from "lucide-react";

const problems = [
    {
        icon: BarChart3,
        title: "Dashboards showing yesterday's data",
        description: "Your team makes decisions based on outdated information because reporting takes hours to refresh."
    },
    {
        icon: Users,
        title: "Admin tools breaking past 50 users",
        description: "What worked for your small team now crashes, times out, or becomes impossibly slow."
    },
    {
        icon: Clock,
        title: "Manual workflows eating 10+ hours/week",
        description: "Your ops team spends entire afternoons copy-pasting data between systems just to keep things running."
    },
    {
        icon: FileSpreadsheet,
        title: "Teams building workarounds in spreadsheets",
        description: "Critical business processes live in shared Excel files because your tools don't do what you need."
    },
    {
        icon: AlertTriangle,
        title: "Legacy systems no one wants to touch",
        description: "That 'temporary' internal tool from 2019 is now mission-critical, undocumented, and breaking weekly."
    },
    {
        icon: GitBranch,
        title: "Juggling 5 tools for one workflow",
        description: "Your team switches between Slack, Airtable, custom scripts, and email just to complete a single process."
    },
    {
        icon: Database,
        title: "Critical reports taking days to generate",
        description: "Leadership asks for insights, but gathering the data requires IT tickets and manual exports."
    },
    {
        icon: AlertCircle,
        title: "Zero visibility into what's actually happening",
        description: "Stakeholders have no real-time view of operations, so every update becomes a meeting or Slack thread."
    }
];

const ProblemsWeSolve = () => {
    return (
        <div className="py-20 px-5 max-w-6xl mx-auto">
            <div className="flex flex-col gap-10">
                {/* Header */}
                <motion.div
                    className="flex flex-col gap-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <p className="uppercase text-sm md:text-base tracking-widest text-white/70">Sound Familiar?</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
                        Similar Problems We Solve
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        If your team is wrestling with any of these, you're not alone. These are the exact challenges we help enterprises fix.
                    </p>
                </motion.div>

                {/* Problems Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                                        <problem.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg font-semibold text-white">{problem.title}</h3>
                                    <p className="text-white/70 text-sm leading-relaxed">{problem.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.div
                    className="text-center mt-5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <p className="text-white/60 text-sm italic">
                        Recognize your situation? Let's talk about fixing it.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default ProblemsWeSolve;
