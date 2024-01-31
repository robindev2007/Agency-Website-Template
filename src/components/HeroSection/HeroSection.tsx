import {
  heroGradentBgSrc,
  heroImageMobileSrc,
  heroImageSrc,
} from "@/lib/constance";
import React from "react";
import Button from "../UI/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import Reveal from "../utlis/Reveal";

function HeroSection() {
  return (
    <div id="home" className="py-5">
      <div className="container flex flex-col md:grid grid-cols-2 items-center">
        <Reveal animate="LeftToRight" className="gap-8 flex flex-col">
          <h2 className="text-4xl font-bold leading-3.5">
            Build Your <br /> Awesome <br /> Platform
          </h2>
          <p className="text-lite leading-[1.61rem] lg:max-w-[80%] md:max-w-[90%] text-sm">
            Enver studio is a digital studio that offers several services such
            as UI/UX Design to developers, we will provide the best service for
            those of you who use our services.
          </p>
          <Button className="flex w-fit items-center justify-center gap-2 px-3 py-2 group">
            Our Services
            <FaArrowRightLong className="-rotate-[45deg] group-hover:rotate-1 transition-all duration-150 ease-out " />
          </Button>
        </Reveal>
        <Reveal>
          <img
            src={heroImageMobileSrc}
            alt=""
            className="pointer-events-none md:hidden"
          />
          <img
            src={heroImageSrc}
            alt=""
            className="hidden md:flex pointer-events-none"
          />
        </Reveal>
      </div>
    </div>
  );
}

export default HeroSection;
