'use client'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";


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
        href: "/projects/1",
    },
    {
        img: "/assets/projects/alrooha/image1.png",
        title: "Alrooha",
        sub: "Goods Imports and Export",
        href: "/projects/2",
    },
]

const Testimonials2 = () => {
    const router = useRouter()
    return (
        <div className="py-10 lg:w-6xl max-md:px-3 px-5 mx-auto flex flex-col space-y-10">

            <div className="flex flex-col justify-center items-center gap-10">
                <div className="flex flex-col gap-3">
                    <p className="text-center w-full uppercase text-sm md:text-base">Our Core Expertise</p>
                    <h2 className="text-center w-full text-3xl sm:text-5xl md:text-7xl">What We Work On</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
                    {services.map((service, index) => (
                        <span key={index} className="border border-white/10 text-xs sm:text-sm uppercase py-1 px-3 rounded-2xl ">
                            {service}
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
                {card.map((item, index) => (
                    <div key={index} className="hover:opacity-70 transition-all duration-300 relative h-[400px] p-5 text-center flex items-end justify-center overflow-hidden rounded-lg border border-white/10" onClick={() => router.push(item.href)}>

                        {/* Image Layer (masked) */}
                        <Image
                            src={item.img}
                            alt={item.title}
                            fill
                            className="object-cover [mask-image:linear-gradient(to_bottom,white_40%,white_60%,transparent)]"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        {/* Text Layer */}
                        <div className="relative z-10 w-full">
                            <h2 className="text-xl font-semibold">{item.title}</h2>
                            <p className="text-white/70">{item.sub}</p>
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
                <Button
                    onClick={() => router.push("/projects")}
                    className="bg-white z-50 text-black hover:bg-gray-200 px-4 py-4 md:px-6 md:py-6 text-base font-semibold rounded-none border-3 border-black/30"
                >
                    See our work
                </Button>

                {/* Social Proof */}
                <div className="flex items-center gap-4">
                    {/* Avatar Stack */}
                    <div className="flex -space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-black flex items-center justify-center">
                            <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="User 1" className="w-full h-full rounded-full object-cover" />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-black flex items-center justify-center">
                            <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="User 2" className="w-full h-full rounded-full object-cover" />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-black flex items-center justify-center">
                            <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="User 3" className="w-full h-full rounded-full object-cover" />
                        </div>
                    </div>

                    {/* Rating & Trust Text */}
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-white text-white" />
                            ))}
                        </div>
                        <span className="text-white/70 text-sm">Trusted by modern organizations worldwide.</span>
                    </div>
                </div>
            </motion.div>
        </div>
    )

}


export default Testimonials2;