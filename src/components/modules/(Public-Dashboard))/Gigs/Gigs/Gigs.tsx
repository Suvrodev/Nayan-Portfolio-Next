"use client";
import LinkBox from "@/components/modules/(Public-Dashboard))/shared/LinkBox/LinkBox";
import { useEffect, useState } from "react";
import GigCard from "./GigCard/GigCard";
import { IGig } from "@/types/gigType";

const Gigs = () => {
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    fetch("/gigs.json")
      .then((res) => res.json())
      .then((data) => setGigs(data));
  }, []);
  console.log("Gig: ", gigs);

  if (!gigs) return <div className="text-center py-10">Loading...</div>;
  return (
    <div>
      <div className="m-5 md:m-16">
        <LinkBox text1={"Home"} text2={"Gig"} />
      </div>
      <div className="m-5 md:m-16">
        <h1 className="text-4xl font-bold text-white">Gigs</h1>

        <div className="my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gigs?.map((gig: IGig, idx: number) => (
            <GigCard key={idx} gig={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
