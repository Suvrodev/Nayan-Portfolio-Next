import React from "react";

const ServiceDetailSkeliton = () => {
  return (
    <div>
      {/* Title Skeleton */}
      <div className="h-8 w-1/3 mx-auto bg-gray-200 rounded-md animate-pulse mb-10" />

      {/* Grid Skeleton */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4
        md:[&>*:nth-last-child(1):nth-child(3n+1)]:col-span-3
        md:[&>*:nth-last-child(2):nth-child(3n+1)]:col-span-3
        md:[&>*:nth-last-child(1):nth-child(3n+2)]:col-span-3"
      >
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="p-4 rounded-md w-full bg-gray-200 animate-pulse space-y-4"
          >
            <div className="h-6 w-2/3 mx-auto bg-gray-300 rounded" />
            <div className="h-4 w-full bg-gray-300 rounded" />
            <div className="h-4 w-5/6 mx-auto bg-gray-300 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetailSkeliton;
