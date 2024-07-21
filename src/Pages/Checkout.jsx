import React from "react";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import SectionTitle from "../Components/SectionTitle";
import CheckoutForm from "../Components/CheckoutForm";
import CartTotals from "../Components/CartTotals";
export const loader = (store) => async () => {
  const { user } = store.getState().userState;

  if (!user) {
    toast.error("please login to checkout");
    return redirect("/login");
  }

  return null;
};

const Checkout = () => {
  const { cartTotal } = useSelector((store) => store.cartState);

  if (cartTotal === 0) {
    return <SectionTitle text="No items found in cart" />;
  }

  return (
    <>
      <SectionTitle text="Place Your Order " />

      <div className="grid md:grid-cols-2  md :mt-7">
        <div className="mt-2 ">
          <h1 className="text-md mb-2">Shipping Details</h1>
          <CheckoutForm />
        </div>
        <div className="mt-4">
          <CartTotals />
        </div>
      </div>
    </>
  );
};

export default Checkout;
