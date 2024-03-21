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
import economistImg from "/public/img/home/slider3/economist-soldier.webp";
import economistImgTwo from "/public/img/home/slider3/economist.webp";
import dwImg from "/public/img/home/slider3/dw-press.webp";
import drukImg from "/public/img/home/slider3/druk.webp";
import css from "./SliderNews.module.css";

const SliderNews = () => {
  const isMobileBig = useMediaQuery({ minWidth: 480 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isTabletEnd = useMediaQuery({ maxWidth: 959.98 });
  const isDesktop = useMediaQuery({ minWidth: 960 });
  const isDesktopEnd = useMediaQuery({ maxWidth: 1919.98 });
  const isDesktop1920 = useMediaQuery({ minWidth: 1920 });
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const { t } = useTranslation();

  const slidesNews = [
    {
      img: economistImg,
      id: nanoid(),
      date: "08.05.2023",
      title: t("home:newsFirstTitle"),
      text: t("home:newsFirstText"),
    },
    {
      img: dwImg,
      id: nanoid(),
      date: "23.10.2023",
      title: t("home:newsSecondTitle"),
      text: t("home:newsSecondText"),
    },
    {
      img: drukImg,
      id: nanoid(),
      date: "11.09.2023",
      title: t("home:newsThirdTitle"),
      text: t("home:newsThirdText"),
    },
    {
      img: economistImgTwo,
      id: nanoid(),
      date: "02.08.2023",
      title: t("home:newsFourthTitle"),
      text: t("home:newsFourthText"),
    },
    {
      img: economistImg,
      id: nanoid(),
      date: "08.05.2023",
      title: t("home:newsFirstTitle"),
      text: t("home:newsFirstText"),
    },
    {
      img: dwImg,
      id: nanoid(),
      date: "23.10.2023",
      title: t("home:newsSecondTitle"),
      text: t("home:newsSecondText"),
    },
    {
      img: drukImg,
      id: nanoid(),
      date: "11.09.2023",
      title: t("home:newsThirdTitle"),
      text: t("home:newsThirdText"),
    },
    {
      img: economistImgTwo,
      id: nanoid(),
      date: "02.08.2023",
      title: t("home:newsFourthTitle"),
      text: t("home:newsFourthText"),
    },
  ];
  return (
    <>
      <div className={css.container}>
        <Swiper
          spaceBetween={isTablet && isTabletEnd ? 14 : isDesktop ? 20 : 30}
          slidesPerView={
            isMobileBig && isDesktopEnd ? 2 : isDesktop1920 ? 4 : 1
          }
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: isTablet ? true : false,
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
          {slidesNews.map(({ img, id, date, title, text }) => (
            <SwiperSlide key={id} className={css.slide}>
              <Image
                alt="photo"
                src={img}
                width={228}
                height={157}
                priority
                className={css.slideImage}
              />
              <div className={css.textContent}>
                <p className={css.date}>{date}</p>
                <p className={css.titleSlide}>{title}</p>
                <p className={css.textSlide}>{text}</p>
              </div>
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
    </>
  );
};

export default SliderNews;
