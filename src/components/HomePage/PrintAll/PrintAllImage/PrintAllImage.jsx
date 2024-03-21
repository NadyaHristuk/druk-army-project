import Image from "next/image";
import tweetImg from "/public/img/home/tweet.webp";
import stickerImg from "/public/img/home/sticker.webp";
import css from "./PrintAllImage.module.css"

const PrintAllImage = () => {
  return (
    <div>
      <div className={css.imagesContainer}>
        <Image
          src={stickerImg}
          alt="Мультяшний кіт військовий"
          width={270}
          height={319}
          className={css.catImage}
          loading="lazy"
        />
        <Image
          src={tweetImg}
          alt="Повідомлення в Tweeter під ніком Майор Чорнобаєв"
          width={204.8}
          height={114.3}
          className={css.tweet}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default PrintAllImage;
