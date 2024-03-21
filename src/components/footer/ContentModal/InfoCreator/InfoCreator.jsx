import designerImg1 from "/public/img/createdBy/designer/designer1.jpg"
import front1Img from "/public/img/createdBy/frontend/front1.jpg"
import css from "./InfoCreator.module.css"

const creatorsInfo = [
    {
        id: "webDesign",
        name: "Шипика Богдан",
        role: "Web design",
        link: "",
        text: "Народився 12 травня 2001 року у місті Луганськ. Через російське вторгнення в 2014 році переїхав до Старобільська і в 2015 році був змушений переселитися до Києва через бойові дії в Луганській області. У 2019 почав вивчати графічний дизайн та  програмування.",
        img: designerImg1
    },
    {
        id: "frontVlad",
        name: "Вагін Владислав",
        role: "Frontend",
        link: "http://linkedin.com/in/vladyslav-vagin-devfrontend",
        text: "Народився 10 березня 1991 року в Одесі. Все життя прожив в Одесі, в 2014 році закінчивши Морську Академію ходив в рейси починаючи від кадета до третього помічника капітана. З початку 2023 року активно вивчаю Fullstack розробку та приймаю участь у різноманітних цікавих IT-проектах.",
        img: front1Img
    }
]

const InfoCreator = ({creator}) => {
  return (
    <div>InfoCreator</div>
  )
}

export default InfoCreator