"use client";

import { useState, useEffect } from "react";
import css from "@/components/PreLoader/PreLoader.module.css";

const PreLoader = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      }
    }, 1);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className={css.loaderContainer}>
      <div className={css.loaderContent}>
        <div className={css.upperText}>
          <p className={css.textLoading}>Завантаження</p>
          <span className={css.progressNumber}>{progress}%</span>
        </div>
        <div className={css.progressBar}>
          <div className={css.progress} style={{ width: `${progress}%` }}></div>
        </div>
        <p className={css.textEnd}>Завантажуємо фуру с файлами css js</p>
      </div>
    </div>
  );
};

export default PreLoader;
