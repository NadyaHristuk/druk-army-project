"use client";

import { useTranslation } from "react-i18next";
import Icon from "@/components/Icon/Icon";
import Button from "@/components/aboutPage/Button/Button";
import css from "./Button.module.css";

const Buttons = () => {
  const { t } = useTranslation();

  return (
    <div className={css.buttonWrapper}>
      <a
        className={css.button}
        href="/donations"
        aria-label="Перейти на сторінку донатів"
      >
        <Icon className={css.icon} name="icon-banknote" />
        {t("about:linkText")}
      </a>

      <Button />
    </div>
  );
};

export default Buttons;