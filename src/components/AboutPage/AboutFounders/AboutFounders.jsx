"use client";

import { useTranslation } from "react-i18next";
import css from "./AboutFounders.module.css";

const AboutFounders = () => {
  const { t } = useTranslation();

  return (
    <div className={css.about}>
      <div className={css.backgroundAbout}></div>
      <div className={css.aboutCard}>
        <picture className={css.photo}>
          <source
            className={css.photo}
            media="(max-width: 479px)"
            srcSet="/img/about/volnov-320.jpg"
          />

          <source
            className={css.photo}
            media="(max-width: 767px)"
            srcSet="/img/about/volnov-480.jpg"
          />
          <source
            className={css.photo}
            media="(max-width: 959px)"
            srcSet="/img/about/volnov-768.jpg"
          />
          <source
            className={css.photo}
            media="(max-width: 1199px)"
            srcSet="/img/about/volnov-960.jpg"
          />
          <source
            className={css.photo}
            media="(max-width: 1919px)"
            srcSet="/img/about/volnov-1200.jpg"
          />
          <source
            className={css.photo}
            media="(min-width: 1920px)"
            srcSet="/img/about/volnov-1920.jpg"
          />

          <img
            className={css.photo}
            src="/img/about/volnov-1920.jpg"
            alt="volnov"
          />
        </picture>

        <div className={css.aboutInfo}>
          <h2 className={css.aboutTitle}>{t("about:aboutTitleVolnov")}</h2>
          <p className={css.aboutText}>{t("about:aboutTextVolnov")}</p>
        </div>
      </div>

      <div className={css.aboutCard}>
        <picture className={css.photo}>
          <source
            className={css.photo}
            media="(max-width: 480px)"
            srcSet="/img/about/sharaievskyi-320.jpg"
          />

          <source
            className={css.photo}
            media="(max-width: 767px)"
            srcSet="/img/about/sharaievskyi-480.jpg"
          />
          <source
            className={css.photo}
            media="(max-width: 959px)"
            srcSet="/img/about/sharaievskyi-768.jpg"
          />
          <source
            className={css.photo}
            media="(max-width: 1199px)"
            srcSet="/img/about/sharaievskyi-960.jpg"
          />
          <source
            className={css.photo}
            media="(max-width: 1919px)"
            srcSet="/img/about/sharaievskyi-1200.jpg"
          />
          <source
            className={css.photo}
            media="(min-width: 1920px)"
            srcSet="/img/about/sharaievskyi-1920.jpg"
          />

          <img
            className={css.photo}
            src="/img/about/sharaievskyi-1920.jpg"
            alt="sharaievskyi"
          />
        </picture>

        <div className={css.aboutInfo}>
          <h2 className={css.aboutTitle}>
            {t("about:aboutTitleSharaievskyi")}
          </h2>
          <p className={css.aboutText}>{t("about:aboutTextSharaievskyi")}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutFounders;
