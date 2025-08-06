"use client";
import nayanImage from "@/app/assets/Nayan.webp";
import { useEffect, useState } from "react";
import ImageCarousel from "./ImageCarousel";
import Image from "next/image";
import PackageTabs from "./GigTab/PackageTabs";
import PackageTableFx from "./GigTable/PackageTableFx";
import { TGig } from "@/types/globalTypes";
import First from "./AboutGig/First";
import GetToKnow from "../GetToKnow/GetToKnow";

interface IProps {
  id: string;
}

const GigDetail = ({ id }: IProps) => {
  const [gig, setGig] = useState<TGig | null>(null);

  useEffect(() => {
    fetch("/gigs.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Data: ", data);
        setGig((data as TGig[]).find((d) => d._id === id) || null);
      });
  }, [id]);

  console.log("Gig: ", gig);

  if (!gig) return <div className="text-center py-10">Loading...</div>;
  return (
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
              className="rounded-full object-contain"
            />
            <p className="text-sm  ">
              By <strong>{gig.seller.name}</strong> | ⭐ {gig.seller.rating} (
              {gig.seller.reviews} reviews)
            </p>
          </div>
          <ImageCarousel images={gig.images} />
          <div>
            <h1 className="font-bold text-2xl mt-8 mb-4">About This Gig</h1>
            <First />
          </div>
          <div>
            <GetToKnow />
          </div>
        </div>
        <div className="w-full md:w-2/5  sticky top-0 self-start">
          <PackageTabs packages={gig.packages} />
        </div>
      </div>

      <div>
        {/* <PackageTable packages={gig.packages} /> */}
        <PackageTableFx packages={gig.packages} />
      </div>
    </div>
  );
};

export default GigDetail;
