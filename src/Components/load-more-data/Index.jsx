import { useEffect, useState } from "react";
import "./style.css";

export default function LoadMoreData() {
  const [loading, setloading] = useState(false);
  const [products, setproducts] = useState([]);
  const [count, setcount] = useState(0);
  const [disabledbtn, setdisabledbtn] = useState(false);

  async function fetchProducts() {
    try {
      setloading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count == 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();
      console.log(result);
      if (result && result.products && result.products.length) {
        setproducts((prevdata) => [...prevdata, ...result.products]);
        setloading(false);
      }
    } catch (e) {
      setloading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setcount(true);
      setdisabledbtn(true);
    }
  }, [products]);
  if (loading) {
    <div>Load More Products. Wait!</div>;
  }
  return (
    <div className="container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="products" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>Price {item.price}$</p>
              </div>
            ))
          : null}
      </div>
      <div className="btn-container">
        <button disabled={disabledbtn} onClick={() => setcount(count + 1)}>
          Load More Products
        </button>
        <br />
        {disabledbtn ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
}
