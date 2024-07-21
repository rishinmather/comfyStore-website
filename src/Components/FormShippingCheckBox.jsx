import React from "react";

const FormShippingCheckBox = ({ name, type, size, label, defaultValue }) => {
  return (
    <div className="form-control items-center md:mt-2 lg:mt-1 ">
      <label htmlFor={name} className="label">
        <span className="text-sm">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultChecked={defaultValue}
        id=""
        className={`${size} checkbox checkbox-primary rounded-full`}
      />{" "}
    </div>
  );
};

export default FormShippingCheckBox;
