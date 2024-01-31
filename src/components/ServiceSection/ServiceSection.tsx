import React from "react";
import Services from "./Services";
import Reveal from "../utlis/Reveal";

function ServiceSection() {
  return (
    <div id="services">
      <div className="text-center container gap-10 flex flex-col">
        <Reveal animate="TopToBottom">
          <h2 className="mx-auto">
            The Service We <br className="hidden md:flex" /> Provide For You
          </h2>
        </Reveal>
        <Services />
      </div>
    </div>
  );
}

export default ServiceSection;
