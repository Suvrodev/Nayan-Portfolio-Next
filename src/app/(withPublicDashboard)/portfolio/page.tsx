import Portfolio from "@/components/modules/(Public-Dashboard))/Portfolio/Portfolio";
import { createTitle } from "@/components/utils/functions/metadata";

export const metadata = createTitle("Portfolio");

const PortfolioPage = async () => {
  return (
    <div>
      <Portfolio isAdmin={false} />
    </div>
  );
};

export default PortfolioPage;
