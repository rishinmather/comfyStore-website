import React from "react";
import { useLoaderData } from "react-router-dom";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);
const Orderslist = () => {
  const { orders, meta } = useLoaderData();

  const totalCOunt = meta.pagination.total;

  return (
    <section className="mt-5">
      <h1 className="">Total Orders: {totalCOunt}</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Products</th>
              <th>Cost</th>
              <th className="hidden sm:block">Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => {
              const {
                address,

                createdAt,
                name,
                numItemsInCart,
                orderTotal,
              } = order.attributes;
              const id = order.id;

              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{numItemsInCart}</td>
                  <td>{orderTotal}</td>
                  <td className="hidden sm:block">
                    {day(`${createdAt}`).format("hh:mm a-MMM Do,YYYY")}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Orderslist;
