"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";
import imgMirotvorec from "/public/img/footer-logo/logo-1.webp";
import imgSpecialForce from "/public/img/footer-logo/logo-2.webp";
import imgAeroRozvidka from "/public/img/footer-logo/logo-3.webp";
import css from "./ListCards.module.css";

const ListCards = () => {
  const isTabletStart = useMediaQuery({ minWidth: 768 });
  const isTabletEnd = useMediaQuery({ maxWidth: 959.98 });
  const isMediumTabletStart = useMediaQuery({ minWidth: 960 });
  const isMediumTabletEnd = useMediaQuery({ maxWidth: 1199.98 });
  const isDesktopStart = useMediaQuery({ minWidth: 1200 });

  return (
    <div className={css.cardsContainer}>
      <ul className={css.cardsList}>
        {/*====================== Сили спецільних операцій ======================*/}
        <li className={css.firstCard}>
          <Link href={"https://sof.mil.gov.ua"} target="_blank">
            <Image
              loading="lazy"
              src={imgSpecialForce}
              alt="Емблема Сил Спецільних Операцій України"
              width={
                isTabletStart && isTabletEnd
                  ? 77
                  : isMediumTabletStart && isMediumTabletEnd
                  ? 104
                  : isDesktopStart
                  ? 160
                  : 117
              }
              height={
                isTabletStart && isTabletEnd
                  ? 68
                  : isMediumTabletStart && isMediumTabletEnd
                  ? 94
                  : isDesktopStart
                  ? 140
                  : 104
              }
            />
          </Link>
          <p className={css.description}>Сили спеціальних операцій</p>
        </li>

        {/*========================================= Миротворець =============================*/}
        <li className={css.secondCard}>
          <Link href={"https://myrotvorets.center"} target="_blank">
            <Image
              loading="lazy"
              src={imgMirotvorec}
              alt="Емблема Центру Миротворець"
              width={
                isTabletStart && isTabletEnd
                  ? 74
                  : isMediumTabletStart && isMediumTabletEnd
                  ? 94
                  : isDesktopStart
                  ? 140
                  : 104
              }
              height={
                isTabletStart && isTabletEnd
                  ? 74
                  : isMediumTabletStart && isMediumTabletEnd
                  ? 94
                  : isDesktopStart
                  ? 140
                  : 104
              }
            />
          </Link>
          <p className={css.description}>Миротворець</p>
        </li>

        {/* ============================= Аеророзвідка ======================================= */}

        <li className={css.thirdCard}>
          <Link href={"https://aerorozvidka.ngo/uk"} target="_blank">
            <Image
              loading="lazy"
              src={imgAeroRozvidka}
              alt="Емблема Аеророзвідки України"
              width={
                isTabletStart && isTabletEnd
                  ? 56
                  : isMediumTabletStart && isMediumTabletEnd
                  ? 72
                  : isDesktopStart
                  ? 107
                  : 86
              }
              height={
                isTabletStart && isTabletEnd
                  ? 74
                  : isMediumTabletStart && isMediumTabletEnd
                  ? 94
                  : isDesktopStart
                  ? 140
                  : 114
              }
            />
          </Link>
          <p className={css.description}>Аеророзвідка</p>
        </li>
      </ul>
    </div>
  );
};

export default ListCards;
