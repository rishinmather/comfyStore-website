import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <div className=" border-b-2 border-base-300 ">
      <h1 className=" text-3xl md:text-3xl mb-4">{text}</h1>
    </div>
  );
};

export default SectionTitle;
