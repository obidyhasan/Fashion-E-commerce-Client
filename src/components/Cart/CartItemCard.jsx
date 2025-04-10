import React from "react";
import { TiDelete } from "react-icons/ti";

const CartItemCard = () => {
  return (
    <div className="flex gap-3 items-center w-full border-b border-base-300 py-4">
      <div className="min-w-20 h-20 ">
        <img
          className="w-full h-full rounded-2xl object-cover "
          src="https://i.ibb.co.com/GvcpDRxq/f3.jpg"
          alt=""
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <div className="flex items-center justify-between gap-1">
          <h1 className="text-base font-medium">Single Jersey Metro Hoodie</h1>
          <TiDelete className="text-2xl cursor-pointer" />
        </div>
        <div className="flex items-center gap-5 rounded border-base-300 border w-min px-3">
          <p className="text-xl cursor-pointer">-</p>
          <p>1</p>
          <p className="text-xl cursor-pointer">+</p>
        </div>
        <div className=" flex items-center justify-between">
          <h1>3 X 550</h1>
          <h2 className=" font-semibold">৳ 1650</h2>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
