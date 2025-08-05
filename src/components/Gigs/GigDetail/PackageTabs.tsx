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
    // <div className="mt-4 border rounded-md shadow-sm">
    //   <div className="flex justify-between px-4 pt-4">
    //     {packages.map((pkg) => (
    //       <button
    //         key={pkg.name}
    //         className={tabStyle(pkg.name)}
    //         onClick={() => setSelected(pkg.name)}
    //       >
    //         {pkg.name}
    //       </button>
    //     ))}
    //   </div>
    //   <div className="p-4">
    //     {packages.map(
    //       (pkg) =>
    //         pkg.name === selected && <PackageCard key={pkg.name} data={pkg} />
    //     )}
    //   </div>
    // </div>
    <div></div>
  );
};

export default PackageTabs;
