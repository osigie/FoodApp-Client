import classes from "./HeaderCartButton.module.css";
import React, { useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import { useAppSelector } from "../../app/hooks";

type Props = {
  onShow: () => void;
};

const HeaderCartButton = (props: Props) => {
  const [btnBump, setBtnBump] = useState<Boolean>(false);
  const cartItems = useAppSelector((store) => store.cart.items);
  const numOfCartItems = cartItems.reduce((acc, curr, index) => {
    return acc + curr.amount;
  }, 0);

  const buttonClass = `${classes.button} ${btnBump ? classes.bump : ""}`;

  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    }
    setBtnBump(true);

    const timmer = setTimeout(() => {
      setBtnBump(false);
    }, 300);

    return () => {
      clearTimeout(timmer);
    };
  }, [cartItems]);

  return (
    <button className={buttonClass} onClick={props.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
