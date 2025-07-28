import NotFoundData from "@/components/NotFoundData/NotFoundData";
import { baseApiFromEnv } from "@/components/utils/functions/baseApiFromenv";
import Image from "next/image";

interface IProps {
  params: Promise<{
    portfolioId: string;
  }>;
}
const PortfolioPage = async ({ params }: IProps) => {
  const { portfolioId } = await params;
  const res = await fetch(`${baseApiFromEnv()}/portfolioo/${portfolioId}`, {
    cache: "no-store",
  });
  const data = await res.json();
  const portfolio = data?.data;

  if (!portfolio) {
    return (
      <NotFoundData speed={1}>
        <div>
          <h1>Portfolio</h1>
          <h1>Not Found</h1>
        </div>
      </NotFoundData>
    );
  }
  return (
    <div className="min-h-screen flex justify-center items-center my-6 px-4">
      <div className="max-w-4xl w-full mx-auto primaryBox p-6 rounded-2xl shadow-xl">
        {/* Image */}
        {/* <SmartImage
          src={portfolio?.image}
          alt={portfolio?.title}
          className="w-full h-72 md:h-96 object-cover rounded-lg mb-6 border border-gray-700"
        /> */}

        <Image
          src={portfolio?.image || "/placeholder.jpg"}
          alt={portfolio?.title || "Portfolio Image"}
          width={800}
          height={800}
          className="w-full h-72 md:h-96 object-con rounded-lg mb-6 border border-gray-700"
          style={{ objectFit: "cover" }}
        />

        {/* Title and Category */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
          <h1 className="text-3xl font-bold text-white">{portfolio.title}</h1>
          <span className="text-sm primaryBox px-4 py-1 rounded-full text-white">
            {portfolio.category}
          </span>
        </div>

        {/* Description */}
        {/* <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
          {portfolio.description}
        </p> */}
        <div
          className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg"
          dangerouslySetInnerHTML={{ __html: portfolio.description }}
        ></div>

        {/* Price and Link */}
        <div className="mt-8 flex flex-wrap justify-between items-center gap-4">
          <p className="text-lg font-semibold text-green-400">
            Price: ${portfolio.price}
          </p>
          <a href={portfolio.link} target="_blank" rel="noopener noreferrer">
            <button className="primaryButton">View Live Project</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
