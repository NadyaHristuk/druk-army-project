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

const creatorsInfo = [
  {
    id: "webDesign",
    name: "Шипика Богдан",
    role: "Web design",
    link: "https://www.linkedin.com/in/bogdan-shypika-821988217/?originalSubdomain=ua",
    website: "https://shypika-bogdan.com/",
    text: "Народився 12 травня 2001 року у місті Луганськ. Через російське вторгнення в 2014 році переїхав до Старобільська і в 2015 році був змушений переселитися до Києва через бойові дії в Луганській області. У 2019 почав вивчати графічний дизайн та  програмування.",
    img: designerImg3,
  },
  {
    id: "frontVlad",
    name: "Вагін Владислав",
    role: "Frontend",
    link: "http://linkedin.com/in/vladyslav-vagin-devfrontend",
    text: "Народився 10 березня 1991 року в Одесі. Все життя прожив в Одесі. В 2014 році, закінчивши Морську Академію, ходив в рейси, починаючи від кадета до третього помічника капітана. З початку 2023 року активно вивчаю Fullstack розробку та приймаю участь у різноманітних цікавих IT-проектах.",
    img: front1Img,
  },
  {
    id: "frontVugar",
    name: "Гасімов Вугар",
    role: "Frontend",
    link: "https://www.linkedin.com/in/vugar5gasimov",
    text: "Привіт, мене звати Вугар, я з Азербайджана, розробник інтерфейсу, який захоплюється технологіями вже шість років.  Наразі я роблю внесок у захоплюючий проект, а також вільно володію чотирма мовами та маю навички повної розробки.  Моє бажання вчитися та розвиватися рухає мною, і з безліччю захоплень я ніколи не нудьгую.  Забігаючи на майбутнє, мої амбіції - стати успішним бізнесменом і програмістом.  Я вірю, що за наявності відданості, постійного навчання та цікавого мислення можливо все.",
    img: front2Img,
  },
  {
    id: "frontDarina",
    name: "Шевченко Дарина",
    role: "Frontend",
    link: "https://www.linkedin.com/in/daryna-shevchenkoo/",
    text: "Привіт, я Дарина. В минулому перекладач іспанської. Зараз активно поглиблююсь у світ фулстак розробки. Поза екранним [кодовим] життям, захоплююсь тенісом, медитацією, психологією та волонтерством. Завжди готова допомагати та рости як професіонал і як особистість.",
    img: front3Img,
  },
  {
    id: "teamLead",
    name: "Христюк Надія",
    role: "Team Lead",
    link: "https://www.linkedin.com/in/nadya-hristuk",
    text: "Киянка, живу в Києві. Я — IT спеціаліст, з 2016 року працюю в GoIT як викладач та ментор з FrontEnd і Web BackEnd розробки. Також я працюю як Frontend React JS Developer, маю досвід у розробці на React у різних компаніях. В мене є собака породи - Хаскі, її звати - Агата. Крім кодінгу - люблю малювати, вишивати, і шити для моєї доньки. Мої амбіції спрямовані на подальший розвиток у сфері IT та реалізацію інноваційних проектів.",
    img: teamLead,
  },
  {
    id: "testerKatya",
    name: "Самойлик Катерина",
    role: "QA Engineer",
    link: "https://www.linkedin.com/in/kate-samoilyk",
    text: "Киянка. 2014 року з двома дітьми переїхала до Туреччини. У червні 2023 почала опановувати фах QA engineer. Брала участь у ІТ змаганні DEV Challenge XX - стала фіналістом та отримала 3 місце у категорії.",
    img: test1Img,
  },
  {
    id: "testerOlena",
    name: "Салій Олена",
    role: "QA Engineer",
    link: "http://www.linkedin.com/in/olena-salii",
    text: "Народилась в Дніпрі. В 2022 році переїхала з сім'єю до Польщі. В 2023 році вирішила опанувати фах QA Engineer.",
    img: test2Img,
  },
];

const InfoCreator = ({ creator }) => {
  let activeInfo = {};
  creatorsInfo.map((info) => {
    if (info.id === creator) {
      activeInfo = info;
    }
  });

  return (
    <div className={css.mainContainerInfo}>
      <div className={css.allImages}>
        <div className={css.imgContainer}>
          <Image
            src={activeInfo.img}
            alt={activeInfo.name}
            width={181}
            height={261}
          />
        </div>
      </div>
      <p className={css.role}>{activeInfo.role}</p>
      <div className={css.nameAndLink}>
        <p className={css.name}>{activeInfo.name}</p>
        {creator === "webDesign" ? ( <Link href={activeInfo.website} target="_blank" className={css.website}>сайт</Link>) : (  <Link href={activeInfo.link} target="_blank" className={css.linkedin}>
          <Icon name={"icon-linkedin"} className={css.linkedinIcon} />
        </Link>)}
      </div>
      <p className={css.text}>{activeInfo.text}</p>
    </div>
  );
};

export default InfoCreator;
