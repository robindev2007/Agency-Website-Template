import { bestChoiceGradentBGSrc, bestChoiceImageSrc } from "@/lib/constance";
import Image from "next/image";
import React from "react";
import Reveal from "../utlis/Reveal";

function WhyBestChoiceSection() {
  return (
    <div className="relative">
      <div className="container flex flex-col gap-3">
        <Reveal
          animate="TopToBottom"
          className="md:grid flex flex-col grid-cols-2 gap-4 md:gap-16 justify-between">
          <h2 className="">Why Enver Is The Best Choice?</h2>
          <p className="text-lite text-sm">
            Watch this one minute video so you understand why you should use our
            services!
          </p>
        </Reveal>
        <Reveal
          animate="BottomToTop"
          className="w-full rounded overflow-hidden">
          <Image
            src={bestChoiceImageSrc}
            height={1500}
            width={1000}
            alt="A group of people descacing about how to incrise product value"
          />
        </Reveal>
      </div>
    </div>
  );
}

export default WhyBestChoiceSection;
