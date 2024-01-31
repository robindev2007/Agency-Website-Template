import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function wait(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// npm i  clsx framer-motion react-countup react-icons tailwind-merge swiper
