'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Textarea } from "@/components/ui/textarea";
import Faq from "../Home/Faq/Faq";
import { motion } from 'framer-motion'


const ContactUs = () => {
    return (
        <div className="relative flex flex-col ">
            <motion.div
                className="absolute inset-0 top-0 left-0 -z-10"
                initial={{ opacity: 0, }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }} // 👈 only animate on first view
            >
                <div className="[mask-image:linear-gradient(to_bottom,transparent,white_30%,white_60%,transparent)]
                        mask-mode:luminance">
                    <img src="https://framerusercontent.com/images/VeiBx4I8kxeohO3NysSUJ3HNiN8.jpg?scale-down-to=2048" className="w-full h-full object-cover" alt="" />
                </div>
            </motion.div>
            <div>
                <div className=" pt-44 max-md:pt-20 px-5 pb-10 flex flex-col items-center gap-10 max-w-[1400] mx-auto" >
                    <div className="flex flex-col gap-5 items-center">
                        <motion.p
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }} // 👈 only animate on first view
                        >CONTACT</motion.p>

                        <div className="flex flex-col gap-0">
                            <TextGenerateEffect className="lg:text-7xl md:text-5xl text-4xl" words={"Let’s Talk More"} />

                        </div>
                        <motion.p
                            className="text-center max-w-2xl text-lg text-white/80"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }} // 👈 only animate on first view
                        >Book your free consultation to discuss your project.</motion.p>
                    </div>
                    <motion.div
                        className="w-[700px] max-md:w-full p-5 bg-white/1 backdrop-blur-md border border-white/10 shadow-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }} // 👈 only animate on first view
                    >
                        <form className="flex flex-col gap-5 text-lg">
                            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3">
                                <div className="flex flex-col gap-3">
                                    <Label>NAME</Label>
                                    <Input
                                        className="px-3 py-6 rounded-none border border-white/10 bg-white/5 backdrop-blur-lg "
                                        placeholder="Jane Smith"
                                    />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <Label>EMAIL</Label>
                                    <Input
                                        className="px-3 py-6 rounded-none border border-white/10 bg-white/5 backdrop-blur-lg  "
                                        placeholder="jane@example.com"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <Label>SUBJECT</Label>
                                <Input
                                    className="px-3 py-6 rounded-none border border-white/10 bg-white/5 backdrop-blur-lg  "
                                    placeholder="What your query is about..."
                                />
                            </div>

                            <div className="flex flex-col gap-3">
                                <Label>MESSAGE</Label>
                                <Textarea
                                    className="min-h-[150px] px-3 py-3 rounded-none border border-white/10 bg-white/5 backdrop-blur-lg  "
                                    placeholder="Enter your message..."
                                />
                            </div>

                            <Button type="submit" className="rounded-none py-6 font-semibold text-lg">
                                Submit
                            </Button>
                        </form>
                    </motion.div>
                </div>
                <Faq />

            </div>

        </div>
    )
}

export default ContactUs;