import { VacanciesModal } from "@/components/modals/VacanciesModal/VacanciesModal";
import Image from "next/image";
import modalImg from "../../../../public/img/vacancies/after-apply-modal.png";
import styles from "./VacanciesModal.module.css";
import Icon from "@/components/Icon/Icon";

export const VacanciesFeedbackResultModal = ({
  isModalOpen,
  handleCloseModal,
  handleFeedbackResultOpenModal,
}) => {
  return (
    <VacanciesModal isOpen={isModalOpen} onClose={handleCloseModal}>
      <>
        <div className={styles.vacModalResultImgContainer}>
          <Image
            src={modalImg}
            alt="modal img"
            className={styles.modalImgResult}
          />
        </div>
        <div className={styles.vacModalTitleResultContainer}>
          <div>
            <h2 className={styles.vacModalResultTitle}>
              Дякуємо за <br />
              <span>Відгук</span>
            </h2>
            <p className={styles.vacModalResultDescription}>
              Найближчим часом ми з вами разом будемо різати русню.
            </p>
          </div>
          <div className={styles.vacModalResultBtnContainer}>
            <button className={styles.vacModalBtnWait} type="button">
              Очікувати
            </button>
            <button className={styles.vacModalBtnShare} type="button">
              <Icon
                name="icon-crossed-arrows-modal"
                className={styles.vacModalResultBtnSvg}
              />
              Поділитися
            </button>
          </div>
        </div>
      </>
    </VacanciesModal>
  );
};
