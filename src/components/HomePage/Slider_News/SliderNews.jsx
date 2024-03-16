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
  const slidesNews = [
    {
      img: economistImg,
      id: nanoid(),
      date: "08.05.2023",
      title:"як українці модифікують цивільні дрони для військового використання",
      text: "У лютому 2022 року, через чотири дні після вторгнення Росії в Україну, чоловік під псевдонімом 'Сват', який живе в Києві, увімкнув у своєму гаражі 3D-принтер і почав виготовляти пластикові лаби. ",
    },
    {
      img: dwImg,
      id: nanoid(),
      date: "23.10.2023",
      title: "армія друкарі: як Україна застосовує 3D-технології у війні",
      text: "Через рік Swat [що українською означає 'посередник'] допомогає керувати мережею під назвою Druk ('Друкарська') армія, яка координує виробництво понад 300 3D-принтерів по всій країні.",
    },
    {
      img: drukImg,
      id: nanoid(),
      date: "11.09.2023",
      title: "друкармія: коли маленькі речі мають значення",
      text: "PrintArmy - це спільнота українців, які друкують на 3D-принтерах все, що є життєво необхідним для українських воїнів, враховуючи їхні потреби.",
    },
    {
      img: economistImgTwo,
      id: nanoid(),
      date: "02.08.2023",
      title: "новітня зброя України у війні з росією: бомби, надруковані на 3D-принтері",
      text: "Ручні гранати призначені для метання, тому вони легкі. Але коли їх скидають з дронів, це може бути недоліком. З типовою вагою лише 300 грамів, гранати не мають 'вбивчої сили'.",
    },
    {
      img: economistImg,
      id: nanoid(),
      date: "08.05.2023",
      title:"як українці модифікують цивільні дрони для військового використання",
      text: "У лютому 2022 року, через чотири дні після вторгнення Росії в Україну, чоловік під псевдонімом 'Сват', який живе в Києві, увімкнув у своєму гаражі 3D-принтер і почав виготовляти пластикові лаби. ",
    },
    {
      img: dwImg,
      id: nanoid(),
      date: "23.10.2023",
      title: "армія друкарі: як Україна застосовує 3D-технології у війні",
      text: "Через рік Swat [що українською означає 'посередник'] допомогає керувати мережею під назвою Druk ('Друкарська') армія, яка координує виробництво понад 300 3D-принтерів по всій країні.",
    },
    {
      img: drukImg,
      id: nanoid(),
      date: "11.09.2023",
      title: "друкармія: коли маленькі речі мають значення",
      text: "PrintArmy - це спільнота українців, які друкують на 3D-принтерах все, що є життєво необхідним для українських воїнів, враховуючи їхні потреби.",
    },
    {
      img: economistImgTwo,
      id: nanoid(),
      date: "02.08.2023",
      title: "новітня зброя України у війні з росією: бомби, надруковані на 3D-принтері",
      text: "Ручні гранати призначені для метання, тому вони легкі. Але коли їх скидають з дронів, це може бути недоліком. З типовою вагою лише 300 грамів, гранати не мають 'вбивчої сили'.",
    }
  ];
  return (
    <>
      <div className={css.container}>
        <Swiper
          spaceBetween={isTablet && isTabletEnd ? 38 : isDesktop ? 20 : 30}
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
          {slides.map(({ img, id, date, title, text }) => (
            <SwiperSlide key={id} className={css.slide}>
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
    </>
  );
};

export default SliderNews;
