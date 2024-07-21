import React from "react";
import Hero from "../Components/Hero";
import FeaturedProductsContainer from "../Components/FeaturedProductsContainer";
import { CustFetch } from "../Utils/Index";

const getLandingQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => CustFetch("/products?featured=true"),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(getLandingQuery);
  const products = response.data.data;

  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProductsContainer />
    </>
  );
};

export default Landing;
