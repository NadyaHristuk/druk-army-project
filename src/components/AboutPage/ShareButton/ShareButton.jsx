"use client";

import React, { useState, useEffect } from "react";
import css from "./ShareButton.module.css";

const ShareButton = ({ children }) => {
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    // Перевіряємо, чи доступний Web Share API
    if (navigator.share) {
      setCanShare(true);
    }
  }, []);

  const share = () => {
    if (canShare) {
      navigator
        .share({
          title: "Назва Вашого сайту",
          url: window.location.href,
        })
        .then(() => console.log("Посилання успішно поділено"))
        .catch(console.error);
    }
  };

  return (
    <button className={css.shareButton} onClick={share} disabled={!canShare}>
      {children}
    </button>
  );
};

export default ShareButton;
