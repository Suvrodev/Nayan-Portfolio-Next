/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Check } from "lucide-react";

const PackageTableFx = ({ packages }: { packages: any[] }) => {
  const renderCheck = (value: boolean) => (
    <Check
      className={`mx-auto ${value ? "text-white" : "text-white opacity-50"}`}
      size={18}
    />
  );

  // Collect all unique features from all packages (converted to object array if needed)
  const allFeaturesSet = new Set<string>();
  packages.forEach((pkg) => {
    if (Array.isArray(pkg.features)) {
      pkg.features.forEach((feature: any) => {
        if (typeof feature === "string") {
          allFeaturesSet.add(feature);
        } else if (feature?.feature) {
          allFeaturesSet.add(feature.feature);
        }
      });
    }
  });

  const allFeatures = Array.from(allFeaturesSet);

  return (
    <div className="overflow-x-auto mt-8">
      <h2 className="text-lg font-semibold mb-4">Compare packages</h2>
      <table className="min-w-full text-sm text-left border border-gray-200">
        <thead>
          <tr>
            <th className="p-3 border">Package</th>
            {packages.map((pkg) => (
              <th key={pkg.name} className="p-3 border text-left">
                <div className="font-semibold text-base">${pkg.price}</div>
                <div className="font-medium text-white/80">{pkg.name}</div>

                <p className="font-medium mt-4 mb-2 text-[12px] text-white/90">
                  {" "}
                  {pkg.concept}{" "}
                </p>

                {/* <p className="text-[14px] mt-1 text-gray-500">
                  {pkg.revisions} Revisions +{pkg.formate}
                  {pkg.features
                    ?.filter((f: any) => typeof f !== "string" && f.isEnable)
                    .map((f: any) => `+ ${f.feature}`)
                    .join(" ")}
                </p> */}
                <p className="text-[14px] mt-1 text-gray-500">{pkg.tabBody}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Dynamically render features */}
          {allFeatures.map((feature) => (
            <tr key={feature}>
              <td className="p-3 border">{feature}</td>
              {packages.map((pkg) => {
                let isEnabled = false;

                if (Array.isArray(pkg.features)) {
                  const matched = pkg.features.find((f: any) =>
                    typeof f === "string"
                      ? f === feature
                      : f.feature === feature
                  );
                  if (matched) {
                    isEnabled =
                      typeof matched === "string" ? true : matched.isEnable;
                  }
                }

                return (
                  <td
                    key={pkg.name + feature}
                    className="p-3 border text-center"
                  >
                    {renderCheck(isEnabled)}
                  </td>
                );
              })}
            </tr>
          ))}

          {/* Other rows like concepts, revisions, etc. */}
          <tr>
            <td className="p-3 border">Design Concepts</td>
            {packages.map((pkg) => (
              <td key={pkg.name} className="p-3 border text-center">
                {pkg.concepts}
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-3 border">Revisions</td>
            {packages.map((pkg) => (
              <td key={pkg.name} className="p-3 border text-center">
                {pkg.revisions}
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-3 border">Delivery Time</td>
            {packages.map((pkg) => (
              <td key={pkg.name} className="p-3 border text-center">
                {pkg.delivery} days
              </td>
            ))}
          </tr>
          {/* <tr>
            <td className="p-3 border">Extra Fast</td>
            {packages.map((pkg) => (
              <td
                key={pkg.name}
                className="p-3 border text-center text-xs text-gray-500"
              >
                {pkg.extraDelivery
                  ? Object.entries(pkg.extraDelivery).map(
                      ([day, cost]) => `${day} (+$${cost})`
                    )
                  : "—"}
              </td>
            ))}
          </tr> */}
          <tr className="">
            <td className="p-3 border font-semibold  align-top">Total</td>
            {packages.map((pkg) => (
              <td key={pkg.name} className="p-3 border text-center font-medium">
                <div className="flex flex-col justify-center items-center gap-y-4">
                  <span>${pkg.price}</span>
                  <button className="primaryButton">Select</button>
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PackageTableFx;
