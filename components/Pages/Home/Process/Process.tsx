"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare, PenTool, Code, Rocket } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Initial consultation",
    description: "We start every project with a quick discovery call to understand your product goals and user needs.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Strategy & Wireframing",
    description: "We translate your roadmap into a strategic blueprint, developing high-level wireframes that define core functionality and user flow.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Code",
    description: "Our experienced developers build clean, scalable solutions in your desired tech stack with fast implementation using industry-standard AI tools.",
    icon: Code,
  },
  {
    number: "04",
    title: "Deliver",
    description: "We ensure rigorous testing and a smooth launch before handing over a fully optimized product ready for your users.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-20 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Our 4 step process
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-8">
            We keep it lean and focused to your needs
          </p>
          <Button
            className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg font-semibold rounded-none border-3 border-black/30 transition-all"
            onClick={() => window.open('https://calendly.com/rhinonweb', '_blank')}
          >
            Book a Call
          </Button>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Icon and Number */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-5xl font-bold text-white/20">{step.number}</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
