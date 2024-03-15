"use client";

import Icon from "@/components/Icon/Icon";
import styles from "./cardType3.module.css";
import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import CartContext from "@/context/CartContext";

const products = [
  {
    id: 5,
    name: "T-Shirt",
    title: "Футболка",
    description:
      "Ця футболка - це не просто одяг, це вираз вашого патріотизму та готовності сміятися над життям. Коли &quot;Армія друку&quot; друкує речі для військових, ми друкуємо футболки для справжніх героїв - вас!",
    price: 1500,
    size: "",
    color: "",
    whiteImg: "/img/merch/t-shirtd.png",
  },
];

const CardType3 = () => {
  const { addItemToCart } = useContext(CartContext);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("білий");
  const handleSelectAmountChange = (event) => {
    setSelectedQuantity(parseInt(event.target.value, 10));
  };
  const handleSelectSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  useEffect(() => {}, [selectedColor]);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
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
      color: selectedColor,
      size: selectedSize,
    });
  };

  return (
    <>
      {products.map((product) => (
        <div key={product.id} className={styles.container}>
          <div className={styles.imgContainer}>
            {selectedColor === "білий" && (
              <Image
                src={product.whiteImg}
                className={styles.img}
                alt={product.name}
                width={300}
                height={300}
              />
            )}
            {selectedColor === "чорний" && (
              <Image
                src={product.whiteImg}
                className={styles.img}
                alt={product.name}
                width={300}
                height={300}
              />
            )}
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
              value={selectedSize}
              onChange={handleSelectSizeChange}
            >
              <option value="M">Розмір: M</option>
              <option value="L">Розмір: L</option>
              <option value="S">Розмір: S</option>
              <option value="XL">Розмір: XL</option>
            </select>
            <div className={styles.radioContainer}>
              Колір:
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="color"
                  value="чорний"
                  checked={selectedColor === "чорний"}
                  onChange={handleColorChange}
                />
                <span
                  className={`${styles.checkmark} ${styles.checkmarkBlack}`}
                ></span>
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="color"
                  value="білий"
                  checked={selectedColor === "білий"}
                  onChange={handleColorChange}
                />
                <span
                  className={`${styles.checkmark} ${styles.checkmarkWhite}`}
                ></span>
              </label>
            </div>
          </div>
          <div className={styles.btns}>
            <select
              className={styles.select}
              value={selectedQuantity}
              onChange={handleSelectAmountChange}
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

export default CardType3;
