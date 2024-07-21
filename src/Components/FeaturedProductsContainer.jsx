import React from "react";
import SectionTitle from "./SectionTitle";
import ProductsGrid from "./ProductsGrid";

const FeaturedProductsContainer = () => {
  return (
    <section>
      <>
        <SectionTitle text="Featured Products" />
        <ProductsGrid />
      </>
    </section>
  );
};

export default FeaturedProductsContainer;
