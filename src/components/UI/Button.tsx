"use client";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, FC, ReactNode, useRef } from "react";
import { HTMLMotionProps, motion, useInView } from "framer-motion";

type ButtonProps = HTMLMotionProps<"button"> & {
  children?: ReactNode | ReactNode[];
  className?: string;
  variant?: "Default" | "Ghost" | "Outline";
  animateOnce?: boolean;
};

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant,
  animateOnce,
  ...props
}) => {
  const getVariant = (variant: "Default" | "Ghost" | "Outline") => {
    switch (variant) {
      case "Ghost":
        return "";
      case "Outline":
        return "border-white text-black rounded-md border-[.66px] rounded-md";
      case "Default":
        return "bg-primary rounded-md";
      default:
        return "text-white bg-primary rounded-md";
    }
  };

  const customClass = cn(
    "h-[30px] px-3 text-xs no-warp",
    variant ? getVariant(variant) : getVariant("Default"),
    className
  );

  const ref = useRef(null);

  return (
    <motion.button
      {...props}
      className={customClass}
      initial={{ scale: 0.1, opacity: 0, y: 0 }}
      whileTap={{ scale: 0.9 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}>
      {children}
    </motion.button>
  );
};

export default Button;
