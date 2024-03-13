import css from "./TitleSpeakAbout.module.css";

const TitleSpeakAbout = () => {
  return (
    <div className={css.mainTitleContainer}>
      <h2 className={css.mainTitle}>
        <span className={css.titleFirst}>змі та військові</span>
        <span className={css.titleAccent}>про нас говорять</span>
      </h2>
      <p className={css.mainTitleText}>
        ЗМІ відзначають нашу організацію за високу ефективність та професійний
        підхід до роботи. Військові також відгукуються дуже позитивно про
        ДрукАрмію.
      </p>
    </div>
  );
};

export default TitleSpeakAbout;
