import React from "react";

const CollectionSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex items-center justify-center w-full h-[400px] md:h-[500px] bg-base-200 rounded">
          <div className="w-full h-full relative">
            <img
              src="https://i.ibb.co.com/hJsxd60H/4110.jpg"
              className="w-full h-full object-cover"
              alt="Collection Background Image"
            />
            <div className="absolute top-0 w-full h-full">
              <div className="w-full h-full flex gap-1 items-start flex-col justify-center p-4">
                <p>spring/summer</p>
                <h2 className="text-2xl sm:text-3xl font-semibold">
                  Upcoming season
                </h2>
                <p className="text-sm">
                  The best classic dress is on sale at care
                </p>
                <button className="btn btn-outline mt-2">Collection</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-[400px] md:h-[500px] bg-base-200 rounded">
          <div className="w-full h-full relative">
            <img
              src="https://i.ibb.co.com/vx7v6sF9/1696.jpg"
              className="w-full h-full object-cover"
              alt="Collection Background Image"
            />
            <div className="absolute top-0 w-full h-full">
              <div className="w-full h-full flex gap-1 items-start flex-col justify-center p-4">
                <p>crazy deals</p>
                <h2 className="text-2xl sm:text-3xl font-semibold">
                  Buy 1 get 1 free
                </h2>
                <p className="text-sm">
                  The best classic dress is on sale at care
                </p>
                <button className="btn btn-outline mt-2">Collection</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
