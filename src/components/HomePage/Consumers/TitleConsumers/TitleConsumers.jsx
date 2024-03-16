import css from "./TitleConsumers.module.css";

const TitleConsumers = () => {
  return (
    <div className={css.mainTitleContainer}>
      <h2 className={css.mainTitle}>споживачі</h2>
      <p className={css.mainTitleText}>
        Друк Армія щаслива була надати ці безкоштовні вироби заради перемоги та
        сприяння діяльності та ініціативам. Ми віримо в важливість спільної
        підтримки та співпраці у важкі часи.
      </p>
    </div>
  );
};

export default TitleConsumers;
