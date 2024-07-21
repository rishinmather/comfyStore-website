import React, { useState } from "react";
import { formatPrice } from "../Utils/Index";
const FormRange = ({ size, label, name, type, price }) => {
  const step = 1000;
  const maxPrice = 100000;

  const [selectprice, setSelectPrice] = useState(price || maxPrice);

  return (
    <div className="form-control mt-2 md:mt-8 lg:mt-4 ">
      <label htmlFor={name} className="label">
        <span className="text-sm">{label}</span>
        <span className="text-sm">{formatPrice(selectprice)}</span>
      </label>

      <input
        type={type}
        name={name}
        step={step}
        min={0}
        max={maxPrice}
        value={selectprice}
        onChange={(e) => {
          setSelectPrice(e.target.value);
        }}
        className={`${size} range range-primary `}
      />

      <div className="flex justify-between items-center">
        <label htmlFor="" className="">
          <span className="text-xs font-bold">0</span>
        </label>
        <label htmlFor="" className="text-sm font-bold">
          <span className="text-xs">Max:{formatPrice(maxPrice)}</span>
        </label>
      </div>
    </div>
  );
};

export default FormRange;
