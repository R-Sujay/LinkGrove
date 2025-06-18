import React from "react";
import {
  BarChart3,
  Palette,
  Shield,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";

function Features() {
  return (
    <section id="features" className="px-4 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you share your content and grow
            your audience
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-purple-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
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
