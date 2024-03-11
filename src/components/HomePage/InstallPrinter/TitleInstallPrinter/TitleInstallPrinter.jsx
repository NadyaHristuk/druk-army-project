"use client"

import { useTranslation } from "react-i18next";
import css from "./TitleInstallPrinter.module.css";

const TitleInstallPrinter = () => {
  const { t } = useTranslation();
  return (
      <div className={css.mainTitleContainer}>
        {/*============== Жовто-блакитна лінія ===============*/}
        <div className={css.decorationLine}>
          <span className={css.yellowAccent}></span>
        </div>
        {/* ============================================== */}
        <h2 className={css.mainTitle}>
          <span className={css.titleFirst}>{t("home:install")}</span>
          <span className={css.titleAccent}>{t("home:inUkraine")}</span>
        </h2>
        <p className={css.mainTitleText}>
         {t("home:installTitleText")}
          <abbr title={t("home:armyOfUkraine")}>{t("home:armyAbbr")}</abbr>.
        </p>
      </div>
  );
};

export default TitleInstallPrinter;
