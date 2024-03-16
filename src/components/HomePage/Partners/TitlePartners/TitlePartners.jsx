import css from "./TitlePartners.module.css";

const TitlePartners = () => {
  return (
    <div className={css.mainTitleContainer}>
      <h2 className={css.mainTitle}>партнери</h2>
      <p className={css.mainTitleText}>
        Вони вірять у нашу місію і допомагають нам здійснювати її на практиці.
        Наші партнери - це надійні союзники, які ділять наші цінності та
        сприяють нашому розвитку.
      </p>
    </div>
  );
};

export default TitlePartners;
