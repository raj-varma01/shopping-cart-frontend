import { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";
import type { Product } from "../types/product";

import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import CartSidebar from "../components/CartSidebar";
import { unwrapResult } from "@reduxjs/toolkit";
import { useAppDispatch } from "../hooks/reduxHooks";

import {
  fetchCart,
  addItemToCart,
} from "../features/cart/cartThunks";

function Home() {
  const dispatch = useAppDispatch();

  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [error, setError] = useState("");

  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    loadProducts();

    dispatch(fetchCart());
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();

      setProducts(data);
    } catch {
      setError("Unable to load products");
    } finally {
      setLoadingProducts(false);
    }
  };

  if (loadingProducts)
    return <Loader />;

  if (error)
    return <EmptyState message={error} />;

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar
        onOpenCart={() => setCartOpen(true)}
      />

      <CartSidebar
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />

      <div className="mx-auto max-w-7xl p-6">

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {products.map((product) => (
            <ProductCard
            key={product._id}
            product={product}
            onAddToCart={async (id) => {
              try {
                await dispatch(
                  addItemToCart({
                    productId: id,
                  })
                ).unwrap();
          
                setCartOpen(true);
              } catch (error) {
                console.error("Failed to add item to cart:", error);
              }
            }}
          />
          ))}

        </div>

      </div>
    </div>
  );
}

export default Home;