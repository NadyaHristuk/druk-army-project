"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css/navigation";
import Image from "next/image";
import { nanoid } from "nanoid";
import Container from "@/components/container/Container";
import Icon from "@/components/Icon/Icon";
import css from "./SecondSlider.module.css";

const slides = [
  { img: "/img/home/slider2/fire.png", id: nanoid(), title: "Збір від Оксани", subtitle: "окопні свічки", progress: "7%" },
  { img: "/img/home/slider2/cars.png", id: nanoid(), title: "Збір від Андрія", subtitle: "автівки для зсу", progress: "54%" },
  { img: "/img/home/slider2/items.png", id: nanoid(), title: "Збір від Майора Чорнобаєва", subtitle: "3D-друковані ортези", progress: "32%" },
  { img: "/img/home/slider2/boxes.png", id: nanoid(), title: "Збір від Життя Переможе", subtitle: "бандажі для зсу", progress: "68%" },
];

const SecondSlider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
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
        {slides.map(({ img, id, title, subtitle, progress }) => (
          <SwiperSlide key={id}>
            <p className={css.titleSlide}>{title}</p>
            <p className={css.subtitleSlide}>{subtitle}</p>
            <div className={css.progressBar}><span style={{width: `${progress}`}}>{progress}</span></div>
            <Image alt="photo" src={img} width={228} height={157} priority />
          </SwiperSlide>
        ))}
        <div ref={navigationPrevRef} className={css.arrowLeftBtn}><Icon name={'icon-arrow-left'} className={css.arrowLeftIcon}/></div>
        <div ref={navigationNextRef} className={css.arrowRightBtn}><Icon name={'icon-arrow-right'} className={css.arrowRightIcon}/></div>
      </Swiper>
    </Container>
  );
};

export default SecondSlider;
