import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Star } from "lucide-react";
import Hero from "./Hero/Hero";
import AboutUs from "./AboutUs/AboutUs";
import Team from "./Team/Team";
import Statics from "./Statics/Statics";


const About = () => {
    return (
        <div className="relative flex flex-col ">
            <div className="absolute inset-0 top-0 left-0 -z-10">
                <div className="[mask-image:linear-gradient(to_bottom,transparent,white_30%,white_60%,transparent)]
                        mask-mode:luminance">
                    <img src="https://framerusercontent.com/images/VeiBx4I8kxeohO3NysSUJ3HNiN8.jpg?scale-down-to=2048" className="w-full h-full object-cover" alt="" />
                </div>
            </div>
            <div className="">
                <Hero />
                <AboutUs />
                <Team />
                <Statics />

            </div>

        </div>

    )
}

export default About;