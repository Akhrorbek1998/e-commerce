import { useContext, useEffect, useState } from "react";
// import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// import cart context
import { CartContext } from "../contexts/CartContext";
// import icons
import { BsBag } from "react-icons/bs";
// import Link
import { Link } from "react-router-dom";
// import Logo
import Logo from "../img/logo.svg";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(true);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white shadow-md" : "bg-none"
      } fixed w-full z-10 py-4 transition-all`}
    >
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={Logo} alt="site logo" />
          </div>
        </Link>
        {/* cart */}
        <div
          className="cursor-pointer flex relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] rounded-full text-white flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
