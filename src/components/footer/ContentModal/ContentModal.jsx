"use client";

import { useState } from "react";
import Image from "next/image";
import SliderCards from "./SliderCards/SliderCards";
import InfoCreator from "./InfoCreator/InfoCreator";
import mapImg from "/public/img/createdBy/Map.webp";
import css from "./ContentModal.module.css";

const ContentModal = () => {
  const [creator, setCreator] = useState("webDesign");

  return (
    <div>
      <div>
        <Image
          src={mapImg}
          alt="карта України"
          width={1168}
          height={778}
          className={css.map}
        />
        <InfoCreator creator={creator}/>
      </div>
      <SliderCards setCreator={setCreator} />
    </div>
  );
};

export default ContentModal;
