import {
    FaMinus,
    FaPlus,
    FaTrash,
  } from "react-icons/fa";
  import type { CartItem as CartItemType } from "../types/cart";
  
  interface CartItemProps {
    item: CartItemType;
    onUpdate: (
      productId: string,
      action: "increment" | "decrement"
    ) => void;
    onRemove: (productId: string) => void;
  }
  
  function CartItem({
    item,
    onUpdate,
    onRemove,
  }: CartItemProps) {
    return (
      <div className="flex gap-4 border-b py-4">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="h-20 w-20 rounded object-cover"
        />
  
        <div className="flex-1">
          <h3 className="font-semibold">
            {item.product.name}
          </h3>
  
          <p className="mt-1 text-blue-600 font-bold">
            ₹ {item.product.price.toLocaleString()}
          </p>
  
          <div className="mt-3 flex items-center gap-2">
  
            <button
              onClick={() =>
                onUpdate(item.product._id, "decrement")
              }
              className="rounded bg-gray-200 p-2 hover:bg-gray-300"
            >
              <FaMinus size={12} />
            </button>
  
            <span className="w-8 text-center">
              {item.quantity}
            </span>
  
            <button
              onClick={() =>
                onUpdate(item.product._id, "increment")
              }
              className="rounded bg-gray-200 p-2 hover:bg-gray-300"
            >
              <FaPlus size={12} />
            </button>
  
            <button
              onClick={() =>
                onRemove(item.product._id)
              }
              className="ml-auto text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
  
          </div>
        </div>
      </div>
    );
  }
  
  export default CartItem;