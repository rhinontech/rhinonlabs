'use client'
import { useRef } from "react";
import ScrollBeam from "./ScrollBeam";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Process() {

    const ref1 = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);


    //   // Track scroll progress for this element
    //   const { scrollYProgress } = useScroll({
    //     target: ref1,
    //     offset: ["start center", "end center"], 
    //     // "start center" → when top of element hits center of screen
    //     // "end center"   → when bottom of element hits center of screen
    //   });

    //   // Interpolate color between two values based on scroll position
    //   const backgroundColor = useTransform(
    //   scrollYProgress,
    //   [0, 1],
    //   ["#0f172a", "#ffffff"] // slate-900 → white
    // );
    const bg1 = useTransform(useScroll({ target: ref1, offset: ["start center", "end center"] }).scrollYProgress, [0, 1], ["#0f172a", "#ffffff"]);
    const bg2 = useTransform(useScroll({ target: ref2, offset: ["start center", "end center"] }).scrollYProgress, [0, 1], ["#0f172a", "#ffffff"]);

    return (
        <div className="px-10 py-20 flex max-w-5xl mx-auto flex-col">
            {/* header */}
            <div className="flex flex-col space-y-5">
                <p>Process</p>
                <h2 className="text-7xl ">Get Started In <br />
                    Three Simple Steps...</h2>
                <p>Design as you know it is out the door. Design as you want it just arrived.</p>
            </div>
            {/* steps */}

            <div className="flex flex-col gap-5  mt-20">
                <div className="flex ">
                    {/* Beam div */}
                    <div className="flex flex-col gap-3 justify-center items-center">
                        <div className="h-4 w-4 rounded-full bg-white"></div>
                        <ScrollBeam />
                    </div>
                    {/* content */}
                    <div className="py-5 pl-5 flex-1">
                        <div className="flex flex-col gap-5">
                            <div className="flex">
                                <div className="flex flex-col flex-1 space-y-2">
                                    <h2 className="text-2xl">Subscribe</h2>
                                    <p>Pick a plan and start requesting designs.</p>
                                </div>
                                <div className="relative flex justify-end items-end w-[100px]">
                                    <div className="w-fit border-2 px-3 py-1 rounded-3xl ">Step 1</div>
                                </div>
                            </div>
                            <div className="h-[350px] border-2 w-full bg-[url('https://framerusercontent.com/images/DcZTJRkP9j3qoL7SfBczfMtFIW8.jpg?scale-down-to=1024')] bg-cover bg-center">

                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex ">
                    {/* Beam div */}
                    <div className="flex flex-col gap-3 justify-center items-center">
                        <motion.div ref={ref1} className={`h-4 w-4 rounded-full `} style={{ backgroundColor: bg1, }}></motion.div>
                        <ScrollBeam />
                    </div>
                    {/* content */}
                    <div className="py-5 pl-5 flex-1">
                        <div className="flex flex-col gap-5">
                            <div className="flex">
                                <div className="flex flex-col flex-1 space-y-2">
                                    <h2 className="text-2xl">
                                        Request</h2>
                                    <p>Pick a plan and start requesting designs.</p>

                                </div>
                                <div className="relative flex justify-end items-end w-[100px]">
                                    <div className="w-fit border-2 px-3 py-1 rounded-3xl ">Step 2</div>
                                </div>
                            </div>
                            <div className="h-[350px] border-2 w-full bg-[url('https://framerusercontent.com/images/PMOGbWVPZGHW2SXHVlvSSRzV1I.jpg?scale-down-to=1024')] bg-cover bg-center">

                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex ">
                    {/* Beam div */}
                    <div className="flex flex-col gap-3 justify-center items-center">
                        <motion.div ref={ref2} className={`h-4 w-4 rounded-full `} style={{ backgroundColor: bg2, }}></motion.div>
                        <ScrollBeam />
                    </div>
                    {/* content */}
                    <div className="py-5 pl-5 flex-1">
                        <div className="flex flex-col gap-5">
                            <div className="flex">
                                <div className="flex flex-col flex-1 space-y-2">
                                    <h2 className="text-2xl">Approve or revise</h2>
                                    <p>Pick a plan and start requesting designs.</p>

                                </div>
                                <div className="relative flex justify-end items-end w-[100px]">
                                    <div className="w-fit border-2 px-3 py-1 rounded-3xl ">Step 3</div>
                                </div>
                            </div>
                            <div className="h-[350px] border-2 w-full bg-[url('https://framerusercontent.com/images/xzHG8YC7yglvNRshvKTUEYEJEBk.jpg?scale-down-to=1024')] bg-cover bg-center">

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}