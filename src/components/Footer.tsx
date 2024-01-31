import React from "react";
import Logo from "./Logo";
import { supportPages } from "@/lib/constance";
import Link from "next/link";
import Reveal from "./utlis/Reveal";

function Footer() {
  return (
    <Reveal animate="FadeIn" className="bg-black-primary py-3 pb-6">
      <div className="flex gap-3 justify-between items-center container">
        <Logo />
        <nav className="gap-3 flex">
          {supportPages.map((page) => (
            <Link
              key={page.name}
              href={page.route}
              className="text-xs text-lite">
              {page.name}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-lite">© 2020 Enver, All Rights Reserved</p>
      </div>
    </Reveal>
  );
}

export default Footer;
