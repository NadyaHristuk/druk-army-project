"use client";

import { useTranslation } from "react-i18next";
import TitleBlock from "@/components/TitleBlock/TitleBlock";
import css from "./TitleBottom.module.css";

const TitleBottom = () => {
  const { t } = useTranslation();

  return (
    <div className={css.titleBottom}>
      <TitleBlock
        title={t("about:titleBottom")}
        description={t("about:titleBottomDescription")}
      />
    </div>
  );
};

export default TitleBottom;
