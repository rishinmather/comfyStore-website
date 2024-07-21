import { useSelector } from "react-redux";
import { formatPrice } from "../Utils/Index";
const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (store) => store.cartState
  );

  return (
    <div className="card bg-base-300 rounded-xl ">
      <div className="card-body ">
        {/* SUBTOTAL */}

        <div className="flex">
          <p className="text-xs border-b-2 border-base-200 pb-2 mb-2">
            Subtotal
          </p>
          <span className="text-xs">{formatPrice(cartTotal)}</span>
        </div>

        {/* SHIPPING */}
        <div className="flex">
          <p className="text-xs border-b-2 border-base-200 pb-2 mb-2">
            Shipping
          </p>
          <span className="text-xs">{formatPrice(shipping)}</span>
        </div>

        {/* TAx */}

        <div className="flex ">
          <p className="text-xs border-b-2 border-base-200 pb-2 mb-2">Tax</p>
          <span className="text-xs">{formatPrice(tax)}</span>
        </div>

        {/* ORDERTOTAL */}

        <div className="flex">
          <p className="text-md pb-2 mb-2">Order Total</p>
          <span className="text-md">{formatPrice(orderTotal)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
