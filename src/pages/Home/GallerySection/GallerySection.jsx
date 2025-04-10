import React from "react";
import HeadingCard from "../../../components/HeadingCard/HeadingCard";
import GalleryCard from "../../../components/Gallery/GalleryCard";

const GallerySection = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 pt-12">
      <HeadingCard
        heading={"Fashion in Focus"}
        subheading={
          "Explore our curated gallery to see how Symbol Eye brings style to life through every collection."
        }
      ></HeadingCard>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <GalleryCard></GalleryCard>
        <GalleryCard></GalleryCard>
        <GalleryCard></GalleryCard>
        <GalleryCard></GalleryCard>
      </div>
    </div>
  );
};

export default GallerySection;
