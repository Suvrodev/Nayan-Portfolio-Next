import ServicePage from "@/app/(withPublicDashboard)/service/page";

const AdminServicePage = () => {
  return (
    <div>
      <ServicePage isAdmin={true} />
    </div>
  );
};

export default AdminServicePage;
