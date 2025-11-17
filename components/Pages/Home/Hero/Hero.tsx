import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

import Photos from './PhotosCrauser'
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Hero = () => {
    return (
        <div className="overflow-hidden" >
            <div className="
                absolute inset-0
                top-64
                -z-10
            ">
                <div className="[mask-image:linear-gradient(to_bottom,transparent,white_30%,white_60%,transparent)]
                mask-mode:luminance">
                    <img src="https://framerusercontent.com/images/oEeFUDDyOcLHiBBci1NNXPxqE.jpg?scale-down-to=2048" className="w-full h-full object-cover" alt="" />
                </div>
            </div>
            <div className=" pt-44 px-5 pb-10 flex flex-col gap-10 max-w-4xl mx-auto" >
                <div className="flex flex-col gap-5 items-center">
                    <p className="text-center">Your Design Agency Template</p>

                    <div className="flex flex-col gap-0">
                        <TextGenerateEffect words={"No-Contract"} />
                        <TextGenerateEffect words={"Design Subscription"} />
                    </div>
                    <p className="text-center max-w-2xl text-lg text-white/80">Altair delivers top-tier design services through a simple subscription model. No contracts, no hidden fees – just consistent, high-quality design.</p>
                </div>
                <div className="flex justify-center gap-10">
                    <div className="">
                        <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-base font-semibold rounded-none border-3 border-black/30">
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
            <div className="  flex justify-between px-5 gap-10 max-w-4xl mx-auto" >
                <span>Latest Project</span>
                <span>2024 - 2025</span>

            </div>

            <Photos />
        </div>
    );
}

export default Hero;