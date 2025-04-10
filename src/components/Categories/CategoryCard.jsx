import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = () => {
  return (
    <Link
      to={"/product-details"}
      className="relative w-full h-[180px] flex items-center justify-center"
    >
      <figure className="w-full h-full">
        <img
          src="https://i.ibb.co.com/YBhkF31J/f2.jpg"
          className="w-full h-full object-cover"
          alt="Category Product Image"
        />
      </figure>
      <div className="absolute top-0 w-full flex justify-between">
        <div className="bg-black text-white text-xs py-0.5 px-1 italic">
          ⚡FREE DELIVERY
        </div>
        <div className="bg-red-500 text-white text-xs py-0.5 px-1">SALE</div>
      </div>
      <div className="absolute bottom-0 w-full flex justify-between">
        <div className="bg-black text-white py-1 px-1 w-full text-center text-sm font-medium">
          {/* Price Div */}
          <div className="flex items-center justify-center gap-2 text-sm ">
            <p className="font-medium">৳ 520</p>
            <p className="line-through text-orange-400">৳ 590</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
