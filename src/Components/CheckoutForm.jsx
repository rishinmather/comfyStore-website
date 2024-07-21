import React from "react";
import { Form, redirect } from "react-router-dom";
import FormIput from "./FormIput";
import SubmitBtn from "./SubmitBtn";
import { CustFetch, formatPrice } from "../Utils/Index";
import { clearCart } from "../Features/cart/cartslice";
import { toast } from "react-toastify";

export const action =
  (store, queryCLient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);

    const { token } = store.getState().userState.user;
    const { numItemsInCart, orderTotal, cartItems } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      const response = await CustFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      queryCLient.removeQueries(["orders"]);
      store.dispatch(clearCart());

      toast.success("Your orders have been placed");
      return redirect("/orders");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "There was error processing your orders";
      toast.error(errorMessage);
      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <Form method="POST">
      <FormIput name="name" label="first name" type="text" />
      <FormIput name="address" label="address" type="address" />
      <div className="mt-4">
        <SubmitBtn text="place your order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
