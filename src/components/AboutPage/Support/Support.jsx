"use client";

import { useTranslation } from "react-i18next";
import InfoBlockAccent from "@/components/InfoBlockAccent/InfoBlockAccent";
import css from "./Support.module.css";

const Support = () => {
  const { t } = useTranslation();

  return (
    <div className={css.support}>
      <div className={css.backgroundMapBottom}></div>
      <div className={css.mapWrapper}>
        <div className={css.backgroundMapTop}></div>

        <picture className={css.map}>
          <source
            media="(max-width: 479px)"
            srcSet="/img/about/map-320.png"
          />

          <source
            media="(max-width: 767px)"
            srcSet="/img/about/map-480.png"
          />
          <source
            media="(max-width: 959px)"
            srcSet="/img/about/map-768.png"
          />
          <source
            media="(max-width: 1199px)"
            srcSet="/img/about/map-960.png"
          />
          <source
            media="(max-width: 1919px)"
            srcSet="/img/about/map-1200.png"
          />
          <source
            media="(min-width: 1920px)"
            srcSet="/img/about/map-1920.png"
          />

          <img className="" src="/img/about/map-1920.png" alt="map" />
        </picture>
      </div>

      <div className={css.accent}>
        <div className={css.marginLeft}>
          <InfoBlockAccent
            firstTitle={t("about:accentFirstTitle")}
            secondTitle={t("about:accentSecondTitle")}
            firstDescription={t("about:accentFirstDescription")}
            secondDescription={t("about:accentSecondDescription")}
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
