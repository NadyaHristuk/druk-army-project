import PrintAllTitle from "./PrintAllTitle/PrintAllTitle";
import PrintAllImage from "./PrintAllImage/PrintAllImage";
import css from "./PrintAll.module.css";

const PrintAll = () => {
  return (
    <div className={css.sectionPrintAll}>
      <div className={css.container}>
        <PrintAllTitle />
      </div>
      <PrintAllImage />
    </div>
  );
};

export default PrintAll;
