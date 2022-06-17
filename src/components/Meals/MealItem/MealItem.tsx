import classes from "./MealItem.module.css";
import React from "react";
import MealItemForm from "./MealItemForm";
import { useAppDispatch } from "../../../app/hooks";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../../features/cart/cartSlice";
type Props = {
  name: string;
  description: string;
  price: number;
  id: string;
};

const MealItem = (props: Props) => {
  const dispatch = useAppDispatch();

  const addToCart = (amount: number) => {
    const item = {
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    };
    dispatch(addItemToCart(item));
  };


  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3> {props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddAmount={addToCart} />
      </div>
    </li>
  );
};

export default MealItem;
