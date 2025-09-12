import UpdatePortfolio from "@/components/modules/(Public-Dashboard))/Portfolio/UpdatePortfolio/UpdatePortfolio";
import NotFoundData from "@/components/NotFoundData/NotFoundData";
import { baseApiFromEnv } from "@/components/utils/functions/baseApiFromenv";
import { TPortfolio } from "@/types/globalTypes";

interface IProps {
  params: Promise<{
    portfolioid: string;
  }>;
}
const UpdateServicePage = async ({ params }: IProps) => {
  const { portfolioid } = await params;
  const res = await fetch(`${baseApiFromEnv()}/portfolioo/${portfolioid}`);
  const data = await res.json();
  const portfolio: TPortfolio = data?.data;

  if (!portfolio) {
    return <NotFoundData speed={1}>Portfolio Not Found</NotFoundData>;
  }
  return (
    <div>
      <UpdatePortfolio portfolio={portfolio} />
    </div>
  );
};

export default UpdateServicePage;
