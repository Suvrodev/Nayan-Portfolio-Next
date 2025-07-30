import PortfolioPage from "@/app/(withPublicDashboard)/portfolio/page";
import React from "react";

const AdminPortfolio = () => {
  return (
    <div>
      <PortfolioPage isAdmin={true} />
    </div>
  );
};

export default AdminPortfolio;
