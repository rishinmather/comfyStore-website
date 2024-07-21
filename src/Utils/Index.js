import axios from "axios";

const ProductsUrls = "https://strapi-store-server.onrender.com/api";

export const CustFetch = axios.create({
  baseURL: ProductsUrls,
});

export const formatPrice = (price) => {
  const formattedPrice = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));

  return formattedPrice;
};
