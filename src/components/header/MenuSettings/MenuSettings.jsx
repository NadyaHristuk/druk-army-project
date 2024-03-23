"use client";

import { useRef, useEffect } from "react";
import Switcher from "./Switcher/Switcher";
import LanguagesList from "./LanguagesList/LanguagesList";
import Icon from "@/components/Icon/Icon";
import css from "./MenuSettings.module.css";

const MenuSettings = ({setIsShowSettings}) => {
  const settingsRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target)) {
          setIsShowSettings(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [setIsShowSettings]);

  return (
    <div className={css.settingsBox} ref={settingsRef}>
    <Icon className={css.shape} name={'icon-modal'}/>
      <LanguagesList/>
      <Switcher/>
    </div>
  );
};

export default MenuSettings;
