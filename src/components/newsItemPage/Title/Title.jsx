const Title = ({ type, content }) => {
  switch (type) {
    case 'h1':
      return <h1>{content}</h1>;
    case 'h2':
      return <h2>{content}</h2>;
    default:
      return null;
  }
};

export default Title;
