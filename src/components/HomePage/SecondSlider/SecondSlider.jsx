"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css/navigation";
import Image from "next/image";
import { nanoid } from "nanoid";
import css from "./SecondSlider.module.css";

const slides = [
  { img: "/img/home/slider2/fire.png", id: nanoid() },
  { img: "/img/home/slider2/cars.png", id: nanoid() },
  { img: "/img/home/slider2/items.png", id: nanoid() },
  { img: "/img/home/slider2/boxes.png", id: nanoid() },
];

const SecondSlider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        className={css.mySwiper}
      >
        {slides.map(({ img, id }) => (
          <SwiperSlide key={id}>
            <Image alt="photo" src={img} width={228} height={157} priority />
          </SwiperSlide>
        ))}
        <div ref={navigationPrevRef}>Prev</div>
        <div ref={navigationNextRef}>Next</div>
      </Swiper>
    </div>
  );
};

export default SecondSlider;
