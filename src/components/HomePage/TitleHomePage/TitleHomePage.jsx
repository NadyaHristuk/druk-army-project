"use client"

import { useTranslation } from 'react-i18next';
import Link from "next/link";
import Container from "@/components/container/Container";
import Icon from "@/components/Icon/Icon";
import css from "./TitleHomePage.module.css";

const TitleHomePage = () => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <>
      <Container className={css.container}>
        <div className={css.mainTitleContainer}>
          <h1 className={css.mainTitle}>
            {t("home:printVictory")}
            <span className={css.titleAccent}>
             {t("home:together")} <span>da</span>
            </span>
          </h1>
          <p className={css.mainTitleText}>
            {t("home:mainTitleText")}
          </p>
          <div className={css.contactsUs}>
            <Link
              href={'https://app.drukarmy.org.ua'}
              aria-label={t("home:participate")}
              target='_blank'
              className={css.btn}
            >
              <span className={currentLocale === "de" ? css.btnTextGermany : css.btnText}>
                <Icon className={css.communityIcon} name={"icon-people"} />
                {t("home:participate")}
              </span>
            </Link>
            <div className={css.links}>
                <Link href={"tel:+380739207804"} aria-label="Телефон для контатку з ДрукАрмією">+38 0(73) 920 78 04</Link>
                <Link href={"mailto:3d@drukarmy.org.ua"} aria-label="Пошта для контатку з ДрукАрмією">3d@drukarmy.org.ua</Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TitleHomePage;
