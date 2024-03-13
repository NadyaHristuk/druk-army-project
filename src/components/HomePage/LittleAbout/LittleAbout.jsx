"use client";

import { useMediaQuery } from "react-responsive";
import { useTheme } from "next-themes";
import TitleAbout from "./TitleAbout/TitleAbout";
import Info from "./Info/Info";
import Image from "next/image";
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
                ? "/img/home/girl-light.png"
                : "/img/home/girl-dark-theme.png"
            }
            alt="гарна анімована дівчина"
            width={692}
            height={688}
            className={css.girl}
            style={
              isTablet &&
              isTabletEnd &&
              theme === "dark" && { objectPosition: "267px 29px" }
            }
          />
          {theme === "dark" && <Image
            src={"/img/home/bg.png"}
            alt="background layout"
            width={287}
            height={366}
            className={css.bg_girl}
          />}
        </div>
      )}
    </div>
  );
};

export default LittleAbout;
