import { Link, useNavigate } from "react-router-dom";
import logo from "./../../assets/logo-name.svg";
import logoIcon from "./../../assets/Logo-Black.svg";
import { LuSearch, LuUserRound } from "react-icons/lu";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { useRef } from "react";
import CartItemCard from "../Cart/CartItemCard";

const Navbar = () => {
  const drawerToggleRef = useRef(null);
  const navigate = useNavigate();

  // Close the drawer programmatically
  const closeDrawer = () => {
    drawerToggleRef.current.checked = false;
  };

  const orderPlaceBtn = () => {
    closeDrawer();
    navigate("/checkout");
  };

  const NavbarLink = (
    <>
      <li className="sm:hidden">
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/shop"}>Shop</Link>
      </li>
      <li>
        <details>
          <summary>Man</summary>
          <ul className="p-2">
            <li>
              <a>Shirts</a>
            </li>
            <li>
              <a>Pants</a>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <a>Woman</a>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 bg-white z-20 border-b border-base-200">
      <div className="max-w-7xl mx-auto px-5 ">
        <div className="navbar px-0 py-4 ">
          <div className="navbar-start">
            <div className="flex items-center gap-4">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost md:hidden btn-outline border-base-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  {NavbarLink}
                </ul>
              </div>
              <div className="sm:hidden">
                <Link to={"/"}>
                  <img src={logoIcon} alt="" className="w-7" />
                </Link>
              </div>
            </div>
            <div className="navbar-center hidden md:flex">
              <ul className="menu menu-horizontal px-1">{NavbarLink}</ul>
            </div>
          </div>
          <div className="navbar-center">
            <Link to={"/"} className="sm:flex hidden">
              <img src={logo} alt="" className="h-5" />
            </Link>
          </div>
          <div className="navbar-end flex gap-1">
            {/* Search Section */}
            <Link to={"/search"}>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <LuSearch className="text-xl" />
              </div>
            </Link>

            {/* Cart Section */}

            <label htmlFor="my-drawer-4" className="drawer-button">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg> */}

                  <PiShoppingCartSimpleBold className="text-xl" />
                  <span className="badge badge-xs indicator-item badge-ghost">
                    8
                  </span>
                </div>
              </div>
            </label>

            {/* Profile Section */}
            <Link to={"/profile"}>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                {/* <div className="w-9 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div> */}

                <LuUserRound className="text-xl" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Cart Section */}
      <div className="drawer drawer-end">
        <input
          ref={drawerToggleRef}
          id="my-drawer-4"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">{/* Page content here */}</div>
        <div className="drawer-side z-30">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-100 text-base-content min-h-full w-full max-w-80 md:max-w-[400px] p-4 flex flex-col justify-between gap-5">
            {/* Sidebar content here */}

            <div>
              <div className="flex items-center justify-between sm:mr-4">
                <h1 className="text-lg font-semibold">Cart</h1>
                <div className="cursor-pointer">
                  <div
                    onClick={closeDrawer}
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <IoClose className="text-xl" />
                  </div>
                </div>
              </div>

              <section className="my-3 sm:mr-4">
                <CartItemCard></CartItemCard>
                <CartItemCard></CartItemCard>
                <CartItemCard></CartItemCard>
              </section>
            </div>
            <div className="sm:mr-4 flex flex-col gap-3">
              <div className="flex items-center justify-between gap-5 text-base font-medium">
                <p>Subtotal</p>
                <p>৳ 4950</p>
              </div>
              <div className="flex items-center justify-between gap-5 text-base font-medium">
                <p>Shipping Cost</p>
                <p>৳ 70</p>
              </div>
              <hr className="text-base-300" />
              <div className="flex items-center justify-between gap-5 text-base font-medium">
                <p>Total</p>
                <p>৳ 5020</p>
              </div>
              <button
                onClick={orderPlaceBtn}
                className="btn w-full bg-black text-white"
              >
                Place Order
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
