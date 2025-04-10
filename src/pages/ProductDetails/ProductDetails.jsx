import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import HeadingCard from "../../components/HeadingCard/HeadingCard";
import ProductCard from "../../components/Product/ProductCard";

const ProductDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-5">
      <div className="flex gap-5 md:flex-row flex-col">
        <div className="w-full md:w-2/5 h-[500px] rounded">
          <img
            className="w-full h-full object-cover rounded"
            src="https://i.ibb.co.com/nqvNxCd8/f5.jpg"
            alt=""
          />
        </div>
        <div className="w-full md:w-3/5 flex flex-col gap-2">
          <h1 className="text-xl font-medium">Single Jersey Metro Hoodie</h1>
          <p className="text-lg font-semibold text-orange-400">৳ 550</p>
          <div>
            <p className="text-sm">Select Size</p>
            <div className="mt-2 max-w-80 grid gap-2 grid-cols-5">
              <div className="bg-base-200">
                <p className="p-2 text-sm text-center">S</p>
              </div>
              <div className="bg-base-200">
                <p className="p-2 text-sm text-center">M</p>
              </div>
              <div className="bg-base-200">
                <p className="p-2 text-sm text-center">L</p>
              </div>
              <div className="bg-base-200">
                <p className="p-2 text-sm text-center">XL</p>
              </div>
              <div className="bg-base-200">
                <p className="p-2 text-sm text-center">XXL</p>
              </div>
            </div>
          </div>
          <div className="my-1">
            <div className="flex items-center gap-5 rounded border-base-300 border w-min py-1 px-3">
              <p className="text-xl cursor-pointer">-</p>
              <p>1</p>
              <p className="text-xl cursor-pointer">+</p>
            </div>
          </div>
          <div className="flex  gap-3">
            <button className="btn w-max">
              Add To Cart <FiShoppingCart className="text-lg" />
            </button>
            <button className="btn w-max bg-black text-white">Buy Now</button>
          </div>
          <hr className="my-3 text-base-300" />
          <p className="text-sm text-gray-600">
            Fabrilife Mens Premium Quality t-shirt that offers a much smoother,
            silky feel and more structured, mid-weight fit than the regular
            t-shirts . The t-shirts are made with finest quality Combed Compact
            Cotton , features astonishing ~175 GSM on just 26's cotton which
            gives an smooth and compact construction.
          </p>

          <h2 className="font-medium mt-2">Detailed Specification:</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li className="text-sm text-gray-600">
              Organic Ringspun Combed Compact Cotton
            </li>
            <li className="text-sm text-gray-600">100% Cotton</li>
            <li className="text-sm text-gray-600">
              Regular fit, Crew Neck Mid-weight, 5.16 oz/yd2(~175GSM)
            </li>
            <li className="text-sm text-gray-600">
              Reactive Dye, enzyme and silicon washed
            </li>
            <li className="text-sm text-gray-600">
              Preshurnk to minimize shrinkage
            </li>
          </ul>

          <p className="font-medium my-2">{`Size chart - In inches (Expected Deviation < 3%)`}</p>

          <div>
            <div className="overflow-x-auto">
              <table className="table bg-base-200 text-sm font-normal">
                {/* head */}
                <thead>
                  <tr className="text-xs text-gray-700">
                    <th>Size</th>
                    <th>{"Chest (Round)"}</th>
                    <th>Length</th>
                    <th>Sleeve</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  <tr>
                    <td>XS</td>
                    <td>36</td>
                    <td>26</td>
                    <td>7.5</td>
                  </tr>
                  <tr>
                    <td>S</td>
                    <td>37</td>
                    <td>26</td>
                    <td>7.75</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>39</td>
                    <td>27.5</td>
                    <td>8.5</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>40.5</td>
                    <td>28</td>
                    <td>8.75</td>
                  </tr>
                  <tr>
                    <td>XL</td>
                    <td>43</td>
                    <td>29</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>2XL</td>
                    <td>45</td>
                    <td>30</td>
                    <td>9.25</td>
                  </tr>
                  <tr>
                    <td>3XL</td>
                    <td>47.5</td>
                    <td>30.5</td>
                    <td>9.5</td>
                  </tr>
                  <tr>
                    <td>4XL</td>
                    <td>50</td>
                    <td>31</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Related Product */}
      <div className="my-12">
        <HeadingCard
          heading={"You may also like"}
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
    </div>
  );
};

export default ProductDetails;
