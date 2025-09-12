import Portfolio from "@/components/modules/(Public-Dashboard))/Portfolio/Portfolio";
import React from "react";

const AdminPortfolio = () => {
  return (
    <div>
      <Portfolio isAdmin={true} />
    </div>
  );
};

export default AdminPortfolio;
