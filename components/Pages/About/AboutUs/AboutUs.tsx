'use client'
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { motion } from 'framer-motion'

const AboutUs = () => {
    return (
        <div className="flex items-center flex-col py-20 px-5 gap-20">
            {/* Header */}
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-5 items-center">
                    <p className="text-center">ABOUT</p>

                    <div className="flex w-fit text-center">
                        <h2 className="lg:text-7xl md:text-5xl text-3xl">Design, Simplified</h2>
                    </div>
                    <p className="text-center max-w-2xl text-lg text-white/80">Altair delivers top-tier design services through a simple subscription model. No contracts, no hidden fees – just consistent, high-quality design.</p>
                </div>
                <div className="flex items-center max-md:gap-5 max-md:flex-col justify-center gap-10">
                    <div className="">
                        <Button className="bg-white text-black hover:bg-gray-200 px-6 py-6 text-base font-semibold rounded-none border-3 border-black/30">
                            Get Started
                        </Button>
                    </div>

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
                            <span className="text-white/70 text-sm">Trusted by 36+ businesses</span>
                        </div>
                    </div>
                </div>
            </div>
            <motion.div
                className=" relative flex h-[85vh] w-[80vw] max-md:h-[60vh]  items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", }}
                viewport={{ once: true, amount:0.4 }} // 👈 only animate on first view
            >
                <div className="absolute inset-0 -z-10">

                    <img src="https://i.pinimg.com/1200x/a3/51/30/a35130edc8113b0b747ed58f84fa3f8c.jpg" className="w-full h-full opacity-50 object-cover" alt="" />

                </div>

                <h2 className="font-bold text-xl">Rhinon</h2>

            </motion.div>


        </div>
    )
}

export default AboutUs;