import React from "react";
import { LuFilter } from "react-icons/lu";
import ProductCard from "../../components/Product/ProductCard";
import { Link } from "react-router-dom";
import FilterItemCard from "../../components/FilterSection/FilterItemCard";
import FilterSubItemCard from "../../components/FilterSection/FilterSubItemCard";

const ShopPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <div className="drawer md:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content my-5">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn drawer-button md:hidden">
            Filter <LuFilter />
          </label>

          <div className="md:py-0 py-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-5">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </div>
        </div>
        <div className="drawer-side md:z-0 z-50">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-100 min-h-full w-72 p-5 md:p-0 md:py-5 mr-5">
            {/* Sidebar content here */}

            <div className="flex flex-col gap-3">
              <FilterItemCard title={"Mega Deal ⚡"}></FilterItemCard>
              <FilterItemCard title={"New Arrival ⚡"}></FilterItemCard>
              <FilterItemCard title={"Top Selling ⚡"}></FilterItemCard>
              <FilterItemCard title={"Free Delivery ⚡"}></FilterItemCard>
              <FilterItemCard title={"Man"}></FilterItemCard>
              <FilterSubItemCard title={"Shirts"}></FilterSubItemCard>
              <FilterSubItemCard title={"Pants"}></FilterSubItemCard>
              <FilterSubItemCard title={"T-shirt"}></FilterSubItemCard>
              <FilterItemCard title={"Woman"}></FilterItemCard>
              <FilterItemCard title={"Kids"}></FilterItemCard>

              <hr className="border-base-300" />
              <p className="font-medium text-lg">Sort</p>

              <select defaultValue="Pick a color" className="select ">
                <option>Sort by Popularity</option>
                <option>Sort By Latest</option>
                <option>Sort by price: Low to High</option>
                <option>Sort by price: High to Low</option>
              </select>

              <hr className="border-base-300" />
              <p className="font-medium text-lg">Size</p>

              {/* Waist */}
              <p className="text-gray-500">Waist</p>
              <div className="grid gap-2 grid-cols-5">
                <div className="bg-base-200">
                  <p className="p-4 text-center">26</p>
                </div>
                <div className="bg-base-200">
                  <p className="p-4 text-center">28</p>
                </div>
                <div className="bg-base-200">
                  <p className="p-4 text-center">30</p>
                </div>
                <div className="bg-base-200">
                  <p className="p-4 text-center">32</p>
                </div>
                <div className="bg-base-200">
                  <p className="p-4 text-center">34</p>
                </div>
                <div className="bg-base-200">
                  <p className="p-4 text-center">36</p>
                </div>
                <div className="bg-base-200">
                  <p className="p-4 text-center">38</p>
                </div>
                <div className="bg-base-200">
                  <p className="p-4 text-center">40</p>
                </div>
              </div>

              {/* clothing */}
              <p className="text-gray-500">Clothing</p>
              <div className="grid gap-2 grid-cols-5">
                <div className="bg-base-200">
                  <p className="p-4 text-center">S</p>
                </div>
                <div className="bg-base-200">
                  <p className="p-4 text-center">M</p>
                </div>
                <div className="bg-base-200">
                  <p className="p-4 text-center">L</p>
                </div>
                <div className="bg-base-200">
                  <p className="p-4 text-center">XL</p>
                </div>
                <div className="bg-base-200">
                  <p className="p-4 text-center">XXL</p>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
