import React from "react";
import HeadingCard from "../../../components/HeadingCard/HeadingCard";
import ProductCard from "../../../components/Product/ProductCard";
import CategorySection from "./CategorySection/CategorySection";

const CategoriesSection = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-5 py-12">
        <HeadingCard
          heading={"Top Categories"}
          subheading={
            "Find the perfect fit for every occasion – Men, Women, Kids, and Accessories."
          }
        ></HeadingCard>

        {/* Categories */}
        <section className="mt-10 flex flex-col gap-16">
          <CategorySection></CategorySection>
          <CategorySection></CategorySection>
        </section>
      </div>
    </div>
  );
};

export default CategoriesSection;
