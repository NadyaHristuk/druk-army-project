"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { nanoid } from "nanoid";
import css from "./Slider.module.css";

import "swiper/css";

const Slider = () => {
  const slides = [
    { img: "/img/home/slider/slide1.png", id: nanoid() },
    { img: "/img/home/slider/slide2.png", id: nanoid() },
    { img: "/img/home/slider/slide3.png", id: nanoid() },
  ];

  return (
    <div className={css.container}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map(({ img, id }) => (
          <SwiperSlide key={id} className={css.slideItemContainer}>
            <Image
              alt="photo"
              src={img}
              width={520}
              height={330}
              className={css.slideItem}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={css.logoSliderContainer}>
          <Image
            src={"/img/home/sliderLogo.png"}
            alt="Логотип ДрукАрмії"
            width={107}
            height={53}
            className={css.logoSlider}
          />
        </div>
    </div>
  );
};

export default Slider;
