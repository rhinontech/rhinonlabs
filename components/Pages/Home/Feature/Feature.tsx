'use client'
import { motion } from "framer-motion";


const featrues = [
    {
        img: "https://framerusercontent.com/images/DcZTJRkP9j3qoL7SfBczfMtFIW8.jpg?scale-down-to=1024",
        title: "No contracts, just design",
        sub: "Enjoy complete flexibility with no long-term commitments.",
    },
    {
        img: "https://framerusercontent.com/images/DcZTJRkP9j3qoL7SfBczfMtFIW8.jpg?scale-down-to=1024",
        title: "No contracts, just design",
        sub: "Enjoy complete flexibility with no long-term commitments.",
    },
    {
        img: "https://framerusercontent.com/images/DcZTJRkP9j3qoL7SfBczfMtFIW8.jpg?scale-down-to=1024",
        title: "No contracts, just design",
        sub: "Enjoy complete flexibility with no long-term commitments.",
    },
]

const Feature = () => {
    return (
        <div className="py-10 max-w-6xl max-md:px-3 mx-auto flex flex-col space-y-5">

            <div className="flex max-md:gap-5 max-md:flex-col justify-between gap-20">
                <h2 className="md:text-6xl text-4xl">Design <br /> Made Simple.</h2>
                <div className="flex md:justify-end md:items-end">
                    <p className="max-w-md md:ml-5">Get agency-quality design without the bloated costs, slow timelines, or endless back-and-forth. Just reliable, high-quality creative delivered on your terms.</p>
                </div>
            </div>

            {/* features */}

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                {featrues.map((featrue, index) => (
                    <motion.div
                        key={index}
                        className="h-[450px] max-md:h-[400px] relative overflow-hidden p-1"
                        initial={{ opacity: 0, y: 20}}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1*index }}
                        viewport={{ once: true, amount:0.5 }} // 👈 only animate on first view
                    >
                        <div
                            className={`absolute -z-1 inset-0 bg-cover bg-center blur-sm`}
                            style={{ backgroundImage: `url(${featrue.img})` }}
                        ></div>
                        <div
                            className=" z-20 flex h-full items-end bg-cover bg-center"
                            style={{ backgroundImage: `url(${featrue.img})` }}
                        >
                            <div className="w-full px-7 pb-7 flex flex-col gap-3">
                                <h2 className="font-semibold text-lg">{featrue.title}</h2>
                                <p>{featrue.sub}.</p>
                            </div>
                        </div>
                    </motion.div>
                ))}

            </div>

        </div>
    )

}


export default Feature;