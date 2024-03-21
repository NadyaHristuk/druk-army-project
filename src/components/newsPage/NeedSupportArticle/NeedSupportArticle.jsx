import Image from 'next/image';
import s from './NeedSupportArticle.module.css';
import CollectingItem from '../CollectingItem/CollectingItem';

const NeedSupportArticle = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>
        Потребуємо вашої<span>підтримки</span>
      </h2>
      <p className={s.subTitle}>
        Кожен внесок має значення, адже ви підтримуєте наших героїв та зміцнюєте
        оборону нашої держави.
      </p>
      <ul className={s.collectingList}>
        <li className={s.collectingItem}>
          <CollectingItem
            imageUrl={'/img/news-item/cars.jpg'}
            height={67}
            width={229}
            title={'Збір від Андрія'}
            subTitle={'Автівки для ЗСУ'}
            alt={'cars image'}
            procent={32}
          />
        </li>
        <li className={s.collectingItem}>
          <CollectingItem
            imageUrl={'/img/news-item/candle.jpg'}
            height={67}
            width={229}
            title={'Збір від Оксани'}
            subTitle={'Окопні свічки'}
            alt={'candle image'}
            procent={7}
          />
        </li>
      </ul>

      <ul className={s.infoList}>
        <li className={`${s.infoItem} ${s.blue}`}>
          <Image
            className={s.infoIcon}
            width={53}
            height={42}
            src={'/img/news-item/icons/box.svg'}
            alt="box icon"
          />
          <div className={s.infoTextWrapper}>
            <h3 className={s.infoTitle}>Черга замовлень</h3>
            <p className={s.infoSubTitle}>123</p>
          </div>
        </li>
        <li className={`${s.infoItem} ${s.black}`}>
          <Image
            className={s.infoIcon}
            width={53}
            height={42}
            src={'/img/news-item/icons/cart.svg'}
            alt="cart icon"
          />
          <div className={s.infoTextWrapper}>
            <h3 className={s.infoTitle}>Необхідно</h3>
            <p className={s.infoSubTitle}>
              3 501 <span>кг</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NeedSupportArticle;
