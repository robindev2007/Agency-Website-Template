"use client";
import {
  bottomToTopANime,
  feadeInAnime,
  leftToRightAnime,
  rightToLeftAnime,
  scaleAnime,
  topToBottonAnime,
} from "@/lib/Anime";
import { cn } from "@/lib/utils";
import { useAnimation, useInView, motion } from "framer-motion";
import React, { FC, useEffect, useRef, useState } from "react";

type animeTypes =
  | "Scale"
  | "TopToBottom"
  | "LeftToRight"
  | "RightToleft"
  | "BottomToTop"
  | "FadeIn";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  animate?: animeTypes;
};

const Reveal: FC<RevealProps> = ({ children, className, animate }) => {
  const getAnime = (name: animeTypes) => {
    switch (name) {
      case "Scale":
        return scaleAnime;
      case "TopToBottom":
        return topToBottonAnime;
      case "LeftToRight":
        return leftToRightAnime;
      case "RightToleft":
        return rightToLeftAnime;
      case "BottomToTop":
        return bottomToTopANime;
      case "FadeIn":
        return feadeInAnime;
    }
  };

  const revealAnime = {
    hidden: { opacity: 0, y: 75 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duraction: 1, ease: "easeInOut" },
    },
  };

  return (
    <div>
      <motion.div
        className={cn(className)}
        variants={animate ? getAnime(animate) : topToBottonAnime}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}>
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
