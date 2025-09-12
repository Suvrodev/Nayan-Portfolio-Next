import LinkBox from "@/components/modules/(Public-Dashboard))/shared/LinkBox/LinkBox";
import { baseApiFromEnv } from "@/components/utils/functions/baseApiFromenv";
import React from "react";
import PortfolioContent from "./PortfolioContent/PortfolioContent";

interface IProps {
  isAdmin: boolean;
}

const Portfolio = async ({ isAdmin }: IProps) => {
  const res = await fetch(`${baseApiFromEnv()}/portfolioo`, {
    next: {
      revalidate: 30,
      tags: ["portfolio"],
    },
  });
  const portfolioData = await res.json();
  const portfolios = portfolioData.data;
  return (
    <div className="overflow-hidden">
      <div className="m-5 md:m-16">
        <LinkBox text1={"Home"} text2={"Creative portfolio"} />
      </div>

      <div className="m-5 md:m-16">
        <h1 className="text-4xl font-bold text-white">Creative Portfolio</h1>

        <div className="my-20">
          <PortfolioContent portfolios={portfolios} isAdmin={isAdmin} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
