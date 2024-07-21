import { useSelector } from "react-redux";
import CartItemsList from "../Components/CartItemsList";
import CartTotals from "../Components/CartTotals";
import SectionTitle from "../Components/SectionTitle";
import { Link } from "react-router-dom";
const Cart = () => {
  const { numItemsInCart } = useSelector((store) => store.cartState);

  const { user } = useSelector((store) => store.userState);

  if (numItemsInCart === 0) {
    return <SectionTitle text="No Items in cart" />;
  }

  return (
    <div>
      <SectionTitle text="Shopping Cart" />

      <div className="mt-5 lg:grid grid-cols-12">
        <div className="mb-5 col-span-8">
          <CartItemsList />
        </div>

        <div className="col-span-4 lg:pl-10 sm:mt-5">
          <CartTotals />

          {user ? (
            <Link className="btn btn-primary mt-4 w-full uppercase">
              Proceed to checkout
            </Link>
          ) : (
            <Link className="btn btn-primary mt-4 w-full uppercase">
              Please Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
