"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import css from "./CardsList.module.css";

const CardsList = () => {
  const { t } = useTranslation();

  const cards = [
    {
      src: "/img/home/process/solder.png",
      alt: t("home:orderAlt"),
      number: 1,
      descTitle: t("home:order"),
      descText: t("home:orderText"),
    },
    {
      src: "/img/home/process/printer.png",
      alt: t("home:printAlt"),
      number: 2,
      descTitle: t("home:print"),
      descText: t("home:printText"),
    },
    {
      src: "/img/home/process/volunteer.png",
      alt: t("home:deliveryAlt"),
      number: 3,
      descTitle: t("home:delivery"),
      descText: t("home:deliveryText"),
    },
  ];

  return (
    <div className={css.cardsSection}>
      <ul className={css.listCards}>
        {cards.map((card) => (
          <li key={card.number} className={css.cardItem}>
            <div className={css.imageContainer}>
              <Image
                src={card.src}
                alt={card.alt}
                width={300}
                height={302}
                priority
                className={css.imageCard}
              />
            </div>
            <div className={css.descriptionContainer}>
              <div className={css.number}>
                <p>{card.number}</p>
              </div>
              <div className={css.description}>
                <h3>{card.descTitle}</h3>
                <p>{card.descText}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardsList;
