import classes from "./Cart.module.css";
import React, { useState } from "react";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import { useAppSelector } from "../../app/hooks";
import { mealObj } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  clearCart,
} from "../../features/cart/cartSlice";
import CheckOut from "./CheckOut";
import { UserData } from "./CheckOut";
import axios from "axios";
type Props = {
  onClose: () => void;
};

const Cart = (props: Props) => {
  const [isCheckOut, setIsCheckOUt] = useState(false);
  const [submit, setSubmit] = useState({
    loading: false,
    didSubmit: false,
    msg: "Sending data ................",
  });
  const dispatch = useDispatch();
  const { items, totalAmount } = useAppSelector((store) => store.cart);
  const total = totalAmount.toFixed(2);

  const handleAdd = (item: mealObj) => {
    const data = {
      id: item.id,
      name: item.name,
      amount: 1,
      price: item.price,
    };
    dispatch(addItemToCart(data));
  };

  const handleRemove = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {items.map((each, key) => {
        // return <li key={key}> {each.name}</li>;
        return (
          <CartItem
            key={key}
            price={each.price}
            name={each.name}
            amount={each.amount}
            onRemove={() => handleRemove(each.id)}
            onAdd={() => handleAdd(each)}
          />
        );
      })}
    </ul>
  );

  const handleIsCheckOut = () => {
    setIsCheckOUt(true);
  };

  const sendData = async (data: UserData) => {
    setSubmit({
      ...submit,
      loading: true,
    });
    try {
      const response = await axios.post("https://food-appp-server.herokuapp.com/user", {
        ...data,
        orders: items,
      });
      setSubmit({
        ...submit,
        didSubmit: true,
        loading: false,
        msg: "Successfully submitted...",
      });
      if (response.status === 201) {
        dispatch(clearCart());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const realContent = (
    <>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${total}`}</span>
      </div>
      {isCheckOut && <CheckOut onClick={props.onClose} sendData={sendData} />}

      {!isCheckOut && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          {items.length > 0 && (
            <button className={classes.button} onClick={handleIsCheckOut}>
              Order
            </button>
          )}
        </div>
      )}
    </>
  );

  const loadingContent = <p>{submit.msg}</p>;
  const SuccessfulContent = (
    <>
      <p>{submit.msg}</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={props.onClose}>
      {!submit.loading && !submit.didSubmit && realContent}
      {submit.loading && loadingContent}
      {!submit.loading && submit.didSubmit && SuccessfulContent}
    </Modal>
  );
};

export default Cart;
