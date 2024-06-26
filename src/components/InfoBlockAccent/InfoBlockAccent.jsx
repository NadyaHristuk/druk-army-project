import css from "./InfoBlockAccent.module.css";

const InfoBlockAccent = ({
  firstTitle,
  secondTitle,
  description,
  firstDescription,
  secondDescription,
  alignRight,
  marginLeft,
}) => {
  const containerStyle = {
    marginLeft: alignRight ? "auto" : marginLeft || "initial",
  };

  return (
    <div className={css.container} style={containerStyle}>
      {firstTitle && <h3 className={css.firstTitle}>{firstTitle}</h3>}
      {secondTitle && <h2 className={css.secondTitle}>{secondTitle}</h2>}
      {description && <p className={css.description}>{description}</p>}
      {firstDescription && (
        <p className={css.description}>{firstDescription}</p>
      )}
      {secondDescription && (
        <p className={css.description}>{secondDescription}</p>
      )}
    </div>
  );
};

export default InfoBlockAccent;
