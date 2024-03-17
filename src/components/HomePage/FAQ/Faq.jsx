"use client";

import { useState } from "react";
import TitleFAQ from "./TitleFAQ/TitleFAQ";
import ImagesFAQ from "./ImagesFAQ/ImagesFAQ";
import Questions from "./Questions/Questions";
import css from "./Faq.module.css";

const Faq = () => {
  const [role, setRole] = useState("soldier");

  return (
    <div className={css.container}>
      <TitleFAQ />
      <div className={css.imagesAnswers}>
        <ImagesFAQ setRole={setRole} role={role} />
        <Questions role={role} />
      </div>
    </div>
  );
};

export default Faq;
