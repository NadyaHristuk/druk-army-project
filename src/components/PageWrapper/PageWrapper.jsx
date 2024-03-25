import s from './PageWrapper.module.css';

const PageWrapper = ({ children }) => {
  return <div className={s.pageWrapper}>{children}</div>;
};

export default PageWrapper;
