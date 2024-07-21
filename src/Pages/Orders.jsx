import React from "react";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { CustFetch } from "../Utils/Index";
import SectionTitle from "../Components/SectionTitle";
import Orderslist from "../Components/Orderslist";
import COmplexPagination from "../Components/COmplexPagination";

const ordersQuery = (params, user) => {
  return {
    queryKey: [
      "orders",
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      CustFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const { user } = store.getState().userState;

    if (!user) {
      toast.error("please login to checkout");
      return redirect("/login");
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user)
      );
      console.log(response);
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.log(error);
      const errMsg =
        error?.response?.data?.error?.message ||
        "there was problem processing your orders";
      toast.error(errMsg);
      return null;
    }
  };

const Orders = () => {
  return (
    <>
      <SectionTitle text="Your Orders" />
      <Orderslist />
      <COmplexPagination />
    </>
  );
};

export default Orders;

// copied down here
// import React from "react";
// import { redirect } from "react-router-dom";
// import { toast } from "react-toastify";
// import { CustFetch } from "../Utils/Index";
// import SectionTitle from "../Components/SectionTitle";
// import Orderslist from "../Components/Orderslist";
// import COmplexPagination from "../Components/COmplexPagination";
// import { useLoaderData } from "react-router-dom";
// export const loader =
//   (store) =>
//   async ({ request }) => {
//     const { user } = store.getState().userState;

//     if (!user) {
//       toast.warn("You must be logged in to view orders");
//       redirect("/login");
//     }

//     const params = Object.fromEntries([
//       ...new URL(request.url).searchParams.entries(),
//     ]);

//     try {
//       const response = await CustFetch.get("/orders", {
//         params,
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       });

//       return { orders: response.data.data, meta: response.data.meta };
//     } catch (error) {
//       console.log(error);
//       const errormessage =
//         error?.response?.data?.error?.message ||
//         "There was an error placing your order";
//       toast.error(errormessage);

//       if (error.response.status === 401 || 403) {
//         return redirect("/login");
//       }
//     }
//   };
// const Orders = () => {
//   const { meta } = useLoaderData();

//   if (meta.pagination.total < 1) {
//     return <SectionTitle text="Please make an order" />;
//   }

//   return (
//     <>
//       <SectionTitle text="Your Orders" />
//       <Orderslist />
//       <COmplexPagination />
//     </>
//   );
// };

// export default Orders;
