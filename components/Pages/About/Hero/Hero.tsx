import { Button } from "@/components/ui/button"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { Star } from "lucide-react"

const Hero = () => {
    return (
        <div className=" pt-44 px-5 pb-10 flex flex-col gap-20 max-w-[1200px] mx-auto" >

            {/* Header */}
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-5 items-center">
                    <p className="text-center">ABOUT</p>

                    <div className="flex w-fit text-center">
                        <TextGenerateEffect className="font-semibold" words={"Learn More About Rhinon"} />
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

            {/* Trusted by */}
            <div className=" flex h-24 border-t-1">
                <div className="flex items-center w-28 border-t border-white  mr-10">
                    <p className="">
                        TRUSTED BY
                    </p>
                </div>
                <div className="flex items-center justify-center w-full overflow-hidden">
                    <div className="relative w-full mt-2 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ">
                        <ul className="flex w-fit gap-[0.5rem] animate-scroll">
                            <div className="flex gap-10 px-5">
                                <div className="px-3 py-4 text-xl flex items-center">Hello</div>
                                <div className="px-3 py-4 text-xl flex items-center">Hello</div>
                                <div className="px-3 py-4 text-xl flex items-center">Hello</div>
                                <div className="px-3 py-4 text-xl flex items-center">Hello</div>
                                <div className="px-3 py-4 text-xl flex items-center">Hello</div>
                                <div className="px-3 py-4 text-xl flex items-center">Hello</div>
                                <div className="px-3 py-4 text-xl flex items-center">Hello</div>
                                <div className="px-3 py-4 text-xl flex items-center">Hello</div>
                                <div className="px-3 py-4 text-xl flex items-center">Hello</div>
                                <div className="px-3 py-4 text-xl flex items-center">Hello</div>
                            </div>
                            <div className="flex gap-10 px-5">
                                <div className="px-3 py-4 text-xl flex items-center">Hello</div>
                                <div className="px-3 py-4 text-xl flex items-center">Hello</div>
                                <div className="px-3 py-4 text-xl flex items-center">Hello</div>
                                <div className="px-3 py-4 text-xl flex items-center">Hello</div>
                                <div className="px-3 py-4 text-xl flex items-center">Hello</div>
                                <div className="px-3 py-4 text-xl flex items-center">Hello</div>
                                <div className="px-3 py-4 text-xl flex items-center">Hello</div>
                                <div className="px-3 py-4 text-xl flex items-center">Hello</div>
                                <div className="px-3 py-4 text-xl flex items-center">Hello</div>
                                <div className="px-3 py-4 text-xl flex items-center">Hello</div>
                            </div>





                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Hero;