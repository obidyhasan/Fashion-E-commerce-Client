import React from "react";
import ProductCard from "../../../components/Product/ProductCard";
import HeadingCard from "../../../components/HeadingCard/HeadingCard";

const OfferSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-12">
      <HeadingCard
        heading={"Offers & Discounts"}
        subheading={
          "Experience personalized fashion, seamless shopping, and top-notch customer support."
        }
      ></HeadingCard>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default OfferSection;
