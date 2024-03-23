"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import designerImg3 from "/public/img/createdBy/designer/designer3.webp";
import front1Img from "/public/img/createdBy/frontend/front1.webp";
import front2Img from "/public/img/createdBy/frontend/front2.webp";
import front3Img from "/public/img/createdBy/frontend/front3.webp";
import teamLead from "/public/img/createdBy/teamlead/teamlead.webp";
import test1Img from "/public/img/createdBy/testPeople/test1.webp";
import test2Img from "/public/img/createdBy/testPeople/test2.webp";
import css from "./InfoCreator.module.css";

const InfoCreator = ({ creator }) => {
 const { t } = useTranslation();

 const creatorsInfo = [
  {
    id: "webDesign",
    name: t("footer:designerBogdan"),
    role: "Web design",
    link: "https://www.linkedin.com/in/bogdan-shypika-821988217/?originalSubdomain=ua",
    website: "https://shypika-bogdan.com/",
    text: t("footer:infoBogdan"),
    img: designerImg3,
  },
  {
    id: "frontVlad",
    name: t("footer:vladyslav"),
    role: "Frontend",
    link: "http://linkedin.com/in/vladyslav-vagin-devfrontend",
    text: t("footer:infoVlad"),
    img: front1Img,
  },
  {
    id: "frontVugar",
    name: t("footer:vugar"),
    role: "Frontend",
    link: "https://www.linkedin.com/in/vugar5gasimov",
    text: t("footer:infoVugar"),
    img: front2Img,
  },
  {
    id: "frontDarina",
    name: t("footer:darina"),
    role: "Frontend",
    link: "https://www.linkedin.com/in/daryna-shevchenkoo/",
    text: t("footer:infoDarina"),
    img: front3Img,
  },
  {
    id: "teamLead",
    name: t("footer:nadiya"),
    role: "Team Lead",
    link: "https://www.linkedin.com/in/nadya-hristuk",
    text: t("footer:infoNadiya"),
    img: teamLead,
  },
  {
    id: "testerKatya",
    name: t("footer:testKaterina"),
    role: "QA Engineer",
    link: "https://www.linkedin.com/in/kate-samoilyk",
    text: t("footer:infoKaterina"),
    img: test1Img,
  },
  {
    id: "testerOlena",
    name: t("footer:testOlena"),
    role: "QA Engineer",
    link: "http://www.linkedin.com/in/olena-salii",
    text: t("footer:infoOlena"),
    img: test2Img,
  },
];

  let activeInfo = {};
  creatorsInfo.map((info) => {
    if (info.id === creator) {
      activeInfo = info;
    }
  });

  return (
    <div className={css.mainContainerInfo}>
      <div className={css.imgContainer}>
        <Image
          src={activeInfo.img}
          alt={activeInfo.name}
          width={181}
          height={261}
        />
      </div>
      <div>
        <p className={css.role}>{activeInfo.role}</p>
        <div className={css.nameAndLink}>
          <p className={css.name}>{activeInfo.name}</p>
          {creator === "webDesign" ? (
            <Link
              href={activeInfo.website}
              target="_blank"
              className={css.website}
            >
              {t("footer:site")}
            </Link>
          ) : (
            <Link
              href={activeInfo.link}
              target="_blank"
              className={css.linkedin}
            >
              <Icon name={"icon-linkedin"} className={css.linkedinIcon} />
            </Link>
          )}
        </div>
        <p className={css.text}>{activeInfo.text}</p>
      </div>
    </div>
  );
};

export default InfoCreator;
