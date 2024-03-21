import Link from "next/link";
import Image from "next/image";
import { nanoid } from "nanoid";
import mark1 from "/public/img/home/consumers/mark1.webp";
import mark2 from "/public/img/home/consumers/mark2.webp";
import mark3 from "/public/img/home/consumers/mark3.webp";
import mark4 from "/public/img/home/consumers/mark4.webp";
import mark5 from "/public/img/home/consumers/mark5.webp";
import mark6 from "/public/img/home/consumers/mark6.webp";
import mark7 from "/public/img/home/consumers/mark7.webp";
import mark8 from "/public/img/home/consumers/mark8.webp";
import mark9 from "/public/img/home/consumers/mark9.webp";
import mark10 from "/public/img/home/consumers/mark10.webp";
import mark11 from "/public/img/home/consumers/mark11.webp";
import mark12 from "/public/img/home/consumers/mark12.webp";
import mark13 from "/public/img/home/consumers/mark13.webp";
import mark14 from "/public/img/home/consumers/mark14.webp";
import mark15 from "/public/img/home/consumers/mark15.webp";
import mark16 from "/public/img/home/consumers/mark16.webp";
import mark17 from "/public/img/home/consumers/mark17.webp";
import blurMark1 from "/public/img/home/consumers/blurMark1.webp";
import blurMark2 from "/public/img/home/consumers/blurMark2.webp";
import blurMark3 from "/public/img/home/consumers/blurMark3.webp";
import css from "./ListConsumers.module.css";

const consumers = [
  {
    img: mark1,
    webUrl: "https://www.zsu.gov.ua/",
    id: nanoid()
  },
  {
    img: mark2,
    webUrl: "https://t.me/ebat_vebalo",
    id: nanoid()
  },
  {
    img: mark3,
    webUrl: "https://t.me/OGHB_108",
    id: nanoid()
  },
  {
    img: mark4,
    webUrl: "https://t.me/robert_magyar",
    id: nanoid()
  },
  {
    img: mark5,
    webUrl: "https://www.facebook.com/110separatebrigade",
    id: nanoid()
  },
  {
    img: mark6,
    webUrl: "https://t.me/kraken_kha",
    id: nanoid()
  },
  {
    img: mark7,
    webUrl: "https://t.me/ZSU_21obspopbr",
    id: nanoid()
  },
  {
    img: mark8,
    webUrl: "https://www.facebook.com/viiskovachastina3066/",
    id: nanoid()
  },
  {
    img: mark9,
    webUrl:
      "https://www.facebook.com/people/108-%D0%BE%D0%BA%D1%80%D0%B5%D0%BC%D0%B0-%D0%B1%D1%80%D0%B8%D0%B3%D0%B0%D0%B4%D0%B0-%D0%A1%D0%B8%D0%BB-%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%97-%D0%BE%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B8-%D0%97%D0%A1%D0%A3/100083010146725/",
      id: nanoid()
  },
  {
    img: mark10,
    webUrl: "https://aerorozvidka.ngo/",
    id: nanoid()
  },
  {
    img: mark11,
    webUrl: "https://t.me/horticka_varta",
    id: nanoid()
  },
  {
    img: mark12,
    webUrl: "https://www.instagram.com/59_ompbr/",
    id: nanoid()
  },
  {
    img: mark13,
    webUrl:
      "https://www.facebook.com/people/%D0%A0%D0%90%D0%A0%D0%9E%D0%93-%D1%83%D0%B4%D0%B0%D1%80%D0%BD%D1%96-%D0%B4%D1%80%D0%BE%D0%BD%D0%B8-24-%D0%9E%D0%9C%D0%91%D1%80/100091477793844/",
      id: nanoid()
  },
  {
    img: mark14,
    webUrl: "https://sof.mil.gov.ua/",
    id: nanoid()
  },
  {
    img: mark15,
    webUrl: "https://t.me/ZSU_21obspopbr",
    id: nanoid()
  },
  {
    img: mark16,
    webUrl: "https://t.me/PEGAS_1OTBr",
    id: nanoid()
  },
  {
    img: mark17,
    webUrl: "https://t.me/jahznebes",
    id: nanoid()
  },
];

const consumersBlurs = [
  {
    blurImg: blurMark1,
    id: nanoid()
  },
  {
    blurImg: blurMark2,
    id: nanoid()
  },
  {
    blurImg: blurMark3,
    id: nanoid()
  },
  {
    blurImg: blurMark1,
    id: nanoid()
  },
  {
    blurImg: blurMark2,
    id: nanoid()
  },
  {
    blurImg: blurMark3,
    id: nanoid()
  },
  {
    blurImg: blurMark1,
    id: nanoid()
  }
];

const ListConsumers = () => {
  return (
    <div>
      <ul className={css.listConsumers}>
        {consumers.map((mark) => (
          <li key={mark.id}>
            <Link href={mark.webUrl} target="_blank">
              <Image
                src={mark.img}
                alt="Перейти на сторінку організації"
                width={62}
                height={66}
                className={css.linkImage}
              />
            </Link>
          </li>
        ))}
        {consumersBlurs.map((item) => (
          <li key={item.id}>
            <Image
              src={item.blurImg}
              alt="bluring mark"
              width={62}
              height={66}
              className={css.linkBlur}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListConsumers;
