'use client';
import Image from 'next/image';
import s from './CollectingItem.module.css';
import { useEffect, useMemo, useRef, useState } from 'react';

const CollectingItem = ({
  imageUrl,
  alt,
  width,
  height,
  title,
  subTitle,
  procent,
}) => {
  const [procentWidth, setProcentWidth] = useState(0);
  const progressBarRef = useRef(null);

  useEffect(() => {
    progressBarRef.current &&
      setProcentWidth(
        Math.round((progressBarRef.current.clientWidth / 100) * procent)
      );
  }, [procent]);
  return (
    <div className={s.wrapper}>
      <div className={s.imageWrapper}>
        <Image
          className={s.image}
          width={width}
          height={height}
          src={imageUrl}
          alt={alt}
        />
      </div>
      <div className={s.contentWrapper}>
        <p className={s.title}>{title}</p>
        <h3 className={s.subTitle}>{subTitle}</h3>
        <div className={s.progressBar} ref={progressBarRef}>
          <div className={s.progress} style={{ width: procentWidth }}>
            {procent}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectingItem;
