import React from "react";
import ServiceCard from "../../../components/Service/ServiceCard";

const ServiceSection = () => {
  return (
    <div className=" max-w-7xl mx-auto px-5 my-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
      </div>
    </div>
  );
};

export default ServiceSection;
