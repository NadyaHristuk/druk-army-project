"use client";

import { useTranslation } from "react-i18next";
import Icon from "../Icon/Icon";
import css from "./Content.module.css";

const Content = () => {
  const { t } = useTranslation();

  return (
    <div className={css.wrapper}>
      <div>
        <h1 className={css.title}> {t("technical-works:title")}</h1>
        <p className={css.description}>{t("technical-works:description")}</p>
      </div>

      <div className={css.info}>
        <div className={css.flex}>
          <p className={css.text}>{t("technical-works:text")}</p>
          <p className={css.time}>05:12</p>
        </div>

        <a
          className={css.button}
          href="/donations"
          aria-label="Перейти на сторінку донатів"
        >
          <Icon className={css.icon} name="icon-banknote" />
          {t("about:linkText")}
        </a>
      </div>
    </div>
  );
};

export default Content;
