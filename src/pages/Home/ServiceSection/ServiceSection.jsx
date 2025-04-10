import React from "react";
import { FiBox } from "react-icons/fi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { VscVerified } from "react-icons/vsc";

const ServiceSection = () => {
  return (
    <div className=" max-w-7xl mx-auto px-5 my-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Service Item -> FREE SHIPPING */}
        <div className="p-4 flex items-center gap-2 justify-center flex-col w-full ">
          <LiaShippingFastSolid className="text-3xl" />
          <div className="text-center">
            <h1 className="font-medium text-xl">FREE SHIPPING</h1>
            <p className="text-center text-xs max-w-80 mx-auto mt-1">
              Get free shipping on your online paid orders all over Bangladesh.
            </p>
          </div>
        </div>
        {/* Service Item -> PAN-BANGLADESH DELIVERY */}
        <div className="p-4 flex items-center gap-2 justify-center flex-col w-full ">
          <FiBox className="text-3xl" />
          <div className="text-center">
            <h1 className="font-medium text-xl">PAN-BANGLADESH DELIVERY</h1>
            <p className="text-center text-xs max-w-80 mx-auto mt-1">
              5 Days Return Policy.
            </p>
          </div>
        </div>
        {/* Service Item -> QUALITY PRODUCTS */}
        <div className="p-4 flex items-center gap-2 justify-center flex-col w-full ">
          <VscVerified className="text-3xl" />
          <div className="text-center">
            <h1 className="font-medium text-xl">QUALITY PRODUCTS</h1>
            <p className="text-center text-xs max-w-80 mx-auto mt-1">
              We always go for the best. Premium product and no quality
              compromise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
