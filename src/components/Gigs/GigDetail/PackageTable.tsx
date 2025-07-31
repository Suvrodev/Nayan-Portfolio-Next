import { Check } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PackageTable = ({ packages }: { packages: any[] }) => {
  const renderCheck = (value: boolean) =>
    value ? <Check className="textwhite mx-auto" size={18} /> : null;

  return (
    <div className="overflow-x-auto mt-8">
      <h2 className="text-lg font-semibold mb-4">Compare packages</h2>
      <table className="min-w-full text-sm text-left border border-gray-200">
        <thead>
          <tr>
            <th className="p-3 border">Package</th>
            {packages.map((pkg) => (
              <th key={pkg.name} className="p-3 border text-center">
                <div className="font-semibold text-base">${pkg.price}</div>
                <div className="font-medium">{pkg.name}</div>
                <p className="text-xs mt-1 text-gray-500">
                  {pkg.revisions} Revisions + Double Sided + 300dpi <br />
                  CMYK + JPG, PDF {pkg.sourceFile ? "+ Source Files" : ""}{" "}
                  {pkg.printReady ? "+ Print Ready" : ""}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 border">Print-Ready</td>
            {packages.map((pkg) => (
              <td key={pkg.name} className="p-3 border text-center">
                {renderCheck(pkg.printReady)}
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-3 border">Source File</td>
            {packages.map((pkg) => (
              <td key={pkg.name} className="p-3 border text-center">
                {renderCheck(pkg.sourceFile)}
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-3 border">Double-sided</td>
            {packages.map((pkg) => (
              <td key={pkg.name} className="p-3 border text-center">
                {renderCheck(pkg.doubleSided)}
              </td>
            ))}
          </tr>
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
                {pkg.delivery}
              </td>
            ))}
          </tr>
          <tr>
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
          </tr>
          <tr>
            <td className="p-3 border">Total</td>
            {packages.map((pkg) => (
              <td key={pkg.name} className="p-3 border text-center font-medium">
                ${pkg.price}
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-3 border"></td>
            {packages.map((pkg) => (
              <td key={pkg.name} className=" p-3 border text-center">
                <div className="flex justify-center">
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

export default PackageTable;

/*************
 * https://www.fiverr.com/sarkar_nayan/do-luxury-business-card-and-logo-design-in-24-hours-5b3a?context_referrer=tailored_homepage_perseus&source=recently_viewed_gigs&ref_ctx_id=0e9e1678ecfa4c31b88bb2b454aeb9d2&context=recommendation&pckg_id=1&pos=1&context_alg=recently_viewed&seller_online=true&imp_id=5b5e2a0c-8376-413f-a903-78479bffe65e
 * Questuin:
 * 1. Double Sided + 300dpi CMYK + JPG, PDF + Print Ready
 * 2. Niche Form Bangladesh lagbe ki na
 * 3. Niche Review Lagbe ki na
 * 4. Type Thik kora lagbe
 */
