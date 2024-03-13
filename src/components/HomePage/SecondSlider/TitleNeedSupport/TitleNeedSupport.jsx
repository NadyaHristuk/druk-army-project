"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import Icon from "@/components/Icon/Icon";
import css from "./TitleNeedSupport.module.css";

const TitleNeedSupport = () => {
  const isDesktop1200 = useMediaQuery({ minWidth: 1200 });
  return (
    <div className={css.titleContainer}>
      <div className={css.container}>
        <div className={css.mainTitleContainer}>
          <h2 className={css.mainTitle}>
            потребуємо вашої
            <span className={css.titleAccent}>підтримки</span>
          </h2>
          <p className={css.mainTitleText}>
            Зробіть пожертву на виготовлення (3D-друк) необхідних принад для
            українських захисників. Кожен внесок має значення, адже ви
            підтримуєте наших героїв та зміцнюєте оборону нашої держави.
          </p>
          <button type="button" className={css.buttonSupport}>
            <span className={css.btnText}>
              <Icon className={css.iconSupportBtn} name={"icon-banknote"} />
              підтримати
            </span>
          </button>
        </div>
        {isDesktop1200 && (
        <Image
          src={"/img/home/slider2-man.png"}
          alt="Волонтер з посилками"
          width={606}
          height={922}
          className={css.sliderMan}
        />
      )}
      </div>
    </div>
  );
};

export default TitleNeedSupport;
