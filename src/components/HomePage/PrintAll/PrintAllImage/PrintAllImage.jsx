import Image from "next/image";
import React from "react";
import css from "./PrintAllImage.module.css"

const PrintAllImage = () => {
  return (
    <div>
      <div className={css.imagesContainer}>
        <Image
          src={"/img/home/sticker.png"}
          alt="Мультяшний кіт військовий"
          width={270}
          height={319}
          className={css.catImage}
        />
        <Image
          src={"/img/home/tweet.png"}
          alt="Повідомлення в Tweeter під ніком Майор Чорнобаєв"
          width={204.8}
          height={114.3}
          className={css.tweet}
        />
      </div>
    </div>
  );
};

export default PrintAllImage;
