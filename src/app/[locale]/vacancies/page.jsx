"use client";

import React from "react";
import Image from "next/image";
import styles from "./Vacancies.module.css";
import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
import Icon from "@/components/Icon/Icon";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import officeImg from "../../../../public/img/vacancies/office-tab.jpg";
import office2 from "../../../../public/img/vacancies/office2-tab.jpg";
import ruby from "../../../../public/img/vacancies/ruby.jpg";
import fand from "../../../../public/img/vacancies/fand.jpg";
import manager from "../../../../public/img/vacancies/manager.jpg";
import designer from "../../../../public/img/vacancies/designer.jpg";
import smm from "../../../../public/img/vacancies/smm.jpg";
import { VacanciesFeedbackModal } from "@/components/modals/VacanciesModal/VacanciesFeedbackModal";
import { VacanciesFeedbackResultModal } from "@/components/modals/VacanciesModal/VacanciesFeedbackResultModal";

const vacanciesData = [
  {
    image: ruby,
    title: "Ruby-on-Rail-розробник",
    skills: [
      "Не менше 4 років професійного досвіду розробки програмного забезпечення;",
      "Знання Ruby / Ruby on Rails;",
      "Досвід розробки на основі тестування/поведінки, зокрема RSpec;",
      "Володіння як документами, так і системами реляційних баз даних (зокрема MySQL, PostgreSQL);",
      "Перевірена здатність писати читабельний код і ефективне, масштабоване програмне забезпечення.",
    ],
    btnText: "Відгукнутися",
  },
  {
    image: fand,
    title: "Фандрайзер",
    skills: [
      "Володіння високим рівнем письмової та усної української та англійської мов;",
      "Відповідальність, висока мотивація та вміння працювати у стресових ситуаціях та в умовах стислих дедлайнів;",
      "Вміння добре аналізувати ситуацію, обирати найкращі позиції по проєктах агенції та доносити їх до потенційного спонсора, донора;",
      "Впевнена експертиза в роботі з грантовими пропозиціями та підготовкою необхідної документації, для самостійного отримання фінансування, так і для залучення підприємства до участі у конкурсі на його отримання.",
    ],
    btnText: "Відгукнутися",
  },
  {
    image: smm,
    title: "SMM-managers",
    skills: [
      "Вміння працювати з соціальними мережами та розуміння їх основних принципів;",
      "Можливість працювати в офісі повний робочий день;",
      "Високий рівень володіння українською та російською граматикою.",
    ],
    btnText: "Відгукнутися",
  },
  {
    image: designer,
    title: "Графічний дизайнер",
    skills: [
      "Навички фотореалістичної візуалізації об'єктів — інтер'єр та екстер'єр, візуалізація -статична. Анімація — буде додатковою перевагою;",
      "Відмінне знання пакету 3D-візуалізації: SketchUp, 3DSmax+VRay або Corona, Adobe Photoshop, Adobe After effects, бажано Pro на 3ddd;",
      "Обов’язкове знання меблевих фабрик та виробників різного цінового діапазону, навички комплектації приватних інтер'єрів.",
    ],
    btnText: "Відгукнутися",
  },
  {
    image: manager,
    title: "Менеджер з холодних дзвінків",
    skills: [
      "Клієнтоорієнтованість;",
      "Загальні комунікативні навички, уміння переконувати;",
      "Вміння презентувати та продавати продукт;",
      "Вміння продати пісок в пустелі!!!",
      "Пунктуальна, енергійна і охайна людина.",
    ],
    btnText: "Відгукнутися",
  },
];

const Vacancies = () => {
  const { t } = useTranslation();

  const [isFeedbackModalOpen, setFeedbackModalOpen] = React.useState(false);
  const [isFeedbackResultModalOpen, setFeedbackResultModalOpen] =
    React.useState(false);

  const handleFeedbackOpenModal = () => {
    setFeedbackModalOpen(true);
  };

  const handleFeedbackResultOpenModal = () => {
    setFeedbackResultModalOpen(true);
    setFeedbackModalOpen(false);
  };

  const handleFeedbackCloseModal = () => {
    setFeedbackModalOpen(false);
  };

  const handleFeedbackResultCloseModal = () => {
    setFeedbackResultModalOpen(false);
  };

  return (
    <Container>
      <div>
        <div className={styles.imageContainer}>
          <Image
            src={officeImg}
            alt="office img"
            className={styles.centerCrop}
          />
        </div>

        <div>
          <h2 className={styles.vacTitle}>
            {t("vacancies:title")} <br />
            <span> {t("vacancies:name")}</span>
          </h2>
          <p className={styles.vacTitleDescription}>{t("vacancies:text")}</p>
        </div>
      </div>

      <Section>
        <div className={styles.allVacanciesContainer}>
          {vacanciesData.map((vacancy, index) => (
            <div key={index}>
              <div className={styles.vacancieContainer}>
                <div className={styles.vacImgBtnContainer}>
                  <Image
                    src={vacancy.image}
                    alt="employee img"
                    className={styles.vacancieImg}
                  />
                  {vacancy.btnText && (
                    <button
                      className={styles.btnRespond}
                      type="button"
                      onClick={handleFeedbackOpenModal}
                    >
                      {vacancy.btnText}
                    </button>
                  )}
                  <VacanciesFeedbackModal
                    isModalOpen={isFeedbackModalOpen}
                    handleFeedbackResultOpenModal={
                      handleFeedbackResultOpenModal
                    }
                    handleCloseModal={handleFeedbackCloseModal}
                  />
                  <VacanciesFeedbackResultModal
                    isModalOpen={isFeedbackResultModalOpen}
                    handleCloseModal={handleFeedbackResultCloseModal}
                  />
                </div>
                <div className={styles.vacancieDescriptionContainer}>
                  <h2 className={styles.vacancieTitle}>{vacancy.title}</h2>

                  {vacancy.skills && (
                    <ul>
                      <p className={styles.skillsTitle}> SKILLS REQUIRED:</p>
                      {vacancy.skills.map((skill, skillIndex) => (
                        <li
                          key={skillIndex}
                          className={styles.skillsDescription}
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className={styles.vacBottomSectionContainer}>
          <div className={styles.imageContainer}>
            <Image
              src={office2}
              alt="office img"
              className={styles.centerCrop}
            />
          </div>
          <h3 className={styles.vacTitle}>
            {t("vacancies:title")} <br />
            <span>{t("vacancies:name")}</span>
          </h3>
          <p className={styles.vacBottomDescription}>
            {t("vacancies:support")}{" "}
          </p>
          <div className={styles.vacanciesContacts}>
            <div className={styles.vacContactInfo}>
              <Link href={"tel:+380739207804"}>+38 0(73) 920 78 04</Link>

              <Link href={"mailto:3d@drukarmy.org.ua"}>3d@drukarmy.org.ua</Link>
            </div>
            <button className={styles.btnContactUs} type="button">
              <Icon name="icon-people" className={styles.btnSvg} />
              {t("vacancies:contactUs")}
            </button>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default Vacancies;
