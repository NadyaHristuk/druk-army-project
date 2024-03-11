import Container from '@/components/container/Container';
import {
  HeroImage,
  ImagesCollage,
  ImagesCouple,
  ItemsList,
  LetSupport,
  NeedSupportArticle,
  NewsStats,
  Paragraph,
  Quote,
  SingleImage,
  Title,
} from '@/components/newsItemPage';
import s from './page.module.css';

const NewsItemPage = ({ params: { newsId } }) => {
  return (
    <Container>
      <div className={s.wrapper}>
        <div className={s.contentWrapper}>
          <h1>{newsId}</h1>
          <HeroImage />
          <Title
            type={'h1'}
            content={
              'Армія друкарів: як Україна застосовує 3D-технології у війні'
            }
          />
          <NewsStats />
          <Paragraph />
          <SingleImage />
          <ImagesCouple />
          <ImagesCollage />
          <Quote />
          <ItemsList />
          <LetSupport />
        </div>
        <NeedSupportArticle />
      </div>
    </Container>
  );
};

export default NewsItemPage;
