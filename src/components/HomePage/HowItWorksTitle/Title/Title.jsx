"use client";

import { useTranslation } from "react-i18next";
import css from "./Title.module.css";

const Title = () => {
  const { t } = useTranslation();
  return (
    <div className={css.mainTitleContainer}>
      <h2 className={css.mainTitle}>
        <span className={css.titleFirst}>{t("home:threeSimpleSteps")}</span>
        <span className={css.titleAccent}>{t("home:howItWork")}</span>
      </h2>
      <p className={css.mainTitleText}>
       {t("home:textSecond")}
      </p>
    </div>
  );
};

export default Title;
