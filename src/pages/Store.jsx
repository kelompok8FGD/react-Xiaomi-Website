import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cartProvider";
import StoreSection from "../components/molecule/Store/StoreSection";

export default function Store() {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart } = useContext(CartContext);

  async function getProducts() {
    const base = "https://6551cffe5c69a77903291de6.mockapi.io/products";

    const response = await fetch(base);
    const data = await response.json();
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-slate-100">
      <StoreSection />
    </div>
  );
}
