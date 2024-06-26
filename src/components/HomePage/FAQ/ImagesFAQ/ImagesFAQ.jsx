"use client";

import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import soldierImg from "/public/img/home/faq/soldier.webp";
import donorImg from "/public/img/home/faq/donor.webp";
import printerImg from "/public/img/home/faq/printer.webp";
import creatorImg from "/public/img/home/faq/producer.webp";
import css from "./ImagesFAQ.module.css";

const ImagesFAQ = ({setRole, role}) => {
  const media480 = useMediaQuery({minWidth: 480});
  const media767 = useMediaQuery({maxWidth: 767.98});
  const media768 = useMediaQuery({minWidth: 768});
  const media959 = useMediaQuery({maxWidth: 959.98});
  const media960 = useMediaQuery({minWidth: 960});
  const media1199 = useMediaQuery({maxWidth: 1199.98});
  const media1200 = useMediaQuery({minWidth: 1200});
  const media1919 = useMediaQuery({maxWidth: 1919.98});
  const media1920 = useMediaQuery({minWidth: 1920});
  const { t } = useTranslation();
  
const handleClick = (e) => {
  let roleChoosen = e.currentTarget.id;
  setRole(roleChoosen);
}

  return (
    <div>
      <ul className={css.listCards}>
        <li className={css.card} id="soldier" onClick={handleClick}>
          <Image
            src={soldierImg}
            alt={t("home:militar")}
            width={media480 && media767 ? 210.61 : (media768 && media959 ? 172.44 : (media960 && media1199 ? 288.99 : (media1200 && media1919 ? 272.16 : (media1920 ? 360 : 148.87))))}
            height={media480 && media767 ? 156.79 : (media768 && media959 ? 128.37 : (media960 && media1199 ? 215.13 : (media1200 && media1919 ? 202.61 : (media1920 ? 268 : 110.82))))}
            className={role === "soldier" ? css.cardImgActive : css.cardImg}
          />
          <div className={role === "soldier" ? css.textContainerActive : css.textContainer}>
            <p>{t("home:militar")}</p>
          </div>
        </li>
        <li className={css.card} id="donor" onClick={handleClick}>
          <Image
            src={donorImg}
            alt={t("home:donor")}
            width={media480 && media767 ? 205.35 : (media768 && media959 ? 168.13 : (media960 && media1199 ? 281.76 : (media1200 && media1919 ? 265.36 : (media1920 ? 351 : 145.14))))}
            height={media480 && media767 ? 179.61 : (media768 && media959 ? 147.05 : (media960 && media1199 ? 246.44 : (media1200 && media1919 ? 232.09 : (media1920 ? 307 : 126.95))))}
            className={role === "donor" ? css.cardImgActive : css.cardImg}
          />
          <div  className={role === "donor" ? css.textContainerActive : css.textContainer}>
            <p>{t("home:donor")}</p>
          </div>
        </li>
        <li className={css.card} id="printer" onClick={handleClick}>
          <Image
            src={printerImg}
            alt={t("home:printMan")}
            width={media480 && media767 ? 195.4 : (media768 && media959 ? 159.98 : (media960 && media1199 ? 268.11 : (media1200 && media1919 ? 252.5 : (media1920 ? 334 : 138.11))))}
            height={media480 && media767 ? 187.21 : (media768 && media959 ? 153.28 : (media960 && media1199 ? 256.88 : (media1200 && media1919 ? 241.92 : (media1920 ? 320 : 132.32))))}
            className={role === "printer" ? css.cardImgActive : css.cardImg}
          />
          <div  className={role === "printer" ? css.textContainerActive : css.textContainer}>
            <p>{t("home:printMan")}</p>
          </div>
        </li>
        <li className={css.card} id="producer" onClick={handleClick}>
          <Image
            src={creatorImg}
            alt={t("home:producer")}
            width={media480 && media767 ? 196.57 : (media768 && media959 ? 160.94 : (media960 && media1199 ? 269.72 : (media1200 && media1919 ? 254.02 : (media1920 ? 336 : 138.94))))}
            height={media480 && media767 ? 188.38 : (media768 && media959 ? 154.24 : (media960 && media1199 ? 258.48 : (media1200 && media1919 ? 243.43 : (media1920 ? 322 : 133.15))))}
            className={role === "producer" ? css.cardImgActive : css.cardImg}
          />
          <div className={role === "producer" ? css.textContainerActive : css.textContainer}>
            <p>{t("home:producer")}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ImagesFAQ;
