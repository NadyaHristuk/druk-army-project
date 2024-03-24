import React from "react";
import Image from "next/image";
import styles from "./VacanciesModal.module.css";

import btnClose from "../../../../public/img/vacancies/btn-close.jpg";

export const VacanciesModal = ({ isOpen, onClose, children }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return isOpen ? (
    <div className={styles.vacModalBackdrop} onClick={handleBackdropClick}>
      <div className={styles.vacModalContainer}>
        <div className={styles.vacModalSecondContainer}>
          <button
            type="button"
            className={styles.vacModalBtnClose}
            onClick={onClose}
          >
            <Image src={btnClose} className={styles.vacModalBtnCloseImg} alt="close modal"/>
          </button>
          {children}
        </div>
      </div>
    </div>
  ) : null;
};
