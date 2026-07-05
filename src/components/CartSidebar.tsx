import { FaTimes } from "react-icons/fa";
import CartItem from "./CartItem";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  clearCartItems,
  removeItemFromCart,
  updateCartQuantity,
} from "../features/cart/cartThunks";

interface CartSidebarProps {
  open: boolean;
  onClose: () => void;
}

function CartSidebar({
  open,
  onClose,
}: CartSidebarProps) {
  const dispatch = useAppDispatch();

  const {
    items,
    totalPrice,
    loading,
  } = useAppSelector((state) => state.cart);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-full max-w-md bg-white shadow-xl z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b p-5">

          <h2 className="text-xl font-bold">
            Shopping Cart
          </h2>

          <button onClick={onClose}>
            <FaTimes size={22} />
          </button>

        </div>

        {/* Body */}

        <div className="h-[calc(100vh-180px)] overflow-y-auto p-5">

          {items.length === 0 ? (
            <p className="text-center text-gray-500 mt-20">
              Your cart is empty.
            </p>
          ) : (
            items.map((item) => (
              <CartItem
                key={item.product._id}
                item={item}
                onUpdate={(id, action) =>
                  dispatch(
                    updateCartQuantity({
                      productId: id,
                      action,
                    })
                  )
                }
                onRemove={(id) =>
                  dispatch(removeItemFromCart(id))
                }
              />
            ))
          )}
        </div>

        {/* Footer */}

        <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-5">

          <div className="flex justify-between text-lg font-bold">

            <span>Total</span>

            <span>
              ₹ {totalPrice.toLocaleString()}
            </span>

          </div>

          <button
            disabled={items.length === 0 || loading}
            onClick={() =>
              dispatch(clearCartItems())
            }
            className="mt-4 w-full rounded bg-red-500 py-3 text-white hover:bg-red-600 disabled:opacity-50"
          >
            Clear Cart
          </button>

        </div>
      </div>
    </>
  );
}

export default CartSidebar;