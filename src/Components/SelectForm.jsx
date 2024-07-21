import React from "react";
import { Form } from "react-router-dom";

const SelectForm = ({ label, size, defaultValue, name, type, list }) => {
  return (
    <div className="form-control mt-4 text-sm">
      <label htmlFor={name} typeof={name} className="label">
        {label}
      </label>

      <select
        name={name}
        id={name}
        type={type}
        defaultValue={defaultValue}
        className={`select ${size}`}
      >
        {list.map((list) => {
          return <option key={list}>{list}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectForm;
