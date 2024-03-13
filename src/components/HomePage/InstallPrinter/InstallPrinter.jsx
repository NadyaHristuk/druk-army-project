import TitleInstallPrinter from "./TitleInstallPrinter/TitleInstallPrinter";
import Printers from "./Printers/Printers";
import css from "./InstallPrinter.module.css";

const InstallPrinter = () => {
  return (
    <div>
      <div className={css.container}>
        <TitleInstallPrinter />
      </div>
      <Printers />
    </div>
  );
};

export default InstallPrinter;
