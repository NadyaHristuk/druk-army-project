"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import SliderCards from "./SliderCards/SliderCards";
import InfoCreator from "./InfoCreator/InfoCreator";
import mapImg from "/public/img/createdBy/Map.webp";
import css from "./ContentModal.module.css";

const ContentModal = () => {
  const [creator, setCreator] = useState("webDesign");

  return (
    <div>
      <div className={css.upperPart}>
        <Icon name={'icon-location'} className={creator === "frontVlad" ? css.locationIconOdesa : (creator === "testerOlena" ? css.locationIconDnipro : (creator === "frontDarina" ? css.locationIconFenevichi : css.locationIconKyiv))}/>
        <Image
          src={mapImg}
          alt="карта України"
          width={1168}
          height={778}
          className={css.map}
        />
        <InfoCreator creator={creator}/>
      </div>
      <SliderCards setCreator={setCreator} creator={creator}/>
    </div>
  );
};

export default ContentModal;
