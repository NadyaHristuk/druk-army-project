"use client";

import { useMediaQuery } from "react-responsive";
import { useTheme } from "next-themes";
import TitleAbout from "./TitleAbout/TitleAbout";
import Info from "./Info/Info";
import Image from "next/image";
import bgImg from "/public/img/home/bg.webp";
import girlImg from "/public/img/home/girl-light.webp";
import girlDarkImg from "/public/img/home/girl-dark-theme.webp";
import css from "./LittleAbout.module.css";

const LittleAbout = () => {
  const { theme } = useTheme();
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isTabletEnd = useMediaQuery({ maxWidth: 959.98 });

  return (
    <div className={css.container}>
      <TitleAbout />
      <Info />
      {isTablet && (
        <div className={css.girl_container}>
          <Image
            src={
              theme === "light"
                ? girlImg
                : girlDarkImg
            }
            alt="гарна анімована дівчина"
            width={692}
            height={688}
            className={css.girl}
            loading="lazy"
            style={
              isTablet &&
              isTabletEnd &&
              theme === "dark" && { objectPosition: "267px 29px" }
            }
          />
          {theme === "dark" && <Image
            src={bgImg}
            alt="background layout"
            width={287}
            height={366}
            className={css.bg_girl}
            loading="lazy"
          />}
        </div>
      )}
    </div>
  );
};

export default LittleAbout;
