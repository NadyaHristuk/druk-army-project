"use client";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import Icon from "@/components/Icon/Icon";
import css from "./Questions.module.css";

const Questions = ({ role }) => {
  const { t } = useTranslation();
  const texts = [
    {
      firstQuestion: t("home:quest1First"),
      firstAnswerOne: t("home:answer1First"),
      firstAnswerTwo: t("home:answer1Second"),
      secondQuestion: t("home:quest1Second"),
      secondAnswerOne: t("home:answer1Two"),
      thirdQuerstion: t("home:quest1Third"),
      thirdAnswerOne: t("home:answer1Three")
    },
    {
      firstQuestion: t("home:quest2First"),
      firstAnswerOne: t("home:answer2First"),
      secondQuestion: t("home:quest2Second"),
      secondAnswerOne: t("home:answer2Second"),
      thirdQuerstion: t("home:quest2Third"),
      thirdAnswerOne: t("home:answer2Third")
    },
    {
      firstQuestion: t("home:quest3First"),
      firstAnswerOne: t("home:answer3First"),
      secondQuestion: t("home:quest3Second"),
      secondAnswerOne: t("home:answer3Second"),
      thirdQuerstion: t("home:quest3Third"),
      thirdAnswerOne: t("home:answer3Third"),
      fourthQuestion: t("home:quest3Fourth"),
      fourthAnswerOne: t("home:answer3Fourth")
    },
    {
      firstQuestion: t("home:quest4First"),
      firstAnswerOne: t("home:answer4First"),
      secondQuestion: t("home:quest4Second"),
      secondAnswerOne: t("home:answer4Second"),
      thirdQuerstion: t("home:quest4Third"),
      thirdAnswerOne: t("home:answer4Third")
    }
  ];

  const [isShowFirst, setIsShowFirst] = useState(false);
  const [isShowSecond, setIsShowSecond] = useState(false);
  const [isShowThird, setIsShowThird] = useState(false);
  const [isShowFourth, setIsShowFourth] = useState(false);
  let text = {};

  if (role === "soldier") {
    text = texts[0];
  } else if (role === "donor") {
    text = texts[2];
  } else if (role === "printer") {
    text = texts[1];
  } else {
    text = texts[3];
  }

  return (
    <div className={css.containerAnswers}>
      <ul>
        <li className={css.listItem}>
          <div className={css.questionContainer}>
            <h3 className={css.question}>{text.firstQuestion}</h3>
            <button
              type="button"
              className={css.btn}
              onClick={() => setIsShowFirst((prev) => !prev)}
            >
              {isShowFirst ? (
                <Icon name={"icon-minus"} className={css.btnIconMinus} />
              ) : (
                <Icon name={"icon-plus"} className={css.btnIcon} />
              )}
            </button>
          </div>
          {isShowFirst && (
            <div className={css.textContent}>
              <p>{text.firstAnswerOne}</p>
             {role === "soldier" && <p>{text.firstAnswerTwo}</p>}
            </div>
          )}
        </li>
        <li className={css.listItem}>
          <div className={css.questionContainer}>
            <h3 className={css.question}>{text.secondQuestion}</h3>
            <button
              type="button"
              className={css.btn}
              onClick={() => setIsShowSecond((prev) => !prev)}
            >
              {isShowSecond ? (
                <Icon name={"icon-minus"} className={css.btnIconMinus} />
              ) : (
                <Icon name={"icon-plus"} className={css.btnIcon} />
              )}
            </button>
          </div>
          {isShowSecond && (
            <div className={css.textContent}>
              <p>{text.secondAnswerOne}</p>
            </div>
          )}
        </li>
        <li className={css.listItem}>
          <div className={css.questionContainer}>
            <h3 className={css.question}>{text.thirdQuerstion}</h3>
            <button type="button" className={css.btn}  onClick={() => setIsShowThird((prev) => !prev)}>
            {isShowThird ? (
                <Icon name={"icon-minus"} className={css.btnIconMinus} />
              ) : (
                <Icon name={"icon-plus"} className={css.btnIcon} />
              )}
            </button>
          </div>
          {isShowThird && (
            <div className={css.textContent}>
              <p>{text.thirdAnswerOne}</p>
            </div>
          )}
        </li>
        {role === "donor" && (<li className={css.listItem}>
          <div className={css.questionContainer}>
            <h3 className={css.question}>{text.fourthQuestion}</h3>
            <button type="button" className={css.btn}  onClick={() => setIsShowFourth((prev) => !prev)}>
            {isShowFourth ? (
                <Icon name={"icon-minus"} className={css.btnIconMinus} />
              ) : (
                <Icon name={"icon-plus"} className={css.btnIcon} />
              )}
            </button>
          </div>
          {isShowFourth && (
            <div className={css.textContent}>
              <p>{text.fourthAnswerOne}</p>
            </div>
          )}
        </li>)}
      </ul>
    </div>
  );
};

export default Questions;
