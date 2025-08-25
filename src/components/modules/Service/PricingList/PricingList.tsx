"use client";
import { useEffect, useState } from "react";
import PriceBox from "./PriceBox";

const PricingList = () => {
  const [pricingLists, setPricingLists] = useState([]);
  useEffect(() => {
    fetch("/priceList.json")
      .then((res) => res.json())
      .then((data) => setPricingLists(data));
  }, []);

  return (
    <div>
      <h2 className="pTitle mb-20">Pricing List</h2>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-16 md:gap-y-0">
          {pricingLists.map((p, idx) => (
            <PriceBox key={idx} p={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingList;
