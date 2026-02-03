"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

export type Testimonial = {
  text: string;
  authorImg: string;
  authorName: string;
  authorPost: string;
};
export const testimonials: Testimonial[] = [
  {
    text: "Cut our weekly reporting time from 4 hours down to 15 minutes. Our ops team actually logs in daily now instead of avoiding it. 3-week turnaround from kickoff to deployment.",
    authorImg: "https://randomuser.me/api/portraits/women/44.jpg",
    authorName: "Rachel Kim",
    authorPost: "Director of Operations, FinTech",
  },
  {
    text: "We had 5 different tools and spreadsheets just to track customer onboarding. Now it's one dashboard. Eliminated about 2,000 manual data entries per month.",
    authorImg: "https://randomuser.me/api/portraits/men/32.jpg",
    authorName: "David Patel",
    authorPost: "Head of Customer Success, SaaS",
  },
  {
    text: "Our internal admin panel kept timing out once we hit 100+ users. They rebuilt it in 4 weeks and it handles 500+ without breaking a sweat. Should've called them 6 months earlier.",
    authorImg: "https://randomuser.me/api/portraits/men/67.jpg",
    authorName: "Marcus Chen",
    authorPost: "VP Engineering, B2B Platform",
  },
  {
    text: "Honestly thought we'd have to hire 2 more people to manage our workflow chaos. Instead, Rhinon automated the whole thing. Paid for itself in the first quarter.",
    authorImg: "https://randomuser.me/api/portraits/women/68.jpg",
    authorName: "Jennifer Rodriguez",
    authorPost: "COO, Healthcare Tech",
  },
  {
    text: "They actually listened to what our team needed, not what they wanted to build. The final dashboard looks nothing like their initial mockup — and that's exactly why it works so well for us.",
    authorImg: "https://randomuser.me/api/portraits/men/52.jpg",
    authorName: "Tom Andersen",
    authorPost: "Product Lead, Logistics SaaS",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 relative flex flex-col items-center justify-center">
      <motion.div
        className="absolute inset-0 px-40 py-20 max-md:px-0 max-md:py-0 max-md:top-44 -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div
          className="mask-[linear-gradient(to_right,transparent,white_30%,white_60%,transparent)]
                mask-mode:luminance"
        >
          <img
            src="https://framerusercontent.com/images/Bg0xEtEQPRSX3REmgymLtrsMUQM.jpg?scale-down-to=2048"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </motion.div>
      <div className="flex flex-col gap-3">
        <p className="text-center w-full">Testimonials</p>
        <h2 className="text-center w-full text-7xl max-md:text-5xl max-sm:text-3xl">
          See what our clients are saying
        </h2>
        <p className="text-center text-white/60 text-sm italic mt-2 max-w-2xl mx-auto">
          Real feedback from our clients who've built with us
        </p>
      </div>
      <div className="relative w-full mt-[340px] max-md:mt-[200px] overflow-hidden ">
        <ul className="flex w-fit gap-2 animate-scroll">
          {[...testimonials, ...testimonials].map((test, index) => (
            <div key={index} className="border-2 p-0.5 w-[350px] h-[300px]">
              <div className="bg-card w-full h-full p-7 flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <div className="flex">
                    <Star fill="white" className="h-3 w-3" />
                    <Star fill="white" className="h-3 w-3" />
                    <Star fill="white" className="h-3 w-3" />
                    <Star fill="white" className="h-3 w-3" />
                    <Star fill="white" className="h-3 w-3" />
                  </div>
                  <p>{test.text}</p>
                </div>
                <div className="flex">
                  {/* img */}
                  <div className=" overflow-hidden rounded-full mr-3">
                    <img src={test.authorImg} alt="" height={50} width={50} />
                  </div>
                  <div className="flex flex-col flex-1">
                    <h2>{test.authorName}</h2>
                    <p>{test.authorPost}</p>
                  </div>
                  <div className="pl-5 flex items-center">
                    <img
                      src="https://framerusercontent.com/images/igKvrrUwUNpWCRQ7HMZUis6Jw.png"
                      height={20}
                      width={20}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
