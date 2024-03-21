"use client";

import Icon from "@/components/Icon/Icon";
import styles from "./cardType1.module.css";
import Image from "next/image";
import { useContext, useState } from "react";
import CartContext from "@/context/CartContext";
const products = [
  {
    id: 4,
    name: "Flag",
    title: "Прапор",
    description:
      "Цей прапор не просто шматок полотна – це магічний мостик між вашим          патріотизмом і безмежною креативністю. З &quot;Прапором &quot;Армії          друку&quot; ви отримаєте веселу дозу гумору, але з справжньою метою.",
    price: 250,
    whiteImg: "/img/merch/flag-white.png",
  },
];

const CardType1 = () => {
  const { addItemToCart } = useContext(CartContext);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleSelectChange = (event) => {
    setSelectedQuantity(parseInt(event.target.value, 10));
  };

  const addToCartHandler = (product) => {
    addItemToCart({
      id: product.id,
      name: product.name,
      title: product.title,
      description: product.description,
      price: product.price,
      image: product.whiteImg,
      quantity: selectedQuantity,
    });
  };

  return (
    <>
      {products.map((product) => (
        <div className={styles.container} key={product.id}>
          <div className={styles.imgContainer}>
            <Image
              src={product.whiteImg}
              className={styles.img}
              alt={product.name}
              width={300}
              height={300}
            />
            <span className={styles.price}>
              {product.price} <Icon name="hryvna" className={styles.icon} />
            </span>
          </div>
          <div className={styles.details}>
            <h2 className={styles.title}>{product.title}</h2>
            <p className={styles.text}>{product.description}</p>
          </div>
          <div className={styles.btns}>
            <select
              className={styles.select}
              value={selectedQuantity}
              onChange={handleSelectChange}
            >
              <option value={1}>Кількість: 1 шт.</option>
              <option value={2}>Кількість: 2 шт.</option>
              <option value={3}>Кількість: 3 шт.</option>
            </select>
            <button
              className={styles.btn}
              onClick={() => addToCartHandler(product)}
            >
              до кошика
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardType1;
