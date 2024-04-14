import s from './HeroImage.module.css';

const HeroImage = () => {
  return (
    <div className={s.imageWrapper}>
      <picture>
        <source
          media="(min-width: 1920px)"
          srcSet="/img/news-item/hero.d.jpg"
        />

        <img
          className={s.image}
          src="/img/news-item/hero.t.m.jpg"
          alt="Адаптивне зображення"
        />
      </picture>
    </div>
  );
};

export default HeroImage;
