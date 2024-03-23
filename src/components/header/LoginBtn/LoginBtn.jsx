"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import css from "./LoginBtn.module.css";

const LoginBtn = () => {
  const { t } = useTranslation();

  return (
    <Link href={'https://app.drukarmy.org.ua'} className={css.loginBtn} target="_blank">{t("header:toEnter")}</Link>
  )
}

export default LoginBtn