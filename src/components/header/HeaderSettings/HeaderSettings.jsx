"use client";

import Icon from "@/components/Icon/Icon";
import css from "@/components/header/HeaderSettings/HeaderSettings.module.css";
import MenuSettings from "../MenuSettings/MenuSettings";
import { useState, useEffect } from "react";

const HeaderSettings = () => {
  const [isShowSettings, setIsShowSettings] = useState(false);

  const handleClickSettings = () => {
    setIsShowSettings((prev) => !prev);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
          isShowSettings && setIsShowSettings(false);
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isShowSettings]);

  return (
    <div className={css.settings}>
      <button
        type="button"
        className={css.buttonSettings}
        onClick={handleClickSettings}
      >
        <Icon className={css.iconSettings} name={"icon-settings"} />
      </button>
      {isShowSettings && <MenuSettings setIsShowSettings={setIsShowSettings}/>}
    </div>
  );
};

export default HeaderSettings;
