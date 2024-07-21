import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
const ProductsContainer = () => {
  const { meta } = useLoaderData();

  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState("grid");

  const activeStyles = (pattern) => {
    return `text-lg btn btn-circle btn-sm ${
      pattern === layout ? "btn-primary" : "btn-ghost"
    }`;
  };

  return (
    <>
      {/* HEADER */}

      <div className="mt-10 border-b-2 border-base-300 flex items-center justify-between  ">
        <h1 className="mb-4">
          {totalProducts} Product{totalProducts > 1 && "s"}{" "}
        </h1>

        <div className="grid grid-cols-2 gap-1 mb-3">
          <button
            className={activeStyles("grid")}
            onClick={() => setLayout("grid")}
          >
            <BsFillGridFill />
          </button>

          <button
            className={activeStyles("list")}
            onClick={() => setLayout("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      {/* PRODUCTS */}

      {totalProducts === 0 ? (
        <div>
          <h1 className="text-2xl py-16 ">
            Sorry,No products matched your search...
          </h1>
        </div>
      ) : layout === "list" ? (
        <ProductsList />
      ) : (
        <ProductsGrid />
      )}
    </>
  );
};

export default ProductsContainer;
