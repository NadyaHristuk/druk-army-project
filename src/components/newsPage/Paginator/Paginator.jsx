'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import * as Icon from '../Icon/Icon';
import s from './Paginator.module.css';

const Paginator = ({ activePage, pageAmount, onChangePage }) => {
  const [curPage, setCurPage] = useState(activePage);
  const isMobile = useMediaQuery({ query: '(max-width: 479.98px)' });

  const curPageRef = useRef(curPage);

  const paginatorLength = isMobile ? 5 : 7;
  const maxPageAmount =
    pageAmount <= paginatorLength ? pageAmount : paginatorLength;

  const pagesList = useMemo(
    () =>
      Array(maxPageAmount)
        .fill(null)
        .map((_, i) => i + 1)
        .map((el, idx, arr) => {
          if (pageAmount <= maxPageAmount) {
            return {
              num: el,
              content: 'num',
              accent: idx + 1 === curPage,
            };
          } else {
            const changedBtnLength = paginatorLength - 2;

            if (
              curPage > changedBtnLength &&
              curPage < pageAmount - changedBtnLength + 1
            ) {
              const shortChangedBtnLength = changedBtnLength - 2;
              const num =
                idx === 0
                  ? 1
                  : idx === arr.length - 1
                  ? pageAmount
                  : curPage -
                    Math.ceil(shortChangedBtnLength) +
                    idx +
                    (Math.floor(shortChangedBtnLength / 2) - 1);
              return {
                num,
                content: idx == arr.length - 2 || idx == 1 ? 'dots' : 'num',
                accent: num === curPage,
              };
            }

            if (curPage <= changedBtnLength) {
              const num = idx === arr.length - 1 ? pageAmount : el;
              return {
                num,
                content: idx !== arr.length - 2 ? 'num' : 'dots',
                accent: idx + 1 === curPage,
              };
            }
            if (curPage > pageAmount - changedBtnLength) {
              const num =
                idx === 0 ? 1 : pageAmount - (changedBtnLength - idx + 1);
              return {
                num,
                content: idx !== 1 ? 'num' : 'dots',
                accent: num === curPage,
              };
            }
          }
        }),
    [curPage, maxPageAmount, pageAmount, paginatorLength]
  );

  const handlePageClick = useCallback((page) => {
    setCurPage(page);
  }, []);
  const handleNextPage = useCallback(() => {
    setCurPage((p) => (p + 1 <= pageAmount ? p + 1 : p));
  }, [pageAmount]);
  const handlePrevPage = useCallback(() => {
    setCurPage((p) => (p - 1 >= 1 ? p - 1 : p));
  }, []);

  useEffect(() => {
    if (curPageRef.current === curPage) {
      curPageRef.current = 0;
      return;
    }
    onChangePage && onChangePage(curPage);
    // eslint-disable-next-line
  }, [curPage]);

  return (
    <div className={s.wrapper}>
      <button
        className={`${s.btn} ${s.chevron}`}
        disabled={curPage <= 1}
        onClick={handlePrevPage}
      >
        <Icon.ChevronLeft className={s.chevronIcon} />
      </button>
      {pagesList.map(({ num, content, accent }, i) => {
        switch (content) {
          case 'num':
            return (
              <button
                key={i}
                className={`${s.btn} ${accent ? s.accent : ''}`}
                onClick={() => handlePageClick(num)}
              >
                {num}
              </button>
            );
          case 'dots':
            return (
              <button key={i} className={s.btn} disabled>
                <span className={s.notNumber}>
                  <Icon.Dots className={s.dotsIcon} />
                </span>
              </button>
            );
        }
      })}
      <button
        className={`${s.btn} ${s.chevron}`}
        disabled={curPage >= pageAmount}
        onClick={handleNextPage}
      >
        <Icon.ChevronRight className={s.chevronIcon} />
      </button>
    </div>
  );
};

export default Paginator;
