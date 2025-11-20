"use client";

import React, { useRef } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className=" flex justify-center max-w-7xl w-full items-start mx-auto"
    >
      <div className="py-20 px-10 gap-10 w-full flex flex-col items-center text-center">
        <section className="px-8 max-w-4xl">
          <div className="">
            {/* Label */}
            <div className="mb-6">
              <span className="text-sm font-semibold tracking-widest text-white/80">
                Let’s Build Something Powerful
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-6xl md:text-7xl font-light mb-6 leading-tight">
              Custom Proposals
            </h1>

            {/* Description */}
            <p className="text-lg text-white/80 mb-12 font-normal">
              Every project is unique — from small internal tools to large
              multi-role enterprise systems. Instead of fixed subscription
              plans, we provide custom proposals based on your scope,
              timeline, and complexity.
            </p>

            {/* CTA Button */}
            <div className="mb-12">
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-base font-semibold rounded">
                Start a Project →
              </Button>
              <p className="mt-4 text-sm text-white/60">Our team will reach out within 24 hours.</p>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-4">
              {/* Avatar Stack */}
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-black flex items-center justify-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/1.jpg"
                    alt="User 1"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-black flex items-center justify-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/2.jpg"
                    alt="User 2"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-black flex items-center justify-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/3.jpg"
                    alt="User 3"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Rating & Trust Text */}
              <div className="flex flex-col gap-2 text-left">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-white text-white" />
                  ))}
                </div>
                <span className="text-white/70 text-sm">
                  Trusted by 36+ businesses
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
