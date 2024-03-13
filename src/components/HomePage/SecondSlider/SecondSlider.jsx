"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { nanoid } from "nanoid";
import "swiper/css/navigation";
import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import TitleNeedSupport from "./TitleNeedSupport/TitleNeedSupport";
import css from "./SecondSlider.module.css";

const SecondSlider = () => {
  const isTablet = useMediaQuery({minWidth: 768});
  const isTabletEnd = useMediaQuery({maxWidth: 959.98});
  const isDesktop = useMediaQuery({minWidth: 960});
  const isDesktopEnd = useMediaQuery({maxWidth: 1919.98});
  const isDesktop1920 = useMediaQuery({minWidth: 1920});
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const slides = [
    {
      img: "/img/home/slider2/fire.png",
      id: nanoid(),
      title: "Збір від Оксани",
      subtitle: "окопні свічки",
      progress: "7%",
    },
    {
      img: "/img/home/slider2/cars.png",
      id: nanoid(),
      title: "Збір від Андрія",
      subtitle: "автівки для зсу",
      progress: "54%",
    },
    {
      img: "/img/home/slider2/items.png",
      id: nanoid(),
      title: "Збір від Майора Чорнобаєва",
      subtitle: "3D-друковані ортези",
      progress: "32%",
    },
    {
      img: "/img/home/slider2/boxes.png",
      id: nanoid(),
      title: "Збір від Життя Переможе",
      subtitle: "бандажі для зсу",
      progress: "68%",
    },
    {
      img: "/img/home/slider2/fire.png",
      id: nanoid(),
      title: "Збір від Оксани",
      subtitle: "окопні свічки",
      progress: "7%",
    },
    {
      img: "/img/home/slider2/cars.png",
      id: nanoid(),
      title: "Збір від Андрія",
      subtitle: "автівки для зсу",
      progress: "54%",
    },
    {
      img: "/img/home/slider2/items.png",
      id: nanoid(),
      title: "Збір від Майора Чорнобаєва",
      subtitle: "3D-друковані ортези",
      progress: "32%",
    },
    {
      img: "/img/home/slider2/boxes.png",
      id: nanoid(),
      title: "Збір від Життя Переможе",
      subtitle: "бандажі для зсу",
      progress: "68%",
    },
  ];


  return (
    <>
      <div className={css.container}>
        <Swiper
          spaceBetween={isTablet && isTabletEnd ? 38 : isDesktop ? 20: 30}
          slidesPerView={isTablet && isDesktopEnd ? 2 : isDesktop1920 ? 4 : 1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
             reverseDirection: isDesktop ? true : false,
          }}
          loop={true}
          modules={[Navigation, Autoplay]}
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
            <SwiperSlide key={id} className={css.slide}>
              <div>
                <p className={css.titleSlide}>{title}</p>
                <p className={css.subtitleSlide}>{subtitle}</p>
                <div className={css.progressBar}>
                  <span style={{ width: `${progress}` }}>{progress}</span>
                </div>
              </div>
              <Image
                alt="photo"
                src={img}
                width={228}
                height={157}
                priority
                className={css.slideImage}
              />
            </SwiperSlide>
          ))}
          <div ref={navigationPrevRef} className={css.arrowLeftBtn}>
            <Icon name={"icon-arrow-left"} className={css.arrowLeftIcon} />
          </div>
          <div ref={navigationNextRef} className={css.arrowRightBtn}>
            <Icon name={"icon-arrow-right"} className={css.arrowRightIcon} />
          </div>
        </Swiper>
      </div>
      <TitleNeedSupport />
    </>
  );
};

export default SecondSlider;
