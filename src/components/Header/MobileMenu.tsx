"use client";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import Button from "../UI/Button";
import Link from "next/link";
import { motion } from "framer-motion";

function MobileMenu({
  navLinks,
  toggleNav,
}: {
  navLinks: { name: string; route: string; icon: any }[];
  toggleNav: () => void;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed z-30 h-screen w-screen bg-black-primary bg-opacity-40 backdrop-blur-md top-0 left-0">
      <motion.div
        variants={{
          initial: {
            x: -200,
            opacity: 0,
          },
          exit: {
            x: -200,
            opacity: 0,
          },
          animate: {
            x: 0,
            opacity: 1,
            transition: {
              ease: "easeInOut",
            },
          },
        }}
        initial={"initial"}
        animate="animate"
        exit={"exit"}
        className="bg-black-primary flex gap-5 flex-col w-4/5 h-full p-3">
        <div className="flex items-center justify-between">
          Menu
          <Button variant="Ghost" onClick={toggleNav}>
            <RxCross2 className="h-7 w-7" />
          </Button>
        </div>
        <div>
          <nav className="flex flex-col gap-2 items-center text-lite">
            {navLinks.map((link) => (
              <Link
                onClick={toggleNav}
                key={link.name}
                href={link.route}
                className="hover:text-primary transition-colors duration-150 ease-out">
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <p className="text-xs mt-auto text-lite">
          © 2020 Enver, All Rights Reserved
        </p>
      </motion.div>
    </motion.div>
  );
}

export default MobileMenu;
