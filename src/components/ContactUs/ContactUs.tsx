import React from "react";
import Button from "../UI/Button";
import Reveal from "../utlis/Reveal";

function ContactUs() {
  return (
    <div id="about_us" className="bg-[#1C1B1D] py-8">
      <Reveal className="grid grid-cols-3 justify-between items-center container">
        <h2 className="col-span-2">
          Contact us for the service you want to use
        </h2>
        <Button className="w-fit ml-auto">Contact Us</Button>
      </Reveal>
    </div>
  );
}

export default ContactUs;
