"use client";
import { useState } from "react";
import PackageCard from "./PackageCard";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PackageTabs = ({ packages }: { packages: any[] }) => {
  const [selected, setSelected] = useState("Basic");

  const tabStyle = (name: string) =>
    ` text-sm font-medium  border-green-500 ${
      selected === name
        ? "border-b-2 border-white text-white"
        : "text-gray-400 border-transparent"
    }`;

  return (
    <div className="mt-4 border rounded-md shadow-sm">
      {/* Tab headers */}
      <div className="flex justify-between px-4 pt-4">
        {packages.map((pkg) => (
          <button
            key={pkg.name}
            className={` px-4 py-2  border-white ${tabStyle(pkg.name)}`}
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
              <div key={idx}>
                <PackageCard key={idx} data={pkg} />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default PackageTabs;
