import React from "react";
import { SelectAmount } from "../Utils/ExtraComponents";
import { formatPrice } from "../Utils/Index";
import { useDispatch } from "react-redux";
import { editItem, removeItem } from "../Features/cart/cartslice";

const CartItems = ({ cart }) => {
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeItem({ cartID }));
  };

  const handleSelectAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };

  const { cartID, image, company, title, price, Productcolor, amount } = cart;

  return (
    <article className="mb-4 border-b-2 border-base-200 pb-4 last:border-none py-4 flex flex-col  sm:flex-row  sm:gap-x-24">
      <img
        src={image}
        alt={title}
        className="h-24 rounded-lg w-24 md:h-28 md:w-28 object-cover"
      />

      {/* INFO */}
      <div className="mt-4 sm:w-48 sm:mt-1">
        <h1 className="capitalize">{title}</h1>
        <p className="text-sm text-slate-500 mt-1">{company}</p>
        <p className="mt-5 text-sm flex items-center gap-x-1">
          Color :
          <span
            className="h-4 w-4  rounded-full mt-[0.15rem]"
            style={{ backgroundColor: Productcolor }}
          ></span>
        </p>
      </div>

      <div className="mt-3 sm:mt-0">
        {/* SELECT AMOUNT */}
        <div className="form-control -ml-1">
          <label htmlFor="amount" className="label " id="label">
            <span className="text-sm sm:-ml-[0.25rem] ">Amount</span>
          </label>

          <select
            name="amount"
            id="amount"
            className="select  select-base select-border select-xs mt-2 w-[60vw] sm:w-fit"
            value={amount}
            onChange={handleSelectAmount}
          >
            {SelectAmount(amount + 4)}
          </select>
        </div>
        {/* END SELECT AMOUNT  */}
        <button
          className="text-rose-600 -ml-0  text-sm sm:-ml-[0.25rem] sm:mt-[0.5rem] "
          onClick={removeItemFromCart}
        >
          Remove
        </button>
      </div>

      {/* PRICE */}

      <p className="mt-2 text-sm sm:mt-2">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItems;
