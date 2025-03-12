import React from "react";
import HeadingCard from "../../components/HeadingCard/HeadingCard";
import CheckoutItemCard from "../../components/Cart/CheckoutItemCard";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <section className="mt-6 mb-10">
        <HeadingCard
          heading={"Checkout Details"}
          subheading={
            "Find the perfect fit for every occasion – Men, Women, Kids, and Accessories."
          }
        ></HeadingCard>
      </section>

      <div className="flex gap-5 flex-col md:flex-row my-5">
        <div className="w-full md:w-3/5 h-min">
          {/* Coupon section */}
          <div className="border border-dashed p-4 space-y-3">
            <p className="text-sm">
              If you have a coupon code, please apply it below.
            </p>
            <div className="join w-full">
              <input
                className="input join-item w-full"
                placeholder="Coupon code"
              />
              <button className="btn join-item">Apply Coupon</button>
            </div>
          </div>

          {/* Shipping Details */}
          <div className="my-5">
            <h2 className="text-lg font-semibold">Shipping Details</h2>

            <div>
              <form className="flex gap-4 flex-col my-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  class="input w-full"
                />
                <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    class="input w-full"
                  />{" "}
                  <input
                    type="text"
                    placeholder="Phone Number"
                    class="input w-full"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Detailed Address"
                  class="input w-full"
                />
                <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select defaultValue="Pick a color" className="select">
                    <option disabled={true}>Select City</option>
                    <option>Crimson</option>
                    <option>Amber</option>
                    <option>Velvet</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Alt. Phone Number"
                    class="input w-full"
                  />
                </div>
                <textarea
                  className="textarea w-full"
                  placeholder="Note about your order, e.g. special notes for delivery."
                ></textarea>
              </form>
            </div>
          </div>
        </div>

        {/* Your Order */}
        <div className="w-full md:w-2/5 border h-min p-4">
          <h2 className="text-lg font-semibold">Your Order</h2>
          <div>
            <div className="flex flex-col gap-3 mt-4">
              <CheckoutItemCard></CheckoutItemCard>
              <CheckoutItemCard></CheckoutItemCard>

              <div className="flex items-center justify-between gap-5 text-base font-medium">
                <p>Subtotal</p>
                <p>৳ 4950</p>
              </div>
              <div className="flex items-center justify-between gap-5 text-base font-medium">
                <p>Shipping Cost</p>
                <p>৳ 70</p>
              </div>
              <div className="flex items-center justify-between gap-5 text-base font-medium">
                <p>Discount</p>
                <p>৳ 110</p>
              </div>
              <hr className="text-base-300" />
              <div className="flex items-center justify-between gap-5 text-base font-medium">
                <p>Total</p>
                <p>৳ 5020</p>
              </div>
            </div>
            <div className="my-4 space-y-2">
              <h2 className="font-semibold">Cash on delivery</h2>
              <p className="text-xs text-gray-600">
                সর্বোচ্চ ৪-৫ দিন (ঢাকায়) এবং ৫-৭ দিন (ঢাকার বাহিরে) সময়ের মধ্যে
                হোম ডেলিভারী করা হয়।
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-sm"
              />
              <span className="font-semibold text-xs">
                I have read and agree to the website Terms and conditions *
              </span>
            </div>
            <button className="btn my-4 bg-black text-white w-full">
              Confirm Order
            </button>
            <p className="text-xs">
              <span className="text-gray-500">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our{" "}
              </span>
              <Link to={"/"}>Privacy policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
