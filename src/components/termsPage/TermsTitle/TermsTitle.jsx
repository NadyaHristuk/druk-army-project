"use client";

import { useTranslation } from 'react-i18next';
import css from "./TermsTitle.module.css"

const TermsTitle = () => {
  const { t } = useTranslation();
  return (
    <div className={css.titleBlock}>
          <h1 className={css.title}>
            <span>{t("terms:rules")}</span>{t("terms:ofService")}
          </h1>
          <p className={css.titleBlock_text}>
           {t("terms:mainSubtitle")}
          </p>
        </div>
  )
}

export default TermsTitle