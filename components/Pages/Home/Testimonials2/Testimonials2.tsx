'use client'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { Star } from "lucide-react";


const services = [
    "Dashboard UI/UX",
    "Admin Panels & Internal Tools",
    "SaaS Product Design",
    "Enterprise Web Applications",
    "Workflow Automation Interfaces",
    "Analytics & Reporting Dashboards",
    "Custom Design Systems",
    "React / Framer / Figma Design Execution",
]

const card = [
    {
        img: "/assets/hero/1.png",
        title: "Rhinon Tech",
        sub: "AI Customer Engagement Platform",
    },
    {
        img: "/assets/projects/alrooha/image1.png",
        title: "Alrooha",
        sub: "Goods Imports and Export",
    },
]

const Testimonials2 = () => {
    return (
        <div className="py-10 lg:w-6xl max-md:px-3 px-5 mx-auto flex flex-col space-y-10">

            <div className="flex flex-col justify-center items-center gap-10">
                <div className="flex flex-col gap-3">
                    <p className="text-center w-full uppercase">Our Core Expertise</p>
                    <h2 className="text-center w-full text-7xl max-md:text-5xl max-sm:text-3xl">What We Work On</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
                    {services.map((services) => (
                        <span className="border border-white/10 text-sm  uppercase py-1 px-3 rounded-2xl ">
                            {services}
                        </span>
                    ))}

                </div>
            </div>

            {/* features */}

            <motion.div
                className="grid w-full md:grid-cols-2 grid-cols-1 gap-3"
                initial={{
                    opacity: 0,
                    y: 20,
                    rotateX: 10,      // like lifting from the back
                    transformPerspective: 1000,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,       // now upright facing viewer
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.4 }}
            >
                {card.map((card) => (
                    <div className="hover:opacity-70 transition-all duration-300 relative h-[400px] p-5 text-center flex items-end justify-center">

                        {/* Image Layer (masked) */}
                        <div
                            className="absolute inset-0 bg-cover bg-center [mask-image:linear-gradient(to_bottom,white_40%,white_60%,transparent)]"
                            style={{ backgroundImage: `url(${card.img})` }}
                        ></div>

                        {/* Text Layer (clean, no blur) */}
                        <div className="relative z-10 w-full">
                            <h2 className="text-xl font-semibold">{card.title}</h2>
                            <p className="text-white/70">{card.sub}</p>
                        </div>
                    </div>
                ))}

            </motion.div>
            <motion.div
                className="flex items-center justify-center max-md:flex-col gap-5 md:gap-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="">
                    <Button className="bg-white text-black hover:bg-gray-200 px-4 py-4 md:px-6 md:py-6 text-base font-semibold rounded-none border-3 border-black/30">
                        See our work
                    </Button>
                </div>

                {/* Social Proof */}
                <div className="flex items-center gap-4">
                    {/* Avatar Stack */}
                    <div className="flex -space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-black flex items-center justify-center">
                            <img
                                src="https://randomuser.me/api/portraits/women/1.jpg"
                                alt="User 1"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-black flex items-center justify-center">
                            <img
                                src="https://randomuser.me/api/portraits/men/2.jpg"
                                alt="User 2"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-black flex items-center justify-center">
                            <img
                                src="https://randomuser.me/api/portraits/women/3.jpg"
                                alt="User 3"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Rating & Trust Text */}
                    <div className="flex flex-col">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-white text-white" />
                            ))}
                        </div>
                        <span className="text-white/80 text-sm font-light mt-1">
                            Trusted by leading enterprises & fast-growing teams worldwide.
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>
    )

}


export default Testimonials2;