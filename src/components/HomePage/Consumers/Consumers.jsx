import TitleConsumers from "./TitleConsumers/TitleConsumers";
import ListConsumers from "./ListConsumers/ListConsumers";
import css from "./Consumers.module.css"

const Consumers = () => {
  return (
      <div className={css.container}>
        <TitleConsumers />
        <ListConsumers/>
      </div>
  );
};

export default Consumers;
