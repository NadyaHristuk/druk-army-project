"use client";

import { useTranslation } from "react-i18next";
import TitleBlock from "@/components/TitleBlock/TitleBlock";
import css from "./TitleTop.module.css";

const TitleTop = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={css.titleTop}>
        <div className={css.container}>
        <div className={css.wrapper}>
        <p className={css.backText}>{t("about:ambassadors")}</p>
      </div>
          <TitleBlock
            title={t("about:aboutPageTitle")}
            description={t("about:aboutPageDescription")}
            maxWidth="780px"
          />
        </div>
      </div>
    </>
  );
};

export default TitleTop;
