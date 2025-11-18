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
        question: 'How customizable is the platform?',
        answer: 'Our platform is fully customizable with extensive theming options. You can easily change colors, fonts, layouts, and more to match your brand identity—no coding required. We provide a visual editor that makes customization intuitive and quick.'
    },
    {
        id: 2,
        question: 'Is it compatible with all devices?',
        answer: 'Yes, our platform is 100% responsive and works seamlessly across all devices including desktops, tablets, and smartphones. We ensure consistent performance and user experience across different screen sizes and browsers.'
    },
    {
        id: 3,
        question: 'How quickly can I launch?',
        answer: 'You can launch your project in minutes. With our pre-built templates and drag-and-drop interface, you can get started immediately without any technical knowledge. Most users are ready to go live within 30 minutes.'
    },
    {
        id: 4,
        question: 'Can it scale with my business growth?',
        answer: 'Absolutely. Our infrastructure is built for scalability and can handle growth from small projects to enterprise-level applications. We automatically optimize performance as your user base and content grow.'
    },
];

export default function Faq() {
    const [expandedId, setExpandedId] = useState<number | null>(1);
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const toggleExpanded = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (

        <div className="max-w-3xl z-10 mx-auto px-4 py-20">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 flex flex-col items-center gap-5"
            >
                <p>FAQ</p>
                <h1 className="text-7xl md:text-6xl">
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
                        animate={{ opacity: 1, y: 0 }}
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
