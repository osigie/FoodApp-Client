

import React,{useState} from 'react'
import logo from "./logo.svg";
import Header from "../components/Layout/Header";
import Meals from "../components/Meals/Meals";
import Cart from "../components/Cart/Cart"; 

type Props = {}

const StoreComponent = (props: Props) => {

      const [showCart, setShowCart] = useState(false);
      const showCartFunc = () => {
        setShowCart(true);
      };
      const removeCartFunc = () => {
        setShowCart(false);
      };
  return (
    <div>
      {showCart && <Cart onClose={removeCartFunc} />}
      <Header onShow={showCartFunc} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default StoreComponent;