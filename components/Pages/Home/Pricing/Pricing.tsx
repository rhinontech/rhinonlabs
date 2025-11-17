"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const features = [
  { name: 'One request at a time', included: true },
  { name: 'Unlimited revisions', included: true },
  { name: 'Fast 2-3 day turnaround', included: true },
  { name: 'Pause or cancel anytime', included: true },
  { name: 'Slack & email communication', included: true },
  { name: 'Ideal for landing pages, graphics, decks & more', included: true },
  { name: 'Framer development', included: false },
]

export default function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress (0–1) → position (sticky 0px to released)
  const y = useTransform(scrollYProgress, [0, 0.8, 1], ["0%", "0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className=" flex justify-center w-7xl items-start mx-auto"
    >
      <div ref={scrollRef} className="flex py-20 px-10 gap-10 w-full">
        {/* Yellow sticky box */}
        <motion.div
          style={{
            position: "sticky",
            top: "150px",

          }}
          className="h-fit flex items-center justify-center font-semibold"
        >
          <section className="px-8">
            <div className="">
              {/* Label */}
              <div className="mb-6">
                <span className="text-sm font-semibold tracking-widest text-white/80">PRICING</span>
              </div>

              {/* Heading */}
              <h1 className="text-6xl md:text-7xl font-light mb-6 leading-tight">
                Pricing Plans
              </h1>

              {/* Description */}
              <p className="text-lg text-white/80 mb-12 font-normal max-w-lg">
                Choose the plan that fits your pace — whether you need consistent creative output or just a few design requests here and there.
              </p>

              {/* CTA Button */}
              <div className="mb-12">
                <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-base font-semibold rounded">
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
          </section>
        </motion.div>

        {/* Scrolling content */}
        <div className="flex w-[55%] flex-col gap-10">
          {/* design */}
          <div className="w-full border-2 p-8">
            {/* Header with Badge */}
            <div className="flex items-start justify-between mb-2">
              <h2 className="text-3xl font-semibold ">Design</h2>
              <div className="flex items-center gap-2 bg-green-900 bg-opacity-20 px-3 py-1 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm font-medium text-green-400">Available</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-5">
              Perfect for teams that need quality design.
            </p>

            {/* Price */}
            <div className="mb-5">
              <div className="flex items-center gap-2 ">
                <div>
                  <span className="text-3xl font-semibold text-white">$2,490</span>
                </div>
                <div className="flex items-center w-full h-full">
                  <span className="text-gray-400 text-sm">/ month</span>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-gray-300 tracking-widest mb-4">
                WHAT'S INCLUDED
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-3 text-gray-200' : 'text-gray-600'`}
                  >
                    <div className={`rounded-full p-[1px] ${feature.included ? 'bg-white' : 'bg-white/70'
                      } `}>
                      {feature.included ? (
                        <Check className="w-3 h-3 text-black flex-shrink-0" />
                      ) : (
                        <X className="w-3 h-3 text-gray-600 flex-shrink-0" />
                      )}
                    </div>
                    <span className="text-sm">{feature.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-white text-black font-semibold py-4 px-4 rounded mb-6 hover:bg-gray-100 transition">
              Get Started
            </button>

            {/* Footer */}
            <p className="text-center text-gray-400">
              Got questions?{' '}
              <a href="#" className="text-white underline hover:no-underline">
                Book a call
              </a>
            </p>
          </div>

          {/* Design + dev */}
          <div className="w-full bg-white border-2 p-8">
            {/* Header with Badge */}
            <div className="flex items-start justify-between mb-2">
              <h2 className="text-3xl text-black font-semibold ">Design + Dev</h2>
              <div className="flex items-center gap-2 bg-green-900 bg-opacity-20 px-3 py-1 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm font-medium text-green-400">Available</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-black/80 mb-5">
              Perfect for teams that need quality design.
            </p>

            {/* Price */}
            <div className="mb-5">
              <div className="flex items-center gap-2 ">
                <div>
                  <span className="text-3xl font-semibold text-black">$2,490</span>
                </div>
                <div className="flex items-center w-full h-full">
                  <span className="text-black/50 text-sm">/ month</span>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-black/80 tracking-widest mb-4">
                WHAT'S INCLUDED
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-3 `}
                  >
                    <div className={`rounded-full p-[1px] bg-black`}>

                      <Check className="w-3 h-3 text-white flex-shrink-0" />



                    </div>
                    <span className="text-sm text-black/70">{feature.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-black text-white font-semibold py-4 px-4 rounded mb-6 hover:bg-black/50 transition">
              Get Started
            </button>

            {/* Footer */}
            <p className="text-center text-black/50">
              Got questions?{' '}
              <a href="#" className="text-black underline hover:no-underline">
                Book a call
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
