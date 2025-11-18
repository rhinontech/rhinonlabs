import { Button } from "@/components/ui/button";
import { div } from "framer-motion/client";
import type { LucideIcon } from "lucide-react";
import { Facebook, Linkedin, Star, Twitter } from "lucide-react";
import Link from "next/link";



interface NavLinks {
    title: string;
    href: string;
}
export type SocialLink = {
    icon: LucideIcon;
    href: string;
};

const navLinks: NavLinks[] = [
    { title: "Home", href: "#" },
    { title: "Portfolio", href: "#" },
    { title: "About", href: "#" },
    { title: "Contact", href: "#" },
]

const socialLinks: SocialLink[] = [
    { icon: Twitter, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Linkedin, href: "#" },

]

const Footer = () => {
    return (
        <div className="[mask-image:linear-gradient(to_bottom,transparent_0%,white_30%,white_100%)]
                mask-mode:luminance">
            <div className="bg-[url('https://framerusercontent.com/images/OtnmdtGgpJnjSFqMANBQ2epErk.jpg?scale-down-to=2048')] bg-cover bg-center">
    
                <div className=" max-w-6xl flex flex-col gap-16 pt-40 mx-auto pb-16 px-5">

                    {/* Header */}
                    <div className="flex flex-col gap-5">
                        <p>Get started</p>
                        <h2 className="text-7xl">Still Not Sure <br />
                            If It’s Right For You?</h2>
                        <div className="flex mt-5 gap-10">
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

                    {/* Links */}
                    <div className="flex w-fit flex-col gap-5">
                        <h2 className="text-2xl font-semibold">Links</h2>
                        <div className="flex gap-5">
                            {navLinks.map((link, index) => (
                                <Link key={index} href={link.href} className="text-white/70">{link.title}</Link>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex w-fit flex-col gap-5">
                        <h2 className="text-2xl font-semibold">Rhinon</h2>
                        <p className="text-white/80">No-contract design subscription.</p>
                        <div className="flex gap-5">
                            {socialLinks.map((sl, index) => (
                                <div className="h-10 w-10 border-2 hover:bg-amber-600 transition-color duration-300 rounded-full flex items-center justify-center">
                                    <sl.icon fill="white" className="h-4 w-4" />
                                </div>
                            ))}

                        </div>

                    </div>




                </div>

            </div>
            <div className="py-10 border-t-2">
                <div className="max-w-6xl mx-auto">
                    <p className="text-white/80">© 2025 Wize. All rights reserved.</p>
                </div>
            </div>
        </div>
    )

}

export default Footer;