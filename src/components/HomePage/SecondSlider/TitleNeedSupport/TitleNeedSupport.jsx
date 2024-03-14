"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import Icon from "@/components/Icon/Icon";
import css from "./TitleNeedSupport.module.css";

const TitleNeedSupport = () => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  const isMobileEnd = useMediaQuery({maxWidth: 767.98});
  const isDesktop1200 = useMediaQuery({ minWidth: 1200 });
  return (
    <div className={css.titleContainer}>
      <div className={css.container}>
        <div className={css.mainTitleContainer}>
          <h2 className={css.mainTitle}>
            {t("home:needYour")}
            {currentLocale !== 'ua' && currentLocale !== 'en' ? (<span className={css.titleAccent} style={isMobileEnd ? {fontSize: '20px'} : {fontSize: '36px'}}>{t("home:support")}</span>) : (<span className={css.titleAccent}>{t("home:support")}</span>)}
          </h2>
          <p className={css.mainTitleText}>
        {t("home:needSupportText")}
          </p>
          <button type="button" className={css.buttonSupport}>
            <span className={css.btnText}>
              <Icon className={css.iconSupportBtn} name={"icon-banknote"} />
             {t("notfound:support")}
            </span>
          </button>
        </div>
        {isDesktop1200 && (
        <Image
          src={"/img/home/slider2-man.png"}
          alt={t("home:altMan")}
          width={606}
          height={922}
          className={css.sliderMan}
        />
      )}
      </div>
    </div>
  );
};

export default TitleNeedSupport;
