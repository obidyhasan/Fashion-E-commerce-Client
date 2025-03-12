import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div>
      <Link
        to={"/product-details"}
        className="flex items-center justify-center w-full h-[300px] rounded bg-base-200"
      >
        <h1>Product</h1>
      </Link>
    </div>
  );
};

export default ProductCard;
