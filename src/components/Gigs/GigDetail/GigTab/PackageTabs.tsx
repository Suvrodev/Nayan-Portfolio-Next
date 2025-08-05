"use client";
import { useState } from "react";
import PackageCard from "./PackageCard";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PackageTabs = ({ packages }: { packages: any[] }) => {
  const [selected, setSelected] = useState("Standard");

  const tabStyle = (name: string) =>
    `px-4 py-2 text-sm font-medium border-b-2 ${
      selected === name
        ? "border-white text-white"
        : "text-gray-400 border-transparent"
    }`;

  return (
    <div className="mt-4 border rounded-md shadow-sm">
      {/* Tab headers */}
      <div className="flex justify-between px-4 pt-4">
        {packages.map((pkg) => (
          <button
            key={pkg.name}
            className={tabStyle(pkg.name)}
            onClick={() => setSelected(pkg.name)}
          >
            {pkg.name}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-4">
        {packages.map(
          (pkg, idx: number) =>
            pkg.name === selected && (
              // <div key={pkg.name}>
              //   {/* Title & Price */}
              //   <div className="mb-4">
              //     <h3 className="text-xl font-bold text-white">
              //       {pkg.name} Package
              //     </h3>
              //     <p className="text-gray-400">${pkg.price}</p>
              //   </div>

              //   {/* Concepts */}
              //   <p className="font-medium text-[13px] text-white/90 mb-2">
              //     {pkg.concept}
              //   </p>

              //   {/* Format & Enabled Features */}
              //   <p className="text-[13px] text-gray-400 leading-relaxed">
              //     {pkg.formate}
              //     {pkg.features
              //       ?.filter((f: any) => typeof f !== "string" && f.isEnable)
              //       .map((f: any) => ` + ${f.feature}`)
              //       .join(" ")}
              //   </p>

              //   {/* Revisions, Delivery */}
              //   <p className="text-[13px] text-gray-400 mt-2">
              //     {pkg.revisions} Revisions • {pkg.delivery} Delivery
              //   </p>

              //   {/* Button */}
              //   <div className="mt-4">
              //     <button className="primaryButton w-full">
              //       Select This Package
              //     </button>
              //   </div>
              // </div>
              <PackageCard key={idx} data={pkg} />
            )
        )}
      </div>
    </div>
  );
};

export default PackageTabs;
