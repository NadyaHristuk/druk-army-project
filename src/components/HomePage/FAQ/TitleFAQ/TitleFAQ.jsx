"use client";

import { useTranslation } from "react-i18next";
import css from "./TitleFAQ.module.css";

const TitleFAQ = () => {
  const { t } = useTranslation();

  return (
    <div className={css.mainTitleContainer}>
      <h2 className={css.mainTitle}>
        <span className={css.titleAccent}>FAQ</span>
        <span className={css.titleFirst}>{t("home:questions")}</span>
      </h2>
      <p className={css.mainTitleText}>{t("home:questionsTitleText")}</p>
    </div>
  );
};

export default TitleFAQ;
