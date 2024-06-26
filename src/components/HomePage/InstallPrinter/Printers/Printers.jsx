"use client"

import Image from "next/image";
import { useTranslation } from "react-i18next";
import workingPeopleImg from "/public/img/home/calculator/working.webp";
import printerImg from "/public/img/home/calculator/printer.webp";
import printerFirstImg from "/public/img/home/calculator/printer1.webp";
import printerThirdImg from "/public/img/home/calculator/printer3.webp";
import css from "./Printer.module.css";

const Printers = () => {
  const { t } = useTranslation();

  const printers = [
    {
      image: printerFirstImg,
      title: "ENDER-3 V3 SE",
      quality: `1084 ${t("home:units")}`,
    },
    {
      image: printerImg,
      title: "CREALITY ENDER 3 V2",
      quality: `478 ${t("home:units")}`,
    },
    {
      image: printerThirdImg,
      title: "CREALITY ENDER 3",
      quality: `415 ${t("home:units")}`,
    },
  ];

  return (
    <div className={css.printersContainer}>
      <ul className={css.printersList}>
        {printers.map(({ image, title, quality }) => (
          <li key={title} className={css.printerCard}>
            <div>
              <Image
                src={image}
                alt={`принтер моделі ${title}`}
                width={236}
                height={236}
                className={css.printerImage}
                loading="lazy"
              />
            </div>
            <h3 className={css.model}>{title}</h3>
            <p className={css.quality}>{quality}</p>
          </li>
        ))}
      </ul>
      <div className={css.imageContainer}>
        <Image
          src={workingPeopleImg}
          alt="як люди працюють"
          width={433}
          height={474}
          className={css.imageWorking}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Printers;
