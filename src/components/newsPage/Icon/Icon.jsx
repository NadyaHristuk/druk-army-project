import s from './Icon.module.css';

export const ChevronLeft = ({ className, ...props }) => {
  return (
    <svg
      width="16"
      height="28"
      viewBox="0 0 16 28"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g>
        <rect
          x="13.7695"
          y="27.4934"
          width="19.4408"
          height="3.11052"
          transform="rotate(-135 13.7695 27.4934)"
        />
        <rect
          x="0.0195312"
          y="13.7466"
          width="19.4408"
          height="3.11052"
          transform="rotate(-45 0.0195312 13.7466)"
        />
      </g>
    </svg>
  );
};

export const ChevronRight = ({ className, ...props }) => {
  return (
    <svg
      width="16"
      height="28"
      viewBox="0 0 16 28"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect
        x="2.19922"
        width="19.4408"
        height="3.11052"
        transform="rotate(45 2.19922 0)"
      />
      <rect
        x="15.9473"
        y="13.7467"
        width="19.4408"
        height="3.11052"
        transform="rotate(135 15.9473 13.7467)"
      />
    </svg>
  );
};

export const Dots = ({ className, ...props }) => {
  const dotsList = [1, 2, 3];
  return (
    <div className={s.dotsWrapper}>
      {dotsList.map((el) => (
        <svg
          width="6"
          height="6"
          viewBox="0 0 6 6"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
          key={el}
        >
          <rect width="6" height="6" />
        </svg>
      ))}
    </div>
  );
};
