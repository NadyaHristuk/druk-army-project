import css from "./TitleFAQ.module.css"

const TitleFAQ = () => {
  return (
    <div className={css.mainTitleContainer}>
      <h2 className={css.mainTitle}>
        <span className={css.titleAccent}>FAQ</span>
        <span className={css.titleFirst}>Найпоширеніші запитання</span>
      </h2>
      <p className={css.mainTitleText}>
        Якщо не вдалося знайти відповідь на ваше запитання, пишіть або
        телефонуйте - ми завжди на зв&apos;язку і готові допомогти.
      </p>
    </div>
  );
};

export default TitleFAQ;
