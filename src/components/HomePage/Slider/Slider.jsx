"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { nanoid } from "nanoid";
import css from "./Slider.module.css";

import "swiper/css";

const Slider = () => {
  const slides = [
    { img: "/img/home/slider/slide1.webp", id: nanoid() },
    { img: "/img/home/slider/slide2.webp", id: nanoid() },
    { img: "/img/home/slider/slide3.webp", id: nanoid() },
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
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {slides.map(({ img, id }) => (
          <SwiperSlide key={id} className={css.slideItemContainer}>
            <Image
              alt="photo"
              src={img}
              width={520}
              height={330}
              priority
              className={css.slideItem}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={css.logoSliderContainer}>
          <Image
            src={"/img/home/sliderLogo.webp"}
            alt="Логотип ДрукАрмії"
            priority
            width={107}
            height={53}
            className={css.logoSlider}
          />
        </div>
    </div>
  );
};

export default Slider;
