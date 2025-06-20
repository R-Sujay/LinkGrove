import React from "react";
import { TestimonialsColumn } from "@/components/TestimonialColumn";
import { AnimatedGroup } from "./AnimatedGroup";

const testimonials = [
  {
    text: "LinkGrove transformed how I connect with my audience. Everything I want to share is now just one smart link away.",
    name: "Emily Hart",
    role: "Lifestyle Blogger",
    rating: 5,
  },
  {
    text: "Super clean interface, easy setup, and powerful analytics. LinkGrove has become essential for my personal brand.",
    name: "Jason Rivera",
    role: "Personal Branding Coach",
    rating: 5,
  },
  {
    text: "As a creator, LinkGrove lets me manage everything from one link—merch, videos, tips, and more. Love it!",
    name: "Natalie Singh",
    role: "Content Creator",
    rating: 5,
  },
  {
    text: "I recommend LinkGrove to every entrepreneur I know. It’s streamlined how I share updates and promote my products.",
    name: "Malik Thompson",
    role: "Startup Founder",
    rating: 5,
  },
  {
    text: "From event links to booking forms, LinkGrove handles it all. The interface is sleek and so easy to customize.",
    name: "Aisha Delgado",
    role: "Event Manager",
    rating: 5,
  },
  {
    text: "I switched from another platform to LinkGrove, and the difference is night and day. It’s faster, smarter, and looks better.",
    name: "Chloe Bennett",
    role: "Creative Strategist",
    rating: 5,
  },
  {
    text: "LinkGrove helped us increase click-throughs on social media by over 40%. It’s the one tool I recommend to all our clients.",
    name: "Daniel Park",
    role: "Marketing Consultant",
    rating: 5,
  },
  {
    text: "Finally, a link-in-bio tool that just works. LinkGrove makes my music, merch, and socials easy to find in one tap.",
    name: "Jasmine Moore",
    role: "Musician",
    rating: 5,
  },
  {
    text: "I use LinkGrove for all my campaign landing pages. It’s modern, fast, and delivers results every time.",
    name: "Luca Romano",
    role: "Digital Campaign Manager",
    rating: 5,
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

function Testimonial() {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Loved by{" "}
            <span className="relative bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent z-50 bg-black">
              Creators
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-semibold">
            See what our users are saying about LinkGrove
          </p>
        </div>

        <AnimatedGroup
          duration={3}
          onScroll
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </AnimatedGroup>
      </div>
    </section>
  );
}

export default Testimonial;
