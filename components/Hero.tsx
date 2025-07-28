import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatedGroup } from "@/components/AnimatedGroup";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section className="py-10 max-w-7xl mx-auto flex flex-col xl:flex-row xl:py-32 px-4 sm:px-6 xl:px-8">
      <div className="flex flex-col justify-center items-center text-center xl:pr-10 xl:items-start xl:text-left">
        <AnimatedGroup duration={1.5}>
          <h1 className="text-4xl font-satoshi sm:text-5xl md:text-6xl lg:text-[88px] font-bold text-gray-900 leading-tight lg:leading-28">
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

          <p className="text-base pt-5 sm:text-lg md:text-xl text-gray-600 font-satoshi font-semibold max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Create a beautiful, customizable link-in-bio page that showcases all
            your important links. Perfect for creators, businesses, and anyone
            who wants to share multiple links effortlessly.
          </p>
          <div className="pt-5 mb-2">
            <p className="text-sm text-gray-500 mb-2">
              Trusted by 10,000+ creators worldwide
            </p>

            <div className="hidden sm:flex gap-8 justify-center xl:justify-start opacity-60">
              <div className="text-xl font-bold text-gray-400 sm:text-2xl">
                Creator
              </div>
              <div className="text-xl font-bold text-gray-400 sm:text-2xl">
                Business
              </div>
              <div className="text-xl font-bold text-gray-400 sm:text-2xl">
                Influencer
              </div>
              <div className="text-xl font-bold text-gray-400 sm:text-2xl">
                Artist
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center pt-5 xl:justify-start">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 h-auto rounded-full"
            >
              <Link
                href="/dashboard"
                className="flex justify-center items-center gap-2"
              >
                <span className="text-lg font-satoshi font-extrabold">
                  Start Building Free
                </span>
                <ArrowRight className="" />
              </Link>
            </Button>
            <InteractiveHoverButton className="px-6 py-3 h-auto rounded-full">
              <Link href="#features" className="flex items-center gap-2">
                <span className="text-lg font-satoshi font-extrabold">
                  See How It Works
                </span>
              </Link>
            </InteractiveHoverButton>
          </div>
        </AnimatedGroup>
      </div>
      <AnimatedGroup
        duration={1.5}
        className="hidden xl:flex flex-1 justify-center items-center mt-8 lg:mt-0"
      >
        <div className="w-full max-w-lg">
          <HeroImage />
        </div>
      </AnimatedGroup>
    </section>
  );
}

export default Hero;
