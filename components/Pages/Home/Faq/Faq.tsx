'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        id: 1,
        question: 'Do you code everything or use no-code/low-code tools?',
        answer: 'We build products with real code, not fragile templates. We use a modern, AI-powered development stack (tools like Cursor and Claude Code) to write clean, production-grade code from scratch. We\'ve tested no-code and low-code platforms extensively---they\'re fine for quick demos, but they don\'t scale well for real products. As soon as you need custom logic, integrations, or performance, they become limiting and expensive to maintain. With AI-assisted coding, we get the best of both worlds: fast development and fully customizable, scalable solutions.'
    },
    {
        id: 2,
        question: 'How long does the development take?',
        answer: 'It depends on complexity, but we\'re much faster than traditional dev teams. Typical timelines: Websites & landing pages: up to 2-3 days, MVPs & SaaS products: 2-3 weeks, Complex platforms: 3-4 weeks. Our speed comes from AI-native workflows, pre-built internal frameworks, and a tight product + engineering process.'
    },
    {
        id: 3,
        question: 'What happens after the development is done?',
        answer: 'You have two flexible options: (1) Monthly Retainer --- We continue as your extended dev team, building features, fixing bugs, and improving the product based on real user feedback. (2) Full Handoff --- We hand over the entire codebase, built with industry-standard tools, fully documented and easy for any developer to continue. Either way, you\'re never locked in. Your product is clean, portable, and yours.'
    },
    {
        id: 4,
        question: 'We have a complex enterprise product, can you handle complex workflows?',
        answer: 'Yes. That\'s actually one of our strengths. Our team has experience building multi-role systems, complex business logic, integrations with third-party APIs, data-heavy workflows, and AI-driven features. We combine product thinking + engineering, so we don\'t just build features---we design systems that scale and make sense long-term.'
    },
    {
        id: 5,
        question: 'Do you also cover design and project management for products?',
        answer: 'Yes, it\'s fully end-to-end. Every project starts with a short strategy & planning session where we understand your business and users, define the scope and roadmap, and lock timelines and milestones. Then we design UI/UX, build interactive prototypes, and start development. You get one team handling everything: strategy, design, development, and delivery. No coordination headache.'
    },
    {
        id: 6,
        question: 'What\'s your pricing?',
        answer: 'Pricing depends on product complexity, scope, and speed of delivery. But in general, we\'re significantly more affordable than hiring in-house or working with traditional agencies. You get startup-grade speed at founder-friendly pricing.'
    },
    {
        id: 7,
        question: 'Why should I choose you over others?',
        answer: 'Because we\'re built for fast-moving teams. Our core advantage is speed to market with AI-native development without compromising quality. We build with a product + engineering mindset and offer end-to-end delivery with affordable & transparent pricing.'
    },
];

export default function Faq() {
    const [expandedId, setExpandedId] = useState<number | null>(1);
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const toggleExpanded = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (

        <section id="faqs" className="relative py-20 px-5">
            <div className="lg:w-3xl max-w-4xl z-10 mx-auto">
                {/* Header */}
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-5xl font-semibold">
                            All your questions answered
                        </h2>
                    </div>
                    <div className="flex-1 text-left md:text-right">
                        <p className="text-lg text-white/70">
                            Everything you need to know before building your product with us
                        </p>
                    </div>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-4 mb-12">
                    {faqItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                onClick={() => toggleExpanded(item.id)}
                                onHoverStart={() => setHoveredId(item.id)}
                                onHoverEnd={() => setHoveredId(null)}
                                layout
                                className={`border-2 overflow-hidden cursor-pointer transition-colors ${expandedId === item.id && 'bg-white text-black'}`}
                            >
                                {/* Question Header */}
                                <motion.div
                                    layout
                                    className="p-6 flex items-center justify-between"
                                >
                                    <h3 className="text-lg md:text-xl font-medium">
                                        {item.question}
                                    </h3>

                                    {/* Plus Icon with animations */}
                                    <motion.div
                                        className="flex-shrink-0 ml-4"
                                        animate={{
                                            rotate: hoveredId === item.id ? 360 : (expandedId === item.id ? 135 : 0),
                                        }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <motion.div
                                            animate={{
                                                rotate: expandedId === item.id ? 135 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="text-2xl"
                                        >
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <line x1="12" y1="5" x2="12" y2="19" />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                            </svg>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>

                                {/* Answer - Animated expansion */}
                                {expandedId === item.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <motion.div
                                            initial={{ scale: 0.95 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 0.2 }}
                                            className="px-6 pb-6 leading-relaxed"
                                        >
                                            {item.answer}
                                        </motion.div>
                                    </motion.div>
                                )}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Button
                        className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg font-semibold rounded-none border-3 border-black/30 transition-all"
                        onClick={() => window.open('https://calendly.com/rhinonweb', '_blank')}
                    >
                        Book a free discovery call
                    </Button>
                </motion.div>
            </div>
        </section>

    );
}
