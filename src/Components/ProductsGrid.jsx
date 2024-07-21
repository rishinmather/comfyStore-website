import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { formatPrice } from "../Utils/Index";

const ProductsGrid = () => {
  const { products } = useLoaderData();

  return (
    <article className="mt-10   grid md:grid-cols-2  lg:grid-cols-3 gap-7 ">
      {products.map((product) => {
        const { title, image, price } = product.attributes;

        const dollarsPrice = formatPrice(price);
        return (
          <Link
            to={`/products/${product.id}`}
            className="card pb-10 shadow-2xl rounded-2xl  "
            key={title}
          >
            <img
              src={image}
              alt={title}
              className="h-[15rem] w-[90vw] mx-auto rounded-lg object-cover mt-4"
            />

            <div className="text-center mt-5">
              <h1 className="text-2xl capitalize tracking-tighter text-slate-600">
                {title}
              </h1>
              <p className="">{dollarsPrice}</p>
            </div>
          </Link>
        );
      })}
    </article>
  );
};

export default ProductsGrid;
