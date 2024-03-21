"use client";

import { useTranslation } from "react-i18next";
import css from "./TitleSpeakAbout.module.css";

const TitleSpeakAbout = () => {
  const { t } = useTranslation();
  return (
    <div className={css.mainTitleContainer}>
      <h2 className={css.mainTitle}>
        <span className={css.titleFirst}>{t("home:whoSpeak")}</span>
        <span className={css.titleAccent}>{t("home:speakAboutUs")}</span>
      </h2>
      <p className={css.mainTitleText}>{t("home:speakAboutText")}</p>
    </div>
  );
};

export default TitleSpeakAbout;
