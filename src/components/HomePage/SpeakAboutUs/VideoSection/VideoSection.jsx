import Image from "next/image";
import css from "./VideoSection.module.css";

const VideoSection = () => {
  return (
    <div>
      <div className={css.imageContainer}>
        <Image
          src={"/img/home/speakAboutImage.png"}
          alt="Військовий і волонтер"
          width={310}
          height={175}
          className={css.speakAboutImage}
        />
      </div>
    </div>
  );
};

export default VideoSection;
