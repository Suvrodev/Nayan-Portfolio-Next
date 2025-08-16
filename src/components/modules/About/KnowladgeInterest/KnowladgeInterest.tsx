"use client";
import { useEffect, useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const KnowladgeInterest = () => {
  const [knowladges, setKnowladges] = useState([]);
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    fetch("/knowladgeInterests.json")
      .then((res) => res.json())
      .then((data) => {
        setInterests(data[0]?.interests);
        setKnowladges(data[0]?.knowladge);
      });
  }, []);
  return (
    <div>
      <div className="flex flex-col md:flex-row  ">
        <div className="w-full md:w-1/2  ">
          <h1 className="text-xl text-white font-bold mb-10 pDesc">
            Knowledges
          </h1>
          {knowladges.map((knowladge, idx) => (
            <p key={idx} className="c text-[18px] mb-2 pDesc">
              {" "}
              <ArrowRightIcon /> <span>{knowladge}</span>
            </p>
          ))}
        </div>

        <div className="w-full md:w-1/2  ">
          {" "}
          <h1 className="text-xl text-white font-bold mb-10">Ineterests</h1>
          {interests.map((knowladge, idx) => (
            <p key={idx} className="c  text-[18px] mb-2 pDesc">
              {" "}
              <ArrowRightIcon /> <span>{knowladge}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowladgeInterest;
