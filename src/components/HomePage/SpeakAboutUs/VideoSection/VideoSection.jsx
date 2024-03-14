"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "../Modal/Modal";
import css from "./VideoSection.module.css";

const VideoSection = () => {
  const [openFirstModal, setOpenFirstModal] = useState(false);
  const [openSecondModal, setOpenSecondModal] = useState(false);

  const operateScroll = () => {
    if (typeof window !== "undefined") {
      if(openFirstModal || openSecondModal) {
        window.document.body.style.overflow = 'hidden';
      } else {
        window.document.body.style.overflow = 'auto';
      }
    }
  }
  operateScroll();

  return (
    <div className={css.videoSection}>
      <div className={css.imageContainer}>
        <Image
          src={"/img/home/speakAboutImage.webp"}
          alt="Військовий і волонтер"
          width={310}
          height={175}
          className={css.speakAboutImage}
          loading="lazy"
        />
      </div>
      <div className={css.videoContainer}>
        <button
          type="button"
          className={css.btnModalYoutube}
          onClick={() => setOpenFirstModal(true)}
        >
          <Image
            src={"/img/home/video-youtube/youtube3.webp"}
            alt="Новини, де про нас говорять"
            width={310}
            height={175}
          />
        </button>
      </div>
      <div
        className={css.videoContainer}
        onClick={() => setOpenSecondModal(true)}
      >
        <button type="button" className={css.btnModalYoutube}>
          <Image
            src={"/img/home/video-youtube/youtube2.webp"}
            alt="Новини, де про нас говорять"
            width={310}
            height={175}
          />
        </button>
      </div>
      {openFirstModal && (
        <Modal setOpenFirstModal={setOpenFirstModal}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/PUv4p9GvwFU?si=xnk8RIf9OPdS5ud_&amp;start=23"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={css.video}
          ></iframe>
        </Modal>
      )}
      {openSecondModal && (
        <Modal setOpenSecondModal={setOpenSecondModal}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VBEy43hjCRA?si=FvR5afv_GeBBB5dh"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={css.video}
          ></iframe>
        </Modal>
      )}
    </div>
  );
};

export default VideoSection;
