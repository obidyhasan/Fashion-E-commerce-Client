import React from "react";
import { FiBox } from "react-icons/fi";

const ServiceCard = () => {
  return (
    <div className="p-4 flex items-center gap-2 justify-center flex-col w-full ">
      <FiBox className="text-3xl" />
      <div className="text-center">
        <h1 className="font-medium text-xl">FREE SHIPPING</h1>
        <p className="text-center text-xs max-w-80 mx-auto mt-1">
          Get free shipping on your online paid orders all over Bangladesh.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
