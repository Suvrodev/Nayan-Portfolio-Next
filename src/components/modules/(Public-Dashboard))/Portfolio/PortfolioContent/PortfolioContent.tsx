"use client";
import { useAppSelector } from "@/redux/hook";
import PortfolioBox from "./PortfolioBox/PortfolioBox";
import PortfolioTabEZ from "./PortfolioTab/PortfolioTabEZ";
import { TPortfolio } from "@/types/globalTypes";

interface IProps {
  portfolios: TPortfolio[];
  isAdmin: boolean;
}

const PortfolioContent = ({ portfolios, isAdmin }: IProps) => {
  const { portfolioCategory } = useAppSelector(
    (state) => state?.portfolioCategories
  );

  // console.log("Portfolios: ", portfolios);
  const filteredPortfolios =
    portfolioCategory === "All"
      ? portfolios
      : portfolios?.filter(
          (item: TPortfolio) => item.category === portfolioCategory
        );

  return (
    <div className="space-y-6">
      {/* <PortfolioTab /> */}
      <PortfolioTabEZ />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  ">
        {filteredPortfolios?.map((item: TPortfolio, idx: number) => (
          <PortfolioBox key={idx} portfolio={item} isAdmin={isAdmin} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioContent;
