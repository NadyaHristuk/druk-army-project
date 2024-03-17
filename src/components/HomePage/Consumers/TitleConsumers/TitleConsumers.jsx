"use client";

import { useTranslation } from "react-i18next";
import css from "./TitleConsumers.module.css";

const TitleConsumers = () => {
  const { t } = useTranslation();

  return (
    <div className={css.mainTitleContainer}>
      <h2 className={css.mainTitle}>{t("home:consumers")}</h2>
      <p className={css.mainTitleText}>{t("home:consumersInfo")}</p>
    </div>
  );
};

export default TitleConsumers;
