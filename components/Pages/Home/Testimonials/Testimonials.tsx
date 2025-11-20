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
    text: "Rhinon Web transformed our internal dashboard into a seamless system. Our team adoption skyrocketed.",
    authorImg: "https://randomuser.me/api/portraits/women/1.jpg",
    authorName: "Sarah Thompson",
    authorPost: "Enterprise Product Lead",
  },
  {
    text: "They understood our workflows better than we did. The final product was beyond expectations.",
    authorImg: "https://randomuser.me/api/portraits/men/2.jpg",
    authorName: "James Anderson",
    authorPost: "Director of Operations",
  },
  {
    text: "The speed, efficiency, and attention to detail were unmatched.",
    authorImg: "https://randomuser.me/api/portraits/men/2.jpg",
    authorName: "James Anderson",
    authorPost: "Head of Engineering",
  },
];
const Testimonials = () => {
  return (
    <div className="py-20 relative flex flex-col items-center justify-center">
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
          See What Others Say
        </h2>
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
    </div>
  );
};

export default Testimonials;
