"use client";

import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";
import HeroImageAnimation from "@/public/HeroImageAnimation.json";

function HeroImage() {
  return (
    <div className="h-[600] w-[400]">
      {/* <div className="absolute top-0 w-40 h-20"> */}
      <div className="w-full h-20 absolute">
        <Image
          src="/Social Icons.png"
          alt="Social Icons"
          width={500}
          height={200}
          className="w-full h-28 object-contain"
        />
        {/* </div> */}
      </div>

      <Image
        src="/heroImageBg.svg"
        alt="Hero Image"
        width={600}
        height={400}
        className="w-full h-auto object-contain"
      />
      <Lottie
        animationData={HeroImageAnimation}
        loop={true}
        className="absolute bottom-0 w-full h-10/12"
      />
    </div>
  );
}

export default HeroImage;
