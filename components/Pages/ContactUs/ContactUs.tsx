"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Textarea } from "@/components/ui/textarea";
import Faq from "../Home/Faq/Faq";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        projectType: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    service: formData.projectType,
                    message: formData.message,
                }),
            });

            if (res.ok) {
                setSuccess(true);
                setFormData({
                    name: "",
                    email: "",
                    company: "",
                    projectType: "",
                    message: "",
                });
            } else {
                setError("Failed to submit. Please try again.");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex flex-col ">
            <motion.div
                className="absolute inset-0 top-0 left-0 -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }} // 👈 only animate on first view
            >
                <div
                    className="[mask-image:linear-gradient(to_bottom,transparent,white_30%,white_60%,transparent)]
                        mask-mode:luminance"
                >
                    <img
                        src="/images/background/q3lzdr4u88731.jpg"
                        className="w-full h-full object-cover"
                        alt=""
                    />
                </div>
            </motion.div>
            <div>
                <div className=" pt-44 max-md:pt-20 px-5 pb-10 flex flex-col items-center gap-10 max-w-[1400] mx-auto">
                    <div className="flex flex-col gap-5 items-center">
                        <motion.p
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }} // 👈 only animate on first view
                        >
                            CONTACT
                        </motion.p>

                        <div className="flex flex-col gap-0">
                            <TextGenerateEffect
                                className="lg:text-7xl md:text-5xl text-4xl"
                                words={"Request a Discovery Call"}
                            />
                        </div>
                        <motion.p
                            className="text-center max-w-2xl text-lg text-white/80"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }} // 👈 only animate on first view
                        >
                            Tell us briefly about your internal tools or operational challenges. We'll respond within 24 hours.
                        </motion.p>
                    </div>
                    <motion.div
                        className="w-[700px] max-md:w-full p-5 bg-white/1 backdrop-blur-md border border-white/10 shadow-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }} // 👈 only animate on first view
                    >
                        {success ? (
                            <div className="text-center py-20">
                                <h3 className="text-2xl font-bold mb-4">Thank you!</h3>
                                <p>We've received your request and will be in touch shortly.</p>
                                <Button
                                    onClick={() => setSuccess(false)}
                                    className="mt-6 bg-white text-black hover:bg-gray-200"
                                >
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-5 text-lg"
                            >
                                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3">
                                    <div className="flex flex-col gap-3">
                                        <Label>NAME</Label>
                                        <Input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="px-3 py-6 rounded-none border border-white/10 bg-white/5 backdrop-blur-lg "
                                            placeholder="Jane Smith"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <Label>EMAIL</Label>
                                        <Input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="px-3 py-6 rounded-none border border-white/10 bg-white/5 backdrop-blur-lg  "
                                            placeholder="jane@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3">
                                    <div className="flex flex-col gap-3">
                                        <Label>COMPANY</Label>
                                        <Input
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="px-3 py-6 rounded-none border border-white/10 bg-white/5 backdrop-blur-lg "
                                            placeholder="Company Name"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Label>PROJECT TYPE</Label>
                                        <Input
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleChange}
                                            className="px-3 py-6 rounded-none border border-white/10 bg-white/5 backdrop-blur-lg  "
                                            placeholder="Dashboard, SaaS, Internal Tool..."
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <Label>MESSAGE</Label>
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="min-h-[150px] px-3 py-3 rounded-none border border-white/10 bg-white/5 backdrop-blur-lg  "
                                        placeholder="Tell us about your project goals..."
                                    />
                                </div>

                                {error && <p className="text-red-500 text-sm">{error}</p>}

                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="rounded-none py-6 font-semibold text-lg bg-white text-black hover:bg-gray-200"
                                >
                                    {loading ? "Sending..." : "Send Request"}
                                </Button>
                            </form>
                        )}
                    </motion.div>
                </div>
                <Faq />
            </div>
        </div>
    );
};

export default ContactUs;