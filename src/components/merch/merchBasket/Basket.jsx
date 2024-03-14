"use client";

import { useContext } from "react";
import CartContext from "@/context/CartContext";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import styles from "./basket.module.css";

const Basket = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <Link href="/" className={styles.orderBtn}>
        <span className={styles.itemCount}>{cart?.cartItems?.length || 0}</span>
        <Icon name="basket" className={styles.basketIcon} />
        Замовити
      </Link>
    </>
  );
};

export default Basket;
