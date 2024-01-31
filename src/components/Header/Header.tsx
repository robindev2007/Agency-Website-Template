"use client";
import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import Link from "next/link";
import Button from "../UI/Button";
import { AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaSitemap } from "react-icons/fa6";
import { motion } from "framer-motion";
import { topToBottonAnime } from "@/lib/Anime";
import { IoMenu } from "react-icons/io5";
import MobileMenu from "./MobileMenu";

function Header() {
  const navLinks = [
    {
      name: "Home",
      route: "#home",
      icon: <AiFillHome className="h-4 w-4" />,
    },
    {
      name: "Services",
      route: "#services",
      icon: <RiCustomerServiceFill className="h-4 w-4" />,
    },
    {
      name: "Our Portfolio",
      route: "#portfolio",
      icon: <FaSitemap className="h-4 w-4" />,
    },
    {
      name: "About Us",
      route: "#about_us",
      icon: <FaUser className="h-4 w-4" />,
    },
  ];

  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [navActive, setNavActive] = useState(false);

  const toggleNavMenu = () => {
    setNavActive((prev) => !prev);
  };

  useMotionValueEvent(scrollY, "change", (p) => {
    if (p > 50) return setScrolled(true);
    setScrolled(false);
  });

  return (
    <div className="">
      <AnimatePresence mode="wait">
        {scrolled && (
          <motion.div
            variants={{
              hidden: {
                y: -50,
                translateX: "-50%",
                opacity: 0,
                scale: 0,
              },
              animate: {
                x: "50vw",
                translateX: "-50%",
                y: 5,
                opacity: 1,
                scale: 1,
              },
            }}
            initial="animate"
            animate="animate"
            exit={"hidden"}
            className="fixed shadow-lg border border-zinc-500 border-opacity-70 z-10 bg-white bg-opacity-10 py-2 px-4 rounded-full backdrop-blur-md">
            <nav className="flex text-xs gap-8 items-center text-lite">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.route}
                  className="hover:text-primary transition-colors duration-150 ease-out">
                  <Button className="rounded-full bg-opacity-40 hover:bg-opacity-70">
                    {link.icon}
                  </Button>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={topToBottonAnime}
        initial="initial"
        animate="animate"
        className="flex container py-2 justify-between items-center">
        <Logo />
        <nav className="md:flex hidden text-xs gap-2 items-center text-lite">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.route}
              className="hover:text-primary transition-colors duration-150 ease-out">
              {link.name}
            </Link>
          ))}
        </nav>
        <Button variant="Outline" className="ml-auto md:ml-0">
          Contact
        </Button>
        <Button variant="Ghost" onClick={toggleNavMenu} className="md:hidden">
          <IoMenu className="h-7 w-7" />
        </Button>
      </motion.div>

      <AnimatePresence>
        {navActive && (
          <MobileMenu navLinks={navLinks} toggleNav={toggleNavMenu} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
