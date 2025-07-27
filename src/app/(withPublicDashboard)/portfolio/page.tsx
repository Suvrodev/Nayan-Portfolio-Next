import LinkBox from "@/components/LinkBox/LinkBox";
import PortfolioContent from "@/components/modules/Portfolio/PortfolioContent/PortfolioContent";
import { baseApiFromEnv } from "@/components/utils/functions/baseApiFromenv";

const PortfolioPage = async () => {
  const res = await fetch(`${baseApiFromEnv()}/portfolioo`, {
    next: {
      revalidate: 30,
    },
  });
  const portfolioData = await res.json();
  const portfolios = portfolioData.data;
  //   console.log("portfolio: ", portfolios);

  return (
    <div>
      <div className="m-5 md:m-16">
        <LinkBox text1={"Home"} text2={"Creative portfolio"} />
      </div>

      <div className="m-5 md:m-16">
        <h1 className="text-4xl font-bold text-white">Creative Portfolio</h1>

        <div className="my-20">
          <PortfolioContent portfolios={portfolios} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
