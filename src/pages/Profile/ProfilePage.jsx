import React from "react";
import ManageProfileSection from "./ManageProfile/ManageProfileSection";
import OrderSection from "./Order/OrderSection";
import WishListSection from "./WishList/WishListSection";

const ProfilePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 ">
      <ManageProfileSection></ManageProfileSection>
      <OrderSection></OrderSection>
      <WishListSection></WishListSection>
    </div>
  );
};

export default ProfilePage;
