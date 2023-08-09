import { useContext } from "react";
// import Link
// import { Link } from "react-router-dom";
// import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
// import components
import { CartItem } from "./";
// import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";

// import CartContext
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        {/* icon */}
        <div
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
          onClick={handleClose}
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[390px] lg:h-[460px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="w-full flex justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span> ${" "}
            {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
            onClick={() => clearCart()}
          >
            <FiTrash2 />
          </div>
        </div>
        <div className="flex space-x-2">
          <Link className="bg-gray-200 flex p-4 justify-center items-center text-primary w-2/4 font-medium">
            View cart
          </Link>
          <Link className="bg-primary text-white  flex p-4 justify-center items-center w-2/4 font-medium">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
