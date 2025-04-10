import React from "react";
import ServiceCard from "../../../../components/Service/ServiceCard";
import CategoryCard from "../../../../components/Categories/CategoryCard";

const CategorySection = () => {
  return (
    <div>
      <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Main Category */}
        <section className="flex items-center justify-center row-span-2 bg-base-200 rounded w-full min-h-[300px] sm:h-auto">
          <figure className="w-full h-[380px]">
            <img
              src="https://i.ibb.co.com/RpDH9bQV/f1-removebg-preview.png"
              className="w-full h-full object-contain"
              alt="Category Product Image"
            />
          </figure>
        </section>
        {/* Category Product */}

        <div className="grid grid-cols-2 gap-5">
          <CategoryCard></CategoryCard>
          <CategoryCard></CategoryCard>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <CategoryCard></CategoryCard>
          <CategoryCard></CategoryCard>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <CategoryCard></CategoryCard>
          <CategoryCard></CategoryCard>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <CategoryCard></CategoryCard>
          <CategoryCard></CategoryCard>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
