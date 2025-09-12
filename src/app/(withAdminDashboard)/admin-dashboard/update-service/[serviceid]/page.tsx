import UpdateService from "@/components/modules/(Public-Dashboard))/Service/UpdateService/UpdateService";
import NotFoundData from "@/components/NotFoundData/NotFoundData";
import { baseApiFromEnv } from "@/components/utils/functions/baseApiFromenv";
import { TService } from "@/types/globalTypes";

interface IProps {
  params: Promise<{
    serviceid: string;
  }>;
}
const UpdateServicePage = async ({ params }: IProps) => {
  const { serviceid } = await params;
  const res = await fetch(`${baseApiFromEnv()}/service/${serviceid}`);
  const data = await res.json();
  const service: TService = data?.data;

  if (!service) {
    return <NotFoundData speed={1}>Service Not Found</NotFoundData>;
  }
  return (
    <div>
      <UpdateService service={service} />
    </div>
  );
};

export default UpdateServicePage;
