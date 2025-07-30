import { getIsAdminFromHeaders } from "@/app/actions/getIsAdminFromHeaders";
import LinkBox from "@/components/LinkBox/LinkBox";
import PortfolioContent from "@/components/modules/Portfolio/PortfolioContent/PortfolioContent";
import { baseApiFromEnv } from "@/components/utils/functions/baseApiFromenv";
import { createTitle } from "@/components/utils/functions/metadata";

export const metadata = createTitle("Portfolio");

const PortfolioPage = async () => {
  const res = await fetch(`${baseApiFromEnv()}/portfolioo`, {
    next: {
      revalidate: 30,
    },
  });
  const portfolioData = await res.json();
  const portfolios = portfolioData.data;
  //   console.log("portfolio: ", portfolios);

  const isAdmin = await getIsAdminFromHeaders();
  console.log("is Admin: ", isAdmin);

  return (
    <div>
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

export default PortfolioPage;
