"use client"

import { useTranslation } from "react-i18next";
import Icon from "@/components/Icon/Icon";
import css from "./PrintAllTitle.module.css";

const PrintAllTitle = () => {
  const { t } = useTranslation();
  return (
    <div className={css.mainTitleContainer}>
      <h2 className={css.mainTitle}>
        <span className={css.titleFirst}>{t("home:willBePrint")}</span>
        <span className={css.titleAccent}>{t("home:all")}!!!!!!!!!</span>
      </h2>
      <p className={css.mainTitleText}>
       {t("home:printAllTextOne")}
      </p>
      <p className={css.mainTitleText}>
        {t("home:printAllTextTwo")}
      </p>
      <button
              type="button"
              aria-label={t("home:participate")}
              className={css.btn}
            >
              <span className={css.btnText}>
                <Icon className={css.communityIcon} name={"icon-people"} />
                {t("home:participate")}
              </span>
            </button>
    </div>
  );
};

export default PrintAllTitle;
