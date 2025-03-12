import React from "react";

const CheckoutItemCard = () => {
  return (
    <div className="flex gap-3 items-center w-full border-b border-base-300 pb-2">
      <div className="w-full flex flex-col gap-1">
        <div className="flex items-center justify-between gap-1">
          <h1 className="text-base font-medium">Single Jersey Metro Hoodie</h1>
        </div>

        <div className=" flex items-center justify-between">
          <h1>3 X 550</h1>
          <h2 className="">৳ 1650</h2>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItemCard;
