"use client"

import { useTranslation } from "react-i18next";
import Icon from "@/components/Icon/Icon";
import css from "./Info.module.css";

const Info = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className={css.upperPart}>
        <div className={css.box_printed}>
          <Icon className={css.icon_box} name={"icon-packet"} />
          <div className={css.text_content}>
            <p>{t("home:wasPrinted")}</p>
            <span>49 162 <span className={css.kilo}>{t("home:kilo")}</span></span>
          </div>
        </div>
        <div className={css.box_need}>
            <Icon className={css.icon_wagon} name={"icon-wagon"} />
          <div className={css.text_content}>
            <p>{t("home:need")}</p>
            <span>3 501 <span className={css.kilo}>{t("home:kilo")}</span></span>
          </div>
        </div>
      </div>
      <div className={css.middle_box}>
        <Icon className={css.icon_watch} name={"icon-clock-home"} />
        <div className={css.middle_box_text}>
          <p>{t("home:turno")}</p>
          <span>123</span>
        </div>
      </div>
      <div className={css.lowerPart}>
        <div className={css.box_printers}>
          <Icon className={css.icon_bolt} name={"icon-bolt"} />
          <div className={css.text_content}>
            <p>{t("home:printers")}</p>
            <span>3 688</span>
          </div>
        </div>
        <div className={css.box_people}>
          <Icon className={css.icon_printers} name={"icon-two-person"} />
          <div className={css.text_content}>
            <p>{t("home:peoplePrinters")}</p>
            <span>3 034</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
