import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const CartItemsList = () => {
  const { cartItems } = useSelector((store) => store.cartState);

  return (
    <div>
      {cartItems.map((cart) => {
        return <CartItems key={cart.cartID} cart={cart} />;
      })}
    </div>
  );
};

export default CartItemsList;
