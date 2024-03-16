import Slider from "@/components/HomePage/Slider/Slider.jsx";
import TitleHomePage from "@/components/HomePage/TitleHomePage/TitleHomePage";
import Section from "@/components/Section/Section";
import HowItWorks from "@/components/HomePage/HowItWorksTitle/HowItWorks";
import PrintAll from "@/components/HomePage/PrintAll/PrintAll";
import InstallPrinter from "@/components/HomePage/InstallPrinter/InstallPrinter";
import Calculator from "@/components/HomePage/Calculator/Calculator";
import LittleAbout from "@/components/HomePage/LittleAbout/LittleAbout";
import SecondSlider from "@/components/HomePage/SecondSlider/SecondSlider";
import SpeakAboutUs from "@/components/HomePage/SpeakAboutUs/SpeakAboutUs";
import SliderNews from "@/components/HomePage/Slider_News/SliderNews";
import Consumers from "@/components/HomePage/Consumers/Consumers";
import Partners from "@/components/HomePage/Partners/Partners";
import css from "./page.module.css"

export default function Home() {
  return (
    <>
        <section className={css.sectionHero}>
          <Slider />
          <TitleHomePage />
        </section>
        <Section>
          <HowItWorks/>
        </Section>
        <Section>
          <PrintAll/>
        </Section>
        <section className={css.sectionPrinters}>
          <InstallPrinter/>
        </section>
        <Section>
          <Calculator/>
        </Section>
        <section className={css.sectionLittleAbout}>
          <LittleAbout/>
        </section>
        <Section>
          <SecondSlider/>
        </Section>
        <Section>
          <SpeakAboutUs/>
          <SliderNews/>
        </Section>
        <Section>
          <Consumers/>
          <Partners/>
        </Section>
    </>
  );
}
