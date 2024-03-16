import TitlePartners from "./TitlePartners/TitlePartners";
import ListPartners from "./ListPartners/ListPartners";
import css from "./Partners.module.css"

const Partners = () => {
  return (
    <div className={css.container}>
      <TitlePartners />
      <ListPartners/>
    </div>
  );
};

export default Partners;
