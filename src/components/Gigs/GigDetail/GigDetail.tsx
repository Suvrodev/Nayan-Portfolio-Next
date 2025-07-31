"use client";
import nayanImage from "@/app/assets/Nayan.webp";
import { GigData } from "@/types/globalTypes";
import { useEffect, useState } from "react";
import ImageCarousel from "./ImageCarousel";
import PackageTabs from "./PackageTabs";
import PackageTable from "./PackageTable";
import Image from "next/image";

const GigDetail = () => {
  const [gig, setGig] = useState<GigData | null>(null);

  useEffect(() => {
    fetch("/gigs.json")
      .then((res) => res.json())
      .then((data) => setGig(data));
  }, []);

  if (!gig) return <div className="text-center py-10">Loading...</div>;
  return (
    // <div className="max-w-6xl mx-auto p-4">
    //   <h1 className="text-2xl font-bold mb-2">{gig.title}</h1>
    //   <div className="text-gray-600 mb-4">
    //     By <strong>{gig.seller.name}</strong> | ⭐ {gig.seller.rating} (
    //     {gig.seller.reviews} reviews)
    //   </div>

    //   <p className="mb-4">{gig.about}</p>
    //   <p className="mb-4">{gig.experience}</p>

    //   <h2 className="text-xl font-semibold mt-6 mb-2">My Services Include:</h2>
    //   <ul className="list-disc ml-6 mb-6 text-gray-700">
    //     {gig.services.map((item, index) => (
    //       <li key={index}>{item}</li>
    //     ))}
    //   </ul>

    //   <h2 className="text-xl font-semibold mb-4">Compare Packages</h2>
    //   <div className="grid md:grid-cols-3 gap-6">
    //     {gig.packages.map((pkg, index) => (
    //       <div
    //         key={index}
    //         className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition-all"
    //       >
    //         <h3 className="text-lg font-bold">
    //           {pkg.name} - ${pkg.price}
    //         </h3>
    //         <p className="text-sm text-gray-600 mb-2">
    //           {pkg.concepts} Concepts | {pkg.revisions} Revisions
    //         </p>
    //         <ul className="text-sm text-gray-700 mb-4 list-disc ml-4">
    //           {pkg.features.map((f, i) => (
    //             <li key={i}>{f}</li>
    //           ))}
    //           {pkg.sourceFile ? <li>Source File Included</li> : null}
    //         </ul>
    //         <p className="text-sm">
    //           Delivery: <strong>{pkg.delivery}</strong>
    //         </p>
    //         <div className="mt-3">
    //           {Object.entries(pkg.extraDelivery).map(([day, price], i) => (
    //             <p key={i} className="text-xs text-gray-500">
    //               +${price} for {day} delivery
    //             </p>
    //           ))}
    //         </div>
    //         <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
    //           Select
    //         </button>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="max-w-7xl mx-auto m-5 md:m-16">
      <div className=" md:flex gap-6">
        <div className="w-full md:w-3/5">
          <h1 className="text-2xl font-bold">{gig.title}</h1>
          <div className="flex items-center gap-x-4 my-4">
            <Image
              src={nayanImage}
              alt="Sarkar Nayan"
              width={30}
              height={30}
              className="rounded-full"
            />
            <p className="text-sm  ">
              By <strong>{gig.seller.name}</strong> | ⭐ {gig.seller.rating} (
              {gig.seller.reviews} reviews)
            </p>
          </div>
          <ImageCarousel images={gig.images} />
          <div>
            <h1 className="font-bold text-2xl mt-8 mb-4">About This Gig</h1>
            <p className="mb-4">{gig.about}</p>
          </div>
        </div>
        <div className="w-full md:w-2/5">
          <PackageTabs packages={gig.packages} />
        </div>
      </div>

      <div>
        <PackageTable packages={gig.packages} />
      </div>
    </div>
  );
};

export default GigDetail;
