import WeAccept from "@/components/modules/shared/Footer/WeAccept";
import AdminDashboard from "@/components/modules/shared/Admin/Desktop/AdminDashboard";
// import PublicDashboard from "@/components/modules/shared/PublicDashboard/PublicDashboard";

interface IProps {
  children: React.ReactNode;
}

const UserLayout = ({ children }: IProps) => {
  return (
    <div className="flex">
      <div className="w-[20%] hidden md:block ">
        <AdminDashboard />
      </div>
      {/* <div className="w-full md:w-[80%] bg-[#333333]"> */}
      <div className="w-full md:w-[80%] ">
        <div className="md:hidden sticky top-0">{/* <MobileHeader /> */}</div>
        {children}

        <div className="bg-[#222222] p-20">
          <WeAccept />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
