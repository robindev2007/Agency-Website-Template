import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { portfolioImages } from "@/lib/constance";
import Image from "next/image";
import Button from "../UI/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";

function MobileSlider() {
  return (
    <div className="md:hidden">
      <Swiper
        slidesPerView={1}
        loop
        spaceBetween={50}
        modules={[Navigation]}
        grabCursor
        navigation={{
          nextEl: ".portfolio_swiper_next",
          prevEl: ".portfolio_swiper_prev",
        }}
        centeredSlides>
        {portfolioImages.map((image, i) => (
          <SwiperSlide key={image} className="h-52 w-fit flex">
            <Image
              src={image}
              alt=""
              height={481}
              width={615}
              className="border border-zinc-500 border-opacity-30 rounded-lg h-full flex w-fit"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center gap-4 mt-5">
        <Button className="portfolio_swiper_prev rounded-full h-10 w-10">
          <FaChevronLeft className="h-full p-1 w-full" />
        </Button>
        <Button className="portfolio_swiper_next rounded-full h-10 w-10">
          <FaChevronRight className="h-full p-1 w-full" />
        </Button>
      </div>
    </div>
  );
}

export default MobileSlider;
