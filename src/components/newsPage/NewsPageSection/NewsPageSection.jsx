import s from './NewsPageSection.module.css';

const NewsPageSection = ({ children }) => {
  return <section className={s.section}>{children}</section>;
};

export default NewsPageSection;
