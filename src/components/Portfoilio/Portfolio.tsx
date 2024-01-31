"use client";
import { portfolioImages } from "@/lib/constance";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import MobileSlider from "./MobileSlider";
import Reveal from "../utlis/Reveal";

function Portfolio() {
  return (
    <div id="portfolio" className="md:mb-9">
      <div className="container flex flex-col gap-5">
        <Reveal>
          <h2>Our Awesome Portfolio</h2>
        </Reveal>
        <div className="md:flex hidden flex-row gap-4">
          {portfolioImages.map((image, i) => (
            <Reveal key={image}>
              <motion.div
                initial={{ y: i * 50 }}
                className="rounded-md overflow-hidden">
                <Image
                  src={image}
                  alt=""
                  height={766}
                  width={600}
                  className="border border-zinc-500 border-opacity-30"
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
        <MobileSlider />
      </div>
    </div>
  );
}

export default Portfolio;
