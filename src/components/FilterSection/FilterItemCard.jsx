import React from "react";

const FilterItemCard = ({ title }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-sm"
          />
          <p className="font-medium">{title}</p>
        </div>
        <div className="badge badge-sm badge-ghost rounded-full">25</div>
      </div>
    </div>
  );
};

export default FilterItemCard;
