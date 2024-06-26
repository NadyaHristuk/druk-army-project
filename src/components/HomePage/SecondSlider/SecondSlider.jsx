"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { nanoid } from "nanoid";
import "swiper/css/navigation";
import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import TitleNeedSupport from "./TitleNeedSupport/TitleNeedSupport";
import fireImg from "/public/img/home/slider2/fire.webp";
import carsImg from "/public/img/home/slider2/cars.webp";
import itemsImg from "/public/img/home/slider2/items.webp";
import boxesImg from "/public/img/home/slider2/boxes.webp";
import css from "./SecondSlider.module.css";

const SecondSlider = () => {
  const isTablet = useMediaQuery({minWidth: 768});
  const isTabletEnd = useMediaQuery({maxWidth: 959.98});
  const isDesktop = useMediaQuery({minWidth: 960});
  const isDesktopEnd = useMediaQuery({maxWidth: 1919.98});
  const isDesktop1920 = useMediaQuery({minWidth: 1920});
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const { t } = useTranslation();

  const slides = [
    {
      img: fireImg,
      id: nanoid(),
      title: t("home:slide1Title"),
      subtitle: t("home:slide1Text"),
      progress: "7%",
    },
    {
      img: carsImg,
      id: nanoid(),
      title: t("home:slide2Title"),
      subtitle: t("home:slide2Text"),
      progress: "54%",
    },
    {
      img: itemsImg,
      id: nanoid(),
      title: t("home:slide3Title"),
      subtitle: t("home:slide3Text"),
      progress: "32%",
    },
    {
      img: boxesImg,
      id: nanoid(),
      title: t("home:slide4Title"),
      subtitle: t("home:slide4Text"),
      progress: "68%",
    },
    {
      img: fireImg,
      id: nanoid(),
      title: t("home:slide1Title"),
      subtitle: t("home:slide1Text"),
      progress: "7%",
    },
    {
      img: carsImg,
      id: nanoid(),
      title: t("home:slide2Title"),
      subtitle: t("home:slide2Text"),
      progress: "54%",
    },
    {
      img: itemsImg,
      id: nanoid(),
      title: t("home:slide3Title"),
      subtitle: t("home:slide3Text"),
      progress: "32%",
    },
    {
      img: boxesImg,
      id: nanoid(),
      title: t("home:slide4Title"),
      subtitle: t("home:slide4Text"),
      progress: "68%",
    }
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
