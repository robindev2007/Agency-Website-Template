import { services } from "@/lib/constance";
import Image from "next/image";
import React from "react";
import Reveal from "../utlis/Reveal";

function Services() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 items-center gap-x-[5.1rem] gap-y-10">
      {services.map((service) => (
        <Reveal
          key={service.title}
          className="flex items-center flex-col gap-2">
          <div className="h-16 w-16">
            <Image
              src={service.icon}
              height={100}
              width={100}
              alt={service.desc}
            />
          </div>
          <h3 className="text-lg">{service.title}</h3>
          <p className="text-lite text-sm max-w-[60%] md:max-w-[90%]">
            {service.desc}
          </p>
        </Reveal>
      ))}
    </div>
  );
}

export default Services;
