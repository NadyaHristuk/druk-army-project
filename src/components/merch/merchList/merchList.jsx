import styles from "./merchList.module.css";
import CardType1 from "../merchCards/cardType1/CardType1";
import CardType2 from "../merchCards/cardType2/CardType2";
import CardType3 from "../merchCards/cardType3/CardType3";
import Basket from "../merchBasket/Basket";

const MerchList = () => {
  return (
    <div className={styles.list}>
      <CardType2 />
      <CardType1 />
      <CardType3 />
      <Basket />
    </div>
  );
};

export default MerchList;
