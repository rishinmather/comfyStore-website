import React from "react";
import Filters from "../Components/Filters";
import ProductsContainer from "../Components/ProductsContainer";
import PaginationContainer from "../Components/PaginationContainer";
import { CustFetch } from "../Utils/Index";

const url = "/products";

const allProductsQuery = (queryParams) => {
  const { search, company, category, shipping, order, page, price } =
    queryParams;
  return {
    queryKey: [
      search ?? "",
      company ?? "all",
      category,
      "all",
      shipping ?? false,
      order ?? "a-z",
      page ?? 1,
      price ?? 100000,
    ],
    queryFn: () =>
      CustFetch(url, {
        params: queryParams,
      }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const response = await queryClient.ensureQueryData(
      allProductsQuery(params)
    );
    const products = response.data.data;
    const meta = response.data.meta;

    return { products, meta, params };
  };

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
