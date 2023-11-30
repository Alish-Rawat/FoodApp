import { useSelector, useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((shop) => shop.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveCart = () => {
    dispatch(removeItem());
  };

  return (
    <>
      <h1 className="font-bold text-3xl p-2 m-2">
        Cart Items - {cartItems.length}
      </h1>
      <button
        className="bg-green-300 rounded-md p-3 mx-12"
        onClick={() => handleClearCart()}
      >
        Clear
      </button>
      <button
        className="bg-red-400 rounded-md p-3 mx-12"
        onClick={() => handleRemoveCart()}
      >
        Remove
      </button>
      <div className="flex p-2 mx-5">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Cart;
