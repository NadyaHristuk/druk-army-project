import TitleSpeakAbout from "./TitleSpeakAbout/TitleSpeakAbout"
import VideoSection from "./VideoSection/VideoSection"
import css from "./SpeakAboutUs.module.css"

const SpeakAboutUs = () => {
  return (
    <div className={css.container}>
        <TitleSpeakAbout/>
        <VideoSection/>
    </div>
  )
}

export default SpeakAboutUs