'use client'
import { motion } from "framer-motion";
import { div } from "framer-motion/client";


const services = [
    "Figma design",
    "Framer development",
    "Landing Pages",
    "Figma design",
    "Framer development",
    "Landing Pages",
    "Figma design",
    "Framer development",
]

const card = [
    {
        img: "https://i.pinimg.com/1200x/01/51/01/015101cfe267c0121d3090cb7c50c3e2.jpg",
        title: "Equinox",
        sub: "Web design",
    },
    {
        img: "https://i.pinimg.com/1200x/01/51/01/015101cfe267c0121d3090cb7c50c3e2.jpg",
        title: "Equox",
        sub: "Web design",
    },
]

const Testimonials2 = () => {
    return (
        <div className="py-10 lg:w-6xl max-md:px-3 px-5 mx-auto flex flex-col space-y-10">

            <div className="flex flex-col justify-center items-center gap-10">
                <div className="flex flex-col gap-3">
                    <p className="text-center w-full">Testimonials</p>
                    <h2 className="text-center w-full text-7xl max-md:text-5xl max-sm:text-3xl">What We Work On</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
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
                viewport={{ once: true, amount:0.4 }}
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

        </div>
    )

}


export default Testimonials2;