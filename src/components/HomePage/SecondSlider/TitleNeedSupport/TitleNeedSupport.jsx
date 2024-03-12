import Container from "@/components/container/Container";
import Icon from "@/components/Icon/Icon";
import css from "./TitleNeedSupport.module.css";

const TitleNeedSupport = () => {
  return (
    <div className={css.titleContainer}>
      <div className={css.container}>
        <div className={css.mainTitleContainer}>
          <h2 className={css.mainTitle}>
            потребуємо вашої
            <span className={css.titleAccent}>підтримки</span>
          </h2>
          <p className={css.mainTitleText}>
            Зробіть пожертву на виготовлення (3D-друк) необхідних принад для
            українських захисників. Кожен внесок має значення, адже ви
            підтримуєте наших героїв та зміцнюєте оборону нашої держави.
          </p>
          <button type="button" className={css.buttonSupport}>
          <span className={css.btnText}><Icon className={css.iconSupportBtn} name={"icon-banknote"} />
          підтримати</span>
        </button>
        </div>
      </div>
    </div>
  );
};

export default TitleNeedSupport;
