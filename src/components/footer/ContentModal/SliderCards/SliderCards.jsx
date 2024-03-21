"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import frontVlad from "/public/img/createdBy/frontend/front1.jpg";
import designerImg from "/public/img/createdBy/designer/designer3.jpg";
import css from "./SliderCards.module.css";

const creators = [
  {
    img: frontVlad,
    role: "Frontend",
    id: "frontVlad",
  },
  {
    img: designerImg,
    role: "Web design",
    id: "webDesign",
  },
  {
    img: frontVlad,
    role: "Frontend",
    id: "frontVlad",
  },
  {
    img: designerImg,
    role: "Web design",
    id: "webDesign",
  },
  {
    img: frontVlad,
    role: "Frontend",
    id: "frontVlad",
  },
  {
    img: designerImg,
    role: "Web design",
    id: "webDesign",
  },
  {
    img: frontVlad,
    role: "Frontend",
    id: "frontVlad",
  },
  {
    img: designerImg,
    role: "Web design",
    id: "webDesign",
  },
];

const SliderCards = ({setCreator}) => {
  return (
    <>
      <div className={css.container}>
        <Swiper
          spaceBetween={0}
          slidesPerView={6.6}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className={css.mySwiper}
        >
          {creators.map(({ img, role, id }) => (
            <SwiperSlide key={id} className={css.slide} onClick={() => setCreator(id)}>
              <Image
                alt="photo"
                src={img}
                width={286}
                height={225}
                className={css.slideImage}
              />
              <div className={css.textContent}>
                <p className={css.role}>{role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SliderCards;
