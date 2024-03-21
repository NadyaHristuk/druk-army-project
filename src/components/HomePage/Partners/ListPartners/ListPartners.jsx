import Link from "next/link";
import Image from "next/image";
import { nanoid } from "nanoid";
import partner1 from "/public/img/home/partners/partner1.webp";
import partner2 from "/public/img/home/partners/partner2.webp";
import partner3 from "/public/img/home/partners/partner3.webp";
import partner4 from "/public/img/home/partners/partner4.webp";
import partner5 from "/public/img/home/partners/partner5.webp";
import partner6 from "/public/img/home/partners/partner6.webp";
import partner7 from "/public/img/home/partners/partner7.webp";
import partner8 from "/public/img/home/partners/partner8.webp";
import partner9 from "/public/img/home/partners/partner9.webp";
import partner10 from "/public/img/home/partners/partner10.webp";
import partner11 from "/public/img/home/partners/partner11.webp";
import partner12 from "/public/img/home/partners/partner12.webp";
import partner13 from "/public/img/home/partners/partner13.webp";
import partner14 from "/public/img/home/partners/partner14.webp";
import partner15 from "/public/img/home/partners/partner15.webp";
import partner16 from "/public/img/home/partners/partner16.webp";
import blurImg1 from "/public/img/home/partners/blur1.webp";
import blurImg2 from "/public/img/home/partners/blur2.webp";
import css from "./ListPartners.module.css";

const partners = [
  {
    img: partner1,
    webUrl: "https://novaposhta.ua/",
  },
  {
    img: partner2,
    webUrl: "https://www.ldc-ua.org/",
  },
  {
    img: partner3,
    webUrl: "https://manifest.in.ua/",
  },
  {
    img: partner4,
    webUrl: "https://turumburum.ua/",
  },
  {
    img: partner5,
    webUrl: "https://monofilament.com.ua/",
  },
  {
    img: partner6,
    webUrl: "https://lbl-corp.com/ua/",
  },
  {
    img: partner7,
    webUrl: "https://mobizon.ua/",
  },
  {
    img: partner8,
    webUrl: "https://shop.plexiwire.com.ua/",
  },
  {
    img: partner9,
    webUrl: "https://sip-gsm.in.ua/",
  },
  {
    img: partner10,
    webUrl: "https://linktr.ee/kiberk",
  },
  {
    img: partner11,
    webUrl: "https://eppoua.com/",
  },
  {
    img: partner12,
    webUrl: "https://3d4u.com.ua/uk/",
  },
  {
    img: partner13,
    webUrl: "https://3dplast.biz/ua/",
  },
  {
    img: partner14,
    webUrl: "https://artline.ua/uk",
  },
  {
    img: partner15,
    webUrl:
      "https://pochatok-filament.uaprom.net/ua/g94039223-plastik-dlya-printera?sort=-price",
  },
  {
    img: partner16,
    webUrl: "https://goncharenkocentre.com.ua/",
  },
];

const blurImages = [
  { blurImg: blurImg1, id: nanoid() },
  { blurImg: blurImg2, id: nanoid() },
  { blurImg: blurImg1, id: nanoid() },
  { blurImg: blurImg2, id: nanoid() },
];

const ListPartners = () => {
  return (
    <div>
      <ul className={css.listPartners}>
        {partners.map((part) => (
          <li key={part.webUrl}>
            <Link href={part.webUrl} target="_blank">
              <Image
                src={part.img}
                alt="Перейти на сторінку партнера"
                width={119}
                height={35}
                className={css.linkImage}
              />
            </Link>
          </li>
        ))}
        {blurImages.map((item) => (
          <li key={item.id}>
            <Image
              src={item.blurImg}
              alt="місце для майбутніх партнерів"
              width={119}
              height={35}
              className={css.linkBlur}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPartners;
