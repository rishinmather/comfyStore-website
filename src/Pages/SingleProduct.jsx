import React, { useState } from "react";
import { CustFetch } from "../Utils/Index";
import { useLoaderData, Link } from "react-router-dom";
import { SelectAmount } from "../Utils/ExtraComponents";
import { formatPrice } from "../Utils/Index";
import { useDispatch } from "react-redux";
import { addtoCart } from "../Features/cart/cartslice";

const getSingleProductQuery = (id) => {
  return {
    queryKey: ["singleProduct", id],
    queryFn: () => CustFetch.get(`products/${id}`),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const id = params.id;

    const response = await queryClient.ensureQueryData(
      getSingleProductQuery(id)
    );
    const singleproduct = response.data.data;
    return { singleproduct };
  };

const SingleProduct = () => {
  const { singleproduct } = useLoaderData();

  const { image, title, company, price, description, colors } =
    singleproduct.attributes;
  const [Productcolor, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const dollerPrice = formatPrice(price);

  const cartProducts = {
    cartID: Productcolor + singleproduct.id,
    productID: singleproduct.id,
    image,
    title,
    company,
    price,
    Productcolor,
    amount,
  };

  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addtoCart({ product: cartProducts }));
  };

  return (
    <section className="">
      <div className="breadcrumbs capitalize mb-5 ">
        <ul>
          <li>
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
        </ul>
      </div>

      <article className="mt-5 md:grid grid-cols-2 gap-8 lg:gap-10">
        <img
          src={image}
          alt={image}
          className="w-[25rem] object-cover h-[25rem] rounded-lg lg:w-[32rem]"
        />

        <figure className=" mt-6 md:-mt-6">
          <h1 className="text-3xl mt-5 capitalize font-semibold mb-2 text-indigo-600 ">
            {title}
          </h1>
          <h2 className="text-2xl mb-3  font-bold text-indigo-400">
            {company}
          </h2>
          <span className=" mb-4 text-xl">{dollerPrice}</span>

          <p className="mt-5 max-w-[24rem] ">{description}</p>

          {/* COLORS */}
          <div>
            <h1 className="text-lg text-indigo-700 mt-5">Colors</h1>
          </div>
          <div className=" flex gap-3 mt-3">
            {colors.map((color) => {
              return (
                <div className="" key={color}>
                  <button
                    onClick={() => setColor(color)}
                    className={`badge badge-lg rounded-full ${
                      color === Productcolor
                        ? "border-2 border-indigo-500"
                        : "null"
                    } `}
                    style={{ background: color }}
                  ></button>
                </div>
              );
            })}
          </div>

          {/* end COLORS */}

          {/* SELECT AMOUNT */}
          <div className=" mt-5 mb-4 text-indigo-700 form-control">
            <label htmlFor="number" className="number" id="number">
              Amount
            </label>
            <select
              className="select select-secondary w-full max-w-xs border-indigo-500 mt-4"
              id="number"
              value={amount}
              onChange={(e) => {
                setAmount(parseInt(e.target.value));
              }}
            >
              {SelectAmount(10)}
            </select>
          </div>

          {/* SELECT AMOUNT END */}

          {/* ADD TO BAG BUTTON*/}

          <button
            className=" btn btn-primary mt-5"
            type="button "
            onClick={addItem}
          >
            {" "}
            Add to bag
          </button>

          {/* ADD TO BAG BUTTON END */}
        </figure>
      </article>
    </section>
  );
};

export default SingleProduct;
