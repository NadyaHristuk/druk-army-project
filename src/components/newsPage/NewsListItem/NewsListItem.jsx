import Image from 'next/image';
import s from './NewsListItem.module.css';

const NewsListItem = ({
  imageUrl,
  author,
  date,
  time,
  title,
  descr,
  views,
}) => {
  return (
    <div className={s.itemWrapper}>
      <div className={s.imageWrapper}>
        <Image
          src={imageUrl || '/img/news-item/hero.t.m.jpg'}
          alt={title}
          width={165}
          height={243}
          className={s.image}
        />
      </div>
      <p className={s.author}>{author}</p>
      <p className={s.time}>{time} мін</p>
      <p className={s.views}>{views}</p>
      <h3 className={s.title}>{title}</h3>
      <p className={s.descr}>{descr}</p>
      <button className={s.moreBtn}>докладніше</button>
      <p className={s.date}>{date}</p>
    </div>
  );
};

export default NewsListItem;
