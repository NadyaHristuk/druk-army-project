"use client";

import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import soldierImg from "/public/img/home/faq/soldier.webp";
import donorImg from "/public/img/home/faq/donor.webp";
import printerImg from "/public/img/home/faq/printer.webp";
import creatorImg from "/public/img/home/faq/producer.webp";
import css from "./ImagesFAQ.module.css";

const ImagesFAQ = ({setRole, role}) => {
  const media480 = useMediaQuery({minWidth: 480});
  const media767 = useMediaQuery({maxWidth: 767.98});
  const media768 = useMediaQuery({minWidth: 768});
  const media959 = useMediaQuery({maxWidth: 959.98});
  
const handleClick = (e) => {
  let roleChoosen = e.currentTarget.id;
  setRole(roleChoosen);
}

  return (
    <div>
      <ul className={css.listCards}>
        <li className={css.card} id="soldier" onClick={handleClick}>
          <Image
            src={soldierImg}
            alt="український військовий"
            width={media480 && media767 ? 210.61 : (media768 && media959 ? 172.44 : 148.87)}
            height={media480 && media767 ? 156.79 : (media768 && media959 ? 128.37 : 110.82)}
            className={role === "soldier" ? css.cardImgActive : css.cardImg}
          />
          <div className={role === "soldier" ? css.textContainerActive : css.textContainer}>
            <p>військовий</p>
          </div>
        </li>
        <li className={css.card} id="donor" onClick={handleClick}>
          <Image
            src={donorImg}
            alt="спонсор"
            width={media480 && media767 ? 205.35 : (media768 && media959 ? 168.13 : 145.14)}
            height={media480 && media767 ? 179.61 : (media768 && media959 ? 147.05 : 126.95)}
            className={role === "donor" ? css.cardImgActive : css.cardImg}
          />
          <div  className={role === "donor" ? css.textContainerActive : css.textContainer}>
            <p>донор</p>
          </div>
        </li>
        <li className={css.card} id="printer" onClick={handleClick}>
          <Image
            src={printerImg}
            alt="друкар, що виробляє 3D-вироби"
            width={media480 && media767 ? 195.4 : (media768 && media959 ? 159.98 : 138.11)}
            height={media480 && media767 ? 187.21 : (media768 && media959 ? 153.28 : 132.32)}
            className={role === "printer" ? css.cardImgActive : css.cardImg}
          />
          <div  className={role === "printer" ? css.textContainerActive : css.textContainer}>
            <p>друкар</p>
          </div>
        </li>
        <li className={css.card} id="producer" onClick={handleClick}>
          <Image
            src={creatorImg}
            alt="виробник"
            width={media480 && media767 ? 196.57 : (media768 && media959 ? 160.94 : 138.94)}
            height={media480 && media767 ? 188.38 : (media768 && media959 ? 154.24 : 133.15)}
            className={role === "producer" ? css.cardImgActive : css.cardImg}
          />
          <div className={role === "producer" ? css.textContainerActive : css.textContainer}>
            <p>виробник</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ImagesFAQ;
