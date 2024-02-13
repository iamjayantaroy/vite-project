import { useContext } from "react";
import { CartContext } from "../Context Api/Cart";

const Cart = () => {
  const cart = useContext(CartContext);
  return (
    <div>
      <div className="cart">
        <h1>Cart</h1>
        {cart &&
          cart.item.map((data) => (
            <li key={data.name}>
              {data.name} - {data.price}
            </li>
          ))}
        <h5>Total Bill: </h5>
      </div>
    </div>
  );
};

export default Cart;
