"use client";

import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

type TestimonialProps = {
  className?: string;
  testimonials: {
    text: string;
    image: string;
    name: string;
    role: string;
    rating: number;
  }[];
  duration?: number;
};

export const TestimonialsColumn = (props: TestimonialProps) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          y: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(
                ({ text, image, name, role, rating }, i) => (
                  <div
                    className="p-10 pt-8 rounded-3xl shadow-2xl lg shadow-primary/15 max-w-xs w-full"
                    key={i}
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <div>{text}</div>
                    <div className="flex items-center gap-2 mt-5">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={name}
                        className="h-10 w-10 rounded-full"
                      />
                      <div className="flex flex-col">
                        <div className="font-medium tracking-tight leading-5">
                          {name}
                        </div>
                        <div className="leading-5 opacity-60 tracking-tight">
                          {role}
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
