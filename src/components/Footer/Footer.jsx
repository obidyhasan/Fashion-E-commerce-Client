import { FaFacebook, FaInstagram, FaLocationArrow } from "react-icons/fa";
import logoName from "./../../assets/logo-name-white.svg";
import { FaXTwitter } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-8">
          <div className="space-y-5">
            <img src={logoName} className="h-6" alt="Logo" />
            <h3>Connect With Us</h3>
            <div className="text-xl flex gap-2">
              <FaFacebook />
              <FaInstagram />
              <FaXTwitter />
            </div>
          </div>
          <div>
            <h3 className="font-medium text-lg">Products</h3>
            <ul className="mt-4 space-y-2">
              <li className="transform duration-300 transition-all hover:translate-x-1.5">
                New Arrivals
              </li>
              <li className="transform duration-300 transition-all hover:translate-x-1.5">
                Top Selling
              </li>
              <li className="transform duration-300 transition-all hover:translate-x-1.5">
                Free Delivery
              </li>
              <li className="transform duration-300 transition-all hover:translate-x-1.5">
                Offers & Discount
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg">Help</h3>
            <ul className="mt-4 space-y-2">
              <li className="transform duration-300 transition-all hover:translate-x-1.5">
                About Us
              </li>
              <li className="transform duration-300 transition-all hover:translate-x-1.5">
                Privacy Policy
              </li>
              <li className="transform duration-300 transition-all hover:translate-x-1.5">
                Terms Of Condition
              </li>
              <li className="transform duration-300 transition-all hover:translate-x-1.5">
                Return Policy
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="transform duration-300 transition-all hover:translate-x-1.5 flex items-center gap-3">
                <FaLocationArrow />
                <span>1294 Mockingbird Hill</span>
              </li>
              <li className="transform duration-300 transition-all hover:translate-x-1.5 flex items-center gap-3">
                <MdEmail />
                <span>hello@yourmail.com</span>
              </li>
              <li className="transform duration-300 transition-all hover:translate-x-1.5 flex items-center gap-3">
                <MdCall />
                <span>(00) 123 456 789</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-center text-xs">
            &#169; Fashion E-commerce 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
