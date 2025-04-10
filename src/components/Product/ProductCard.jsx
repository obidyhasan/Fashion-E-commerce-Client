import React from "react";
import { FaCartFlatbed, FaCartShopping } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div>
      <Link to={"/product-details"} className="w-full flex flex-col shadow">
        {/* Product Image */}
        <figure className="relative">
          <img
            src="https://i.ibb.co.com/ZR6C22SV/f6.jpg"
            alt="Product Image"
            className="w-full h-[180px] sm:h-[300px] object-cover"
          />
          <div className="absolute top-0 w-full flex justify-between">
            <div className="bg-black text-white text-xs py-0.5 px-1 italic">
              ⚡FREE DELIVERY
            </div>
            <div className="bg-red-500 text-white text-xs py-0.5 px-1">
              SALE
            </div>
          </div>
        </figure>
        {/* Product Details */}
        <div className="p-3 text-center flex flex-col gap-2">
          {/* Save Taka */}
          <div className="bg-black w-max text-white text-xs py-0.5 px-1.5 mx-auto">
            Save Tk. 40
          </div>
          <h2 className="text-sm font-medium">
            Mens Premium T-Shirt- Nyctophilia
          </h2>
          {/* Price Div */}
          <div className="flex items-center justify-center gap-2 text-sm ">
            <p className="line-through text-orange-600">৳ 490</p>
            <p className="font-medium">৳ 450</p>
          </div>
        </div>
        {/* Buy Button */}
        <div className="flex-1/2">
          <button className="btn btn-sm w-full bg-black text-white">
            <FaCartShopping /> Buy Now
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
