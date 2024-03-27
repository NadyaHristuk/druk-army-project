"use client";

import { useTranslation } from "react-i18next";
import TitleBlock from "@/components/TitleBlock/TitleBlock";
import Container from "@/components/Container/Container";
import css from "./TitleTop.module.css";

const TitleTop = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className={css.titleTop}>
        <TitleBlock
          title={t("how-it-works:titleTop")}
          description={t("how-it-works:titleTopDescription")}
        />
      </div>
    </Container>
  );
};

export default TitleTop;
