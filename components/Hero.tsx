import React from "react";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TextEffect } from "@/components/TextEffect";
import { AnimatedGroup } from "@/components/AnimatedGroup";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

function Hero() {
  return (
    <section className="py-20 max-w-7xl mx-auto flex lg:py-32">
      <div className="flex flex-col justify-center pr-10">
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  delayChildren: 0,
                  staggerChildren: 0.1,
                },
              },
            },
            ...transitionVariants,
          }}
        >
          <h1 className="text-xl font-poppins lg:text-[88px] font-bold text-gray-900 leading-28">
            One <LineShadowText shadowColor="black">Link</LineShadowText>,
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent z-50">
              Infinite{" "}
              <span className="relative bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text italic text-transparent z-50 bg-black">
                Possibilities
                <span className="absolute left-0 -z-50">
                  <LineShadowText>Possibilities</LineShadowText>
                </span>
              </span>
            </span>
          </h1>

          <TextEffect
            per="line"
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0}
            as="p"
            className="text-xl pt-5 lg:text-xl text-gray-600 font-poppins font-semibold max-w-2xl leading-relaxed"
          >
            Create a beautiful, customizable link-in-bio page that showcases all
            your important links. Perfect for creators, businesses, and anyone
            who wants to share multiple links effortlessly.
          </TextEffect>
          <div className="pt-5 mb-2">
            <p className="text-sm text-gray-500 mb-2">
              Trusted by 10,000+ creators worldwide
            </p>
            <div className="flex gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">Creator</div>
              <div className="text-2xl font-bold text-gray-400">Business</div>
              <div className="text-2xl font-bold text-gray-400">Influencer</div>
              <div className="text-2xl font-bold text-gray-400">Artist</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 justify-start items-center pt-5">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 h-auto rounded-full"
            >
              <Link
                href="/dashboard"
                className="flex justify-center items-center gap-2"
              >
                <span className="text-lg font-poppins font-extrabold">
                  Start Building Free
                </span>
                <ArrowRight className="" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="px-6 py-3 h-auto rounded-full bg-blue-950"
            >
              <Link href="#features" className="flex items-center gap-2">
                <span className="text-lg font-poppins font-extrabold">
                  See How It Works
                </span>
              </Link>
            </Button>
          </div>
        </AnimatedGroup>
      </div>

      <AnimatedGroup
        variants={{
          container: {
            visible: {
              transition: {
                staggerChildren: 0.02,
                delayChildren: 0,
              },
            },
          },
          ...transitionVariants,
        }}
        className="flex-1 flex justify-center items-center"
      >
        <div className="w-full">
          <Image
            src="/heroImage.svg"
            alt="Hero Image"
            width={600}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>
      </AnimatedGroup>
    </section>
  );
}

export default Hero;
