import { FaShoppingCart } from "react-icons/fa";
import { useAppSelector } from "../hooks/reduxHooks";

interface NavbarProps {
  onOpenCart: () => void;
}

function Navbar({ onOpenCart }: NavbarProps) {
  const items = useAppSelector((state) => state.cart.items);

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-20 bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">
          Shopping Cart
        </h1>

        <button
          onClick={onOpenCart}
          className="relative"
        >
          <FaShoppingCart size={26} />

          {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar;