import { useContext } from "react";
import { CartContext } from "../Context Api/Cart";

const Item = (props) => {
  const cart = useContext(CartContext);
  console.log(cart);
  return (
    <div className="item-card">
      <h2>{props.name}</h2>
      <p>Price: ${props.price}</p>
      <button
        onClick={() =>
          cart.setItem([...cart.item, { name: props.name, price: props.price }])
        }
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Item;
