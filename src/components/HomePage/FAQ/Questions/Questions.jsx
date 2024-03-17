"use client";

import { useState } from "react";
import Icon from "@/components/Icon/Icon";
import css from "./Questions.module.css";

const texts = [
  {
    firstQuestion: "Реально безкоштовно?",
    firstAnswerOne:
      "Так. Ми робимо все можливе, щоб військовому не доводилося витрачати власні кошти на вироби, необхідні для захисту України. Кожен українець особисто зацікавлений в ефективній роботі ЗСУ, тому сьогодні цивільні мають подбати про військових.",
    firstAnswerTwo:
      "Авжеж, будь-що має свою собівартість, і друкармійці докладають максимум зусиль, або знизити її та забезпечити максимальну ефективність роботи донорських коштів: купують обладнання, застосовують свої професійні навички, зв'язки, тощо.",
    secondQuestion: "Як швидко я отримаю замовлення?",
    secondAnswerOne: "У нашому каталозі представлені як готові вироби, так і ті, які треба надрукувати. Термін доставки залежить від наявності виробів на складі або часу потрібного на друк. На всіх виробах вказана наявність, орієнтуйтеся на неї.",
    thirdQuerstion: "Лист-запит є обов'язковим?",
    thirdAnswerOne: "Друкарям не потрібні жодні листи. Проте виробникам, які надають свою продукцію безкоштовно або за собівартістю, необхідні документи для звітності. В описі кожного виробу вказано, чи потрібен лист при замовленні."
  },
  {
    firstQuestion: "Я хочу друкувати, але не маю принтера. Що мені робити?",
    firstAnswerOne:
      "Ми пояснимо, яке обладнання краще вибрати на ваш бюджет, та навчимо якісно друкувати.",
    secondQuestion: "Мені самому купувати пластик чи ви надаєте?",
    secondAnswerOne: "Друкарі, які можуть це собі дозволити, друкують з власного пластику, вони донейтять не лише свій час, але й гроші. Якщо ви можете друкувати, але вам потрібен пластик — ви можете залучити своїх друзів, або підписників у соц.мережах щоб вони допомогли з придбанням філаменту.",
    thirdQuerstion: "Як стати нормальним друкарем?",
    thirdAnswerOne: "Друкувати дедалі більше та поступово опановувати більш складні вироби. Практика, досвід та поради дружньої спільноти стануть у нагоді — і ми завжди готові вам допомогти."
  },
  {
    firstQuestion: "Куди донейтити?",
    firstAnswerOne: "Ми вдячні за всі донати та закликаємо долучатися самим і залучати знайомих до підтримки нашого проекту.",
    secondQuestion: "Маєте мерч?",
    secondAnswerOne: "Вже найближчим часом ви зможете придбати ексклюзивні та лімітовані сувеніри від наших друкарів.",
    thirdQuerstion: "Я хочу розказати про вас!",
    thirdAnswerOne: "Тут знаходиться наш прес-реліз та промо-контент. Ми готові до інтерв'ю та колаборацій.",
    fourthQuestion: "Я маю пластик або інші ресурси, які можуть бути у нагоді.",
    fourthAnswerOne: "Напишіть нам на пошту 3d@drukarmy.org.ua, і ми з задоволенням з вами поспілкуємось."
  },
  {
    firstQuestion: "Я виготовляю продукцію для ЗСУ. Як ви можете мені допомогти?",
    firstAnswerOne: "Ми можемо надрукувати необхідні компоненти для ваших виробів (корпуси або інші деталі), щоб допомогти вам постачати Збройним Силам більше ваших виробів.",
    secondQuestion: "Як мені додати свій виріб до вашого каталогу?",
    secondAnswerOne: "Зареєструйтеся на нашому сайті як виробник та розкажіть нам про ваші вироби. Після верифікаціє ви отримаєте змогу додати свій виріб до каталогу ДрукАрмії. Ми надаємо зручний іструмент для роботи з замовленнями, допомагаємо відстежити процес друку та забезпечуємо зворотній зв'язок від військових.",
    thirdQuerstion: "Чи потрібен мені лист-запит від командира частини?",
    thirdAnswerOne: "Автоматизація — це головна перевага нашої системи. Раніше ви мусили витрачати час на однакові операції. Тепер ви маєте змогу займатися саме виробництвом, а все інше, зокрема генерацію зразків листів-запитів візьме на себе автоматизована система ДрукАрмії.",
  }
];

const Questions = ({ role }) => {
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
