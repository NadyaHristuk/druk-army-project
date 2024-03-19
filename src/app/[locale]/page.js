import { Suspense } from "react";
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
import Faq from "@/components/HomePage/FAQ/Faq";
import Loading from "./loading";
import css from "./page.module.css";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className={css.sectionHero}>
          <Slider />
          <TitleHomePage />
        </section>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Section>
          <HowItWorks />
        </Section>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Section>
          <PrintAll />
        </Section>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <section className={css.sectionPrinters}>
          <InstallPrinter />
        </section>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Section>
          <Calculator />
        </Section>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <section className={css.sectionLittleAbout}>
          <LittleAbout />
        </section>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Section>
          <SecondSlider />
        </Section>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Section>
          <SpeakAboutUs />
          <SliderNews />
        </Section>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <section className={css.pertnersSection}>
          <Consumers />
          <Partners />
        </section>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Section>
          <Faq />
        </Section>
      </Suspense>
    </>
  );
}
