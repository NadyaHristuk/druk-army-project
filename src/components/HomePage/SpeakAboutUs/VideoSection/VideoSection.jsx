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
      <div className={css.videoContainer}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PUv4p9GvwFU?si=gppEaBZNVzNHTJjA&amp;start=13"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className={css.video}
        ></iframe>
      </div>
      <div className={css.videoContainer}>
        <iframe
          width="560"
          height="315"
          className={css.video}
          src="https://www.youtube.com/embed/VBEy43hjCRA?si=aj3gU9cBAsjo1pc-&amp;start=7"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
