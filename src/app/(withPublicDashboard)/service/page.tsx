import Service from "@/components/modules/(Public-Dashboard))/Service/Service";
import { createTitle } from "@/components/utils/functions/metadata";

export const metadata = createTitle("Service");

const ServicePage = async () => {
  // const isAdmin = await getCurrentUserRole();
  // console.log("Is Admin: ", isAdmin);

  return (
    <div>
      <Service isAdmin={false} />
    </div>
  );
};

export default ServicePage;
