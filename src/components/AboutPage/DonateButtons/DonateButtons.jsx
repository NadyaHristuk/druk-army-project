"use client";

import { useTranslation } from "react-i18next";
import{ useState } from "react"
import Icon from "@/components/Icon/Icon";
import Modal from "../Modal/Modal";
import css from "./DonateButtons.module.css";


const DonateButtons = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.buttonWrapper}>
      <a
        className={css.donateButton}
        href="/donations"
        aria-label={t("about:donateAriaLabel")}
      >
        <Icon className={css.icon} name="icon-banknote" />
        {t("about:donateText")}
      </a>

      {isModalOpen && <Modal close={handleCloseModal} />}
      <button className={css.infoButton} onClick={() => setIsModalOpen(true)}>
        <Icon
          className={`${css.icon} ${css.secondary}`}
          name="icon-mix-lines"
        />
        {t("about:infoText")}
      </button>
    </div>
  );
};

export default DonateButtons;
