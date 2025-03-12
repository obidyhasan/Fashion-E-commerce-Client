import React from "react";

const FilterSubItemCard = ({ title }) => {
  return (
    <div>
      <div className="flex items-center justify-between ml-5">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-sm"
          />
          <p className="font-medium">{title}</p>
        </div>
        <div className="badge badge-sm badge-ghost rounded-full">16</div>
      </div>
    </div>
  );
};

export default FilterSubItemCard;
