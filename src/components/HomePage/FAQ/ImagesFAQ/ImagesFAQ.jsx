import Image from "next/image";
import soldierImg from "/public/img/home/faq/soldier.webp";
import donorImg from "/public/img/home/faq/donor.webp";
import printerImg from "/public/img/home/faq/printer.webp";
import creatorImg from "/public/img/home/faq/producer.webp";
import css from "./ImagesFAQ.module.css";

const ImagesFAQ = ({setRole, role}) => {
  
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
            width={148.87}
            height={110.82}
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
            width={145.14}
            height={126.95}
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
            width={138.11}
            height={132.32}
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
            width={138.94}
            height={133.15}
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
