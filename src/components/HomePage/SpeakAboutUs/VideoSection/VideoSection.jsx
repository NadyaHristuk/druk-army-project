import Image from "next/image";
import css from "./VideoSection.module.css";

const VideoSection = () => {
  return (
    <div className={css.videoSection}>
      <div className={css.imageContainer}>
        <Image
          src={"/img/home/speakAboutImage.png"}
          alt="Військовий і волонтер"
          width={310}
          height={175}
          className={css.speakAboutImage}
        />
      </div>
      <div className={css.videoContainer}>
        <button type="button" className={css.btnModalYoutube}>
          <Image
            src={"/img/home/video-youtube/youtube3.webp"}
            alt="Новини, де про нас говорять"
            width={310}
            height={175}
          />
        </button>
      </div>
      <div className={css.videoContainer}>
        <button type="button" className={css.btnModalYoutube}>
          <Image
            src={"/img/home/video-youtube/youtube2.webp"}
            alt="Новини, де про нас говорять"
            width={310}
            height={175}
          />
        </button>
      </div>
    </div>
  );
};

export default VideoSection;
