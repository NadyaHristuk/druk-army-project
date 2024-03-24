"use client";

import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import css from "./PrintAllTitle.module.css";

const PrintAllTitle = () => {
  const minFixLanguage = useMediaQuery({ minWidth: 960 });
  const maxFixLanguage = useMediaQuery({ maxWidth: 1440 });
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <div className={css.mainTitleContainer}>
      <h2 className={css.mainTitle}>
        <span className={css.titleFirst}>{t("home:willBePrint")}</span>
        {minFixLanguage && maxFixLanguage && currentLocale !== "ua" ? (
          <span className={css.titleAccent} style={{ fontSize: 40 }}>
            {t("home:all")}!!!!!!!!!
          </span>
        ) : (
          <span className={css.titleAccent}>{t("home:all")}!!!!!!!!!</span>
        )}
      </h2>
      <p className={css.mainTitleText}>{t("home:printAllTextOne")}</p>
      <p className={css.mainTitleText}>{t("home:printAllTextTwo")}</p>
      <Link
        href={"https://app.drukarmy.org.ua"}
        target="_blank"
        aria-label={t("home:participate")}
        className={css.btn}
      >
        <span className={currentLocale === "de" ? css.btnTextGermany : css.btnText}>
          <Icon className={css.communityIcon} name={"icon-people"} />
          {t("home:participate")}
        </span>
      </Link>
    </div>
  );
};

export default PrintAllTitle;
