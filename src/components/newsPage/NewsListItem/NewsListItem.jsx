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
    <li className={s.itemWrapper}>
      <div className={s.imageWrapper}>
        <Image
          src={imageUrl || '/img/news-item/news-item.jpg'}
          alt={title}
          width={310}
          height={243}
          className={s.image}
        />
      </div>
      <div className={s.textWrapper}>
        <p className={s.author}>
          <Image
            width={15}
            height={16}
            src="/img/news-item/icons/author.svg"
            alt="author icon"
          />
          {author}
        </p>
        <p className={s.time}>
          <Image
            width={17}
            height={16}
            src="/img/news-item/icons/time.svg"
            alt="time icon"
          />
          {time} мін
        </p>
        <p className={s.views}>
          <Image
            width={19}
            height={14}
            src="/img/news-item/icons/views.svg"
            alt="time icon"
          />
          {views}
        </p>
        <h3 className={s.title}>{title}</h3>
        <p className={s.descr}>{descr}</p>
        <button className={s.moreBtn}>докладніше</button>
        <p className={s.date}>{date}</p>
      </div>
    </li>
  );
};

export default NewsListItem;
