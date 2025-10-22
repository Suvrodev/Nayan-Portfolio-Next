/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { payMentLink } from "@/components/utils/variable/paymentLink";
import { Check, X } from "lucide-react";
import Link from "next/link";

const PackageTableFx = ({ packages }: { packages: any[] }) => {
  // Collect all unique features from all packages
  const allFeaturesSet = new Set<string>();
  packages.forEach((pkg) => {
    if (Array.isArray(pkg.tableFeatures)) {
      pkg.tableFeatures.forEach((feature: any) => {
        if (typeof feature === "string") {
          allFeaturesSet.add(feature);
        } else if (feature?.feature) {
          allFeaturesSet.add(feature.feature);
        }
      });
    }
  });

  const allFeatures = Array.from(allFeaturesSet);

  const renderValue = (matched: any) => {
    if (!matched) return <span>-</span>;

    if ("isEnable" in matched) {
      return matched.isEnable ? (
        <Check className="mx-auto text-green-500" size={18} />
      ) : (
        <X className="mx-auto text-red-500" size={18} />
      );
    }

    if ("text" in matched) {
      return <span className="text-white">{matched.text}</span>;
    }

    return <span>-</span>;
  };

  return (
    <div className="overflow-x-auto mt-8">
      <h2 className="text-lg font-semibold mb-4">Compare packages</h2>
      <table className="min-w-full text-sm text-left border border-gray-200">
        <thead>
          <tr>
            <th className="p-3 border bg-gray-800 text-white">Package</th>
            {packages.map((pkg) => (
              <th
                key={pkg.name}
                className="p-3 border text-left bg-gray-800 text-white"
              >
                <div className="font-semibold text-base">${pkg.price}</div>
                <div className="font-medium text-white/80">{pkg.name}</div>

                <p className="font-medium mt-4 mb-2 text-[12px] text-white/90">
                  {pkg.tableConcept}
                </p>

                <p className="text-[14px] mt-1 text-gray-400">{pkg.tabBody}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allFeatures.map((feature) => (
            <tr key={feature} className="bg-gray-900 text-white">
              <td className="p-3 border font-medium">{feature}</td>
              {packages.map((pkg) => {
                let matched = null;

                if (Array.isArray(pkg.tableFeatures)) {
                  matched = pkg.tableFeatures.find(
                    (f: any) =>
                      (typeof f === "string" && f === feature) ||
                      f.feature === feature
                  );
                }

                return (
                  <td
                    key={pkg.name + feature}
                    className="p-3 border text-center"
                  >
                    {renderValue(matched)}
                  </td>
                );
              })}
            </tr>
          ))}

          <tr className="bg-gray-800 text-white">
            <td className="p-3 border font-semibold align-top">Total</td>
            {packages.map((pkg) => (
              <td key={pkg.name} className="p-3 border text-center font-medium">
                <div className="flex flex-col justify-center items-center gap-y-4">
                  <span>${pkg.price}</span>
                  <Link href={payMentLink} target="_blank">
                    <button className="primaryButton">Select</button>
                  </Link>
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
