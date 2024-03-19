"use client";

import { useTranslation } from "react-i18next";

import Icon from "@/components/Icon/Icon";
import css from "./Button.module.css";

const Button = () => {
  const { t } = useTranslation();

  return (
    <button className={css.button}>
      <Icon className={css.icon} name="icon-banknote" />
      {t("donation:button")}
    </button>
  );
};

export default Button;
