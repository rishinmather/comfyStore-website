import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";
import FormIput from "../Components/FormIput";
import SelectForm from "./SelectForm";
import FormRange from "./FormRange";
import FormShippingCheckBox from "./FormShippingCheckBox";
const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className="bg-base-200  rounded-md px-8 py-4 grid gap-x-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center pt-2">
      <FormIput
        size="input-sm "
        title="Search Products"
        className
        name="search"
        defaultvalue={search}
      />

      {/* COMPANIES */}

      <SelectForm
        list={meta.companies}
        size="select-sm"
        name="company"
        label="Select Company"
        defaultValue={company}
      />

      {/* Categories */}
      <SelectForm
        list={meta.categories}
        size="select-sm"
        name="category"
        label="Select Category"
        defaultValue={category}
      />

      {/* ORDER */}
      <SelectForm
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        name="order"
        label="Sort By"
        defaultValue={order}
      />

      {/* RANGE */}

      <FormRange
        type="range"
        name="price"
        label="Select Price "
        size="range-sm"
        price={price}
      />

      {/* FREE SHIPPING */}

      <FormShippingCheckBox
        name="shipping"
        type="checkbox"
        label="Free Shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />

      {/* BUTTONS */}

      <button
        type="submit"
        className="
btn btn-primary btn-sm mt-4  md:mt-9 "
      >
        Search
      </button>
      <Link to={"/products"} className="btn btn-accent btn-sm mt-4  md:mt-9 ">
        Reset
      </Link>
    </Form>
  );
};

export default Filters;
