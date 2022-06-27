import classes from "./Order.module.css";
import React from "react";

type Props = {
  name: string;
  amount: string;
  price: number;
};

const Order = (props: Props) => {
  return (
    <div className={classes.orders}>
      <span>{props.name}</span>
      <span>{props.amount}</span>
      <span>{props.price}</span>
    </div>
  );
};

export default Order;


