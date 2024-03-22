"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import teamLead from "/public/img/createdBy/teamlead/teamlead.webp"
import frontVlad from "/public/img/createdBy/frontend/front1.webp";
import frontVugar from "/public/img/createdBy/frontend/front2.webp";
import frontDarina from "/public/img/createdBy/frontend/front3.webp";
import testKatya from "/public/img/createdBy/testPeople/test1.webp";
import testOlena from "/public/img/createdBy/testPeople/test2.webp";
import designerImg from "/public/img/createdBy/designer/designer3.webp";
import "swiper/css";
import css from "./SliderCards.module.css";

const creators = [
  {
    img: teamLead,
    role: "Team Lead",
    id: "teamLead",
  },
  {
    img: frontVlad,
    role: "Frontend",
    id: "frontVlad",
  },
  {
    img: frontVugar,
    role: "Frontend",
    id: "frontVugar",
  },
  {
    img: frontDarina,
    role: "Frontend",
    id: "frontDarina",
  },
  {
    img: testKatya,
    role: "QA Engineer",
    id: "testerKatya",
  },
  {
    img: testOlena,
    role: "QA Engineer",
    id: "testerOlena",
  },
  {
    img: designerImg,
    role: "Web design",
    id: "webDesign",
  },
];

const SliderCards = ({setCreator, creator}) => {
  return (
    <>
      <div className={css.container}>
        <Swiper
          spaceBetween={4}
          slidesPerView={6.6}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: false
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
                height={286}
                className={creator === id ? css.slideImageActive : css.slideImage}
              />
              <div className={creator === id ? css.textContentActive : css.textContent} >
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
