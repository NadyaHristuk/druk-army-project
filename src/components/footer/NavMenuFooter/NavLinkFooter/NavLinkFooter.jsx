"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import css from "./NavLinkFooter.module.css";

const NavLinkFooter = ({ item }) => {
  const {i18n} = useTranslation();
  const currentLocale = i18n.language;
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${css.link} ${pathName === item.path && css.active}`}
      aria-label={`Перейти в розділ ${item.title}`}
      style={currentLocale === "de" ? {fontSize: "14px"} : {fontSize: "16px"}}
    >
      {item.title}
    </Link>
  );
};

export default NavLinkFooter;