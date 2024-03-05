"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import ModelsPrinters from "./ModelsPrinters/ModelsPrinters";
import css from "./Calculator.module.css";

const Calculator = () => {
  const { t } = useTranslation();
  // ================= MEDIAQUERIES ==========================
  const isMobile = useMediaQuery({minWidth: 320});
  const isMobileEnd = useMediaQuery({ maxWidth: 479.98 });
  const isBigMobile = useMediaQuery({ minWidth: 480 });
  const isBigMobileEnd = useMediaQuery({ maxWidth: 767.98 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isTabletEnd = useMediaQuery({ maxWidth: 959.98 });
  const isBigTablet = useMediaQuery({ minWidth: 960 });
  const isDesktopEnd = useMediaQuery({ maxWidth: 1919.98 });
  const isBigDesktop = useMediaQuery({ minWidth: 1920 });
  // ===========================================================================
  const [quality, setQuality] = useState(500);
  const [minQuality, setMinQuality] = useState(null);
  const [maxQuality, setMaxQuality] = useState(null);
  // =================================================================================================
  const [widthInputRange, setWidthInputRange] = useState(null);
  const [widthValue, setWidthValue] = useState(widthInputRange*0.5);
  //  Ширина інпуту в залежності віж ширини вьюпорту
  useEffect(() => {
   if(isMobile && isMobileEnd) {
    setWidthInputRange(296);
    setMaxQuality(912);
    setMinQuality(70);
   } else if (isBigMobile && isBigMobileEnd && !isMobileEnd) {
    setWidthInputRange(436);
    setMaxQuality(950)
    setMinQuality(1)
   } else if (isTablet && isTabletEnd && !isBigMobileEnd) {
    setWidthInputRange(723);
    setMaxQuality(990);
    setMinQuality(30);
   } else if (isBigTablet && isDesktopEnd && !isTabletEnd) {
    setWidthInputRange(570);
    setMaxQuality(2000);
    setMinQuality(30);
   } else if (isBigDesktop && !isDesktopEnd) {
    setWidthInputRange(634);
    setMaxQuality(5000);
    setMinQuality(-5000);
   }
  }, [isBigDesktop, isBigMobile, isBigMobileEnd, isBigTablet, isDesktopEnd, isMobile, isMobileEnd, isTablet, isTabletEnd]);
  // =========================================================================

  useEffect(() => {
    setWidthValue(0.5*widthInputRange);
  }, [widthInputRange])

  // Функція обробки значень інпуту з корегуванням значень і перетворенням  значень в ширину
  const handleRange = (event) => {
    const money = event.target.value;
    setQuality(Math.round(money));
    let value = (money / 1000) * widthInputRange;
    if (money <= 350) {
      value += 2;
    } else if (money >= 700) {
      value -= 4;
    } else {
      value;
    }
    setWidthValue(Math.round(value));
  };


  return (
    <div className={css.container}>
      <div className={css.firstPart}>
        <div className={css.firstPart_textContent}>
          <h2>{t("home:calc")}</h2>
          <h3>{t("home:chooseWhich")}</h3>
          <p>
            {t("home:calcTitleText")}
          </p>
        </div>

        <div>
          <label htmlFor="money" className={css.inputContainer}>
            <span
              className={quality <= minQuality ? css.counterLeftLimit : quality >= maxQuality ? css.counterRightLimit : css.counter}
              style={{ marginLeft: widthValue - 12}}
            >
              <Icon
                className={
                  (quality <= minQuality)
                    ? css.shapeLeftLimit
                    :
                      (quality >= maxQuality)
                    ? css.shapeRightLimit
                    : css.shape
                }
                name={"icon-modal"}
              />
              <p className={css.showResult}>
                {quality <= 100 ? 100 : quality}$
              </p>
            </span>
            <input
              type="range"
              min={0}
              max={1000}
              name="money"
              id="money"
              className={css.rangeScale}
              onChange={handleRange}
            />
            <span
              className={css.fillRange}
              style={{ width: widthValue + 2 }}
            ></span>
          </label>
          <div className={css.scaleContainer}>
            <Image
              src={"/img/home/calculator/scale.png"}
              alt="Range scale from 0 to 1000$"
              width={297}
              height={44}
              className={css.scale}
            />
          </div>
        </div>
      </div>
      <ModelsPrinters quality={quality} />
    </div>
  );
};

export default Calculator;
