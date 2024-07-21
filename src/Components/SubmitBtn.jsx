import React from "react";

const SubmitBtn = ({ text }) => {
  return (
    <div>
      <button type="submit" className="btn btn-primary w-80 text-lg mt-7">
        {text}
      </button>
    </div>
  );
};

export default SubmitBtn;
