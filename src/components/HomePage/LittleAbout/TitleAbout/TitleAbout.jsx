"use client"

import { useTranslation } from "react-i18next";
import css from "./TitleAbout.module.css";

const TitleAbout = () => {
  const { t } = useTranslation();
  return (
    <div className={css.mainTitleContainer}>
      <h2 className={css.mainTitle}>
        <span className={css.titleFirst}>{t("home:littleNumbers")}</span>
        <span className={css.titleAccent}>{t("home:aboutUs")}</span>
      </h2>
      <p className={css.mainTitleText}>
      {t("home:aboutUsTitleText")}
      </p>
    </div>
  );
};

export default TitleAbout;
