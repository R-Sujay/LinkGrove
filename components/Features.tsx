import React from "react";
import {
  BarChart3,
  Palette,
  Shield,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";
import { AnimatedGroup } from "@/components/AnimatedGroup";

function Features() {
  return (
    <section id="features" className="px-4 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Everything You{" "}
            <span className="relative bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent z-50 bg-black">
              Need
            </span>
          </h2>
          <p className="text-xl font-semibold text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you share your content and grow
            your audience
          </p>
        </div>
        <AnimatedGroup
          onScroll
          duration={1.8}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-20"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm shadow-xs rounded-2xl hover:shadow-2xl transition-all duration-500 relative text-center group border-[0.1px] h-full lg:hover:scale-110"
            >
              <div className="text-purple-600 mb-4 absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white p-5 border rounded-full shadow-lg group-hover:bg-purple-600 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <div className="h-full relative z-50 overflow-hidden pt-12 p-8 rounded-2xl">
                <h3 className="text-xl font-black text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-bold leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute rotate-[38deg] group-hover:-bottom-10 group-hover:-left-16 -left-30 -bottom-20 bg-purple-50 w-1/2 -z-10 h-20 transition-all duration-500" />
              </div>
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}

export default Features;

const features = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Fully Customizable",
    description:
      "Make your link page uniquely yours with custom themes, colors, and layouts that match your brand.",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Advanced Analytics",
    description:
      "Track clicks, understand your audience, and optimize your content with detailed insights and reports.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Optimized",
    description:
      "Your link page looks perfect on every device, from desktop computers to mobile phones.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description:
      "Optimized for speed with instant loading times and seamless user experience.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with 99.9% uptime guarantee to keep your links always accessible.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Collaboration",
    description:
      "Work together with your team to manage and optimize your link pages collaboratively.",
  },
];
