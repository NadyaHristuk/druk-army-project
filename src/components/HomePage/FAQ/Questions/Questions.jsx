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
    thirdQuerstion: "Лист-запит є обов'язковим?",
  },
];

const Questions = ({ role }) => {
  let text = {};

  if (role === "soldier") {
    text = texts[0];
  }

  return (
    <div>
      <ul>
        <li>
            <div>
                <h3>{text.firstQuestion}</h3>
            </div>
            <p>{text.firstAnswerOne}</p>
            <p>{text.firstAnswerTwo}</p>
        </li>
        <li>
            <div>
                <h3>{text.secondQuestionQuestion}</h3>
            </div>
            {/* <p>{text.secondAnswerOne}</p>
            <p>{text.secondAnswerTwo}</p> */}
        </li>
        <li>
            <div>
                <h3>{text.thirdQuerstionQuestion}</h3>
            </div>
            {/* <p>{text.thirdAnswerOne}</p>
            <p>{text.thirdAnswerTwo}</p> */}
        </li>
      </ul>
    </div>
  );
};

export default Questions;
