"use client";

import { useTranslation } from "react-i18next";
import css from "./TitlePartners.module.css";

const TitlePartners = () => {
  const { t } = useTranslation();

  return (
    <div className={css.mainTitleContainer}>
      <h2 className={css.mainTitle}>{t("home:partners")}</h2>
      <p className={css.mainTitleText}>{t("home:partnersInfo")}</p>
    </div>
  );
};

export default TitlePartners;
