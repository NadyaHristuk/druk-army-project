"use client";

import { useState } from "react";
import TitleFAQ from "./TitleFAQ/TitleFAQ"
import ImagesFAQ from "./ImagesFAQ/ImagesFAQ"
import css from "./Faq.module.css"

const Faq = () => {
const [role, setRole] = useState('soldier');

  return (
    <div className={css.container}>
        <TitleFAQ/>
        <ImagesFAQ setRole={setRole} role={role}/>
    </div>
  )
}

export default Faq