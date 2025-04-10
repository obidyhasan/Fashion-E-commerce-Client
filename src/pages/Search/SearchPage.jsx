import React from "react";
import ProductCard from "../../components/Product/ProductCard";

const SearchPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <div className="flex items-center justify-center my-8">
        <div className="join w-full max-w-xl">
          <input
            className="input join-item w-full"
            placeholder="Search Product..."
          />
          <button className="btn join-item">Search</button>
        </div>
      </div>
      <div>
        <div className="my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
