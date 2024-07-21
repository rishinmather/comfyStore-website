import React from "react";

const FormIput = ({
  type,
  defaultvalue,
  name,
  title,
  size,
  width,
  labeltext,
}) => {
  return (
    <div className="mt-4">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">{labeltext || name}</span>
        </div>
        <input
          type={type}
          name={name}
          placeholder="Type here"
          defaultValue={defaultvalue}
          className={`input input-bordered ${width} ${size}`}
        />
      </label>
    </div>
  );
};

export default FormIput;
