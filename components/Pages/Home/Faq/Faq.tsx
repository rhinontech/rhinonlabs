'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        id: 1,
        question: 'How do project engagements work?',
        answer: 'We start with a discovery call, define your requirements, and create a tailored proposal including timeline, deliverables, and execution plan.'
    },
    {
        id: 2,
        question: 'Do you work with existing systems?',
        answer: 'Absolutely. We frequently redesign outdated dashboards and integrate with existing backend APIs or infrastructure.'
    },
    {
        id: 3,
        question: 'Can you handle complex enterprise workflows?',
        answer: 'Yes — multi-role dashboards, approval flows, analytics systems, and large datasets are our core expertise.'
    },
    {
        id: 4,
        question: 'Do you also develop the designs?',
        answer: 'We provide both UI/UX design and full web development, depending on your needs.'
    },
];

export default function Faq() {
    const [expandedId, setExpandedId] = useState<number | null>(1);
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const toggleExpanded = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (

        <div className="lg:w-3xl max-w-2xl z-10 mx-auto px-4 py-20">
            {/* Header */}
            <motion.div
                className="text-center mb-16 flex flex-col items-center gap-5"
            >
                <p>FAQ</p>
                <h1 className="lg:text-7xl  md:text-5xl sm:text-5xl text-3xl">
                    Frequently <br /> Asked Questions
                </h1>
                <p className="text-md max-w-xl text-white/80">
                    Everything you need to know about how our platform works, what's included, and
                    what to expect — no guesswork, just clarity.
                </p>
            </motion.div>

            {/* FAQ Items */}
            <div className="space-y-4">
                {faqItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
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
                                <h3 className="text-lg md:text-xl">
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
        </div>

    );
}
