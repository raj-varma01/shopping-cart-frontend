import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
  onAddToCart: (id: string) => void;
}

function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm transition hover:shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="mb-4 h-48 w-full rounded object-cover"
      />

      <h2 className="text-lg font-semibold">
        {product.name}
      </h2>

      <p className="mt-2 text-xl font-bold text-blue-600">
        ₹ {product.price.toLocaleString()}
      </p>

      <button
        onClick={() => onAddToCart(product._id)}
        className="mt-4 w-full rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;