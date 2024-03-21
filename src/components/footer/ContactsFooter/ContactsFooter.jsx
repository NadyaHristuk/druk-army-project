"use client";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import Link from "next/link";
import ModalCreators from "../ModalCreators/ModalCreators";
import css from "./ContactsFooter.module.css";

const ContactsFooter = () => {
  const { t } = useTranslation();
  const [isShowCreators, setIsShowCreators] = useState(false);

  return (
    <>
      <div className={css.container}>
        <ul className={css.contactList}>
          <li>
            <p className={css.text}>{t("footer:telephone")}:</p>
            <Link href={"tel:+380739207804"} className={css.contact}>
              +38 0(73) 920 78 04
            </Link>
          </li>
          <li>
            <p className={css.text}>{t("footer:mail")}:</p>
            <Link href={"mailto:3d@drukarmy.org.ua"} className={css.contact}>
              3d@drukarmy.org.ua
            </Link>
          </li>
        </ul>
        <div className={css.copyrightContainer}>
          <p className={css.copyright}>
            &copy; 2023 ДрукАрмія &mdash; {t("footer:printVictory")}!
            <button
              className={css.creatorsLink}
              onClick={() => setIsShowCreators(true)}
            >
              {t("footer:createdBy")}
            </button>
          </p>
        </div>
      </div>
      {isShowCreators && (
        <ModalCreators setIsShowCreators={setIsShowCreators} />
      )}
    </>
  );
};

export default ContactsFooter;
