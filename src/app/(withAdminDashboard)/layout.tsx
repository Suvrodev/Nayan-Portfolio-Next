"use client";
import WeAccept from "@/components/modules/shared/Footer/WeAccept";
import AdminDashboard from "@/components/modules/shared/Admin/Desktop/AdminDashboard";
import LayoutMobileHeader from "./LayoutAction/LayoutMobileHeader";
import { useAppSelector } from "@/redux/hook";
import { useDispatch } from "react-redux";
import { setDrawer } from "@/redux/features/drawer/drawerSlice";
// import PublicDashboard from "@/components/modules/shared/PublicDashboard/PublicDashboard";

interface IProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: IProps) => {
  const dispatch = useDispatch();
  const { isOpen } = useAppSelector((state) => state.drawer);
  // console.log("isOpen: ", isOpen);
  return (
    // Main Code STart
    // <div className="flex">
    //   <div className="w-[20%] hidden md:block ">
    //     <AdminDashboard />
    //   </div>
    //   {/* <div className="w-full md:w-[80%] bg-[#333333]"> */}
    //   <div className="w-full md:w-[80%] ">
    //     <div className="md:hidden sticky top-0">{/* <MobileHeader /> */}</div>
    //     {children}

    //     <div className="bg-[#222222] p-20">
    //       <WeAccept />
    //     </div>

    //     {/* For Store Data */}
    //     {/* <StoreService /> */}
    //   </div>
    // </div>
    // Main Code End

    <div>
      {/* Mobile Header */}
      <div className="sticky top-0 z-50">
        <LayoutMobileHeader />
      </div>
      <div className="relative md:flex">
        <div
          className={`w-full md:w-[20%] z-10  ${
            isOpen ? "left-0" : "-left-[400px]"
          } fixed  md:static bg-transparent  top-10 h-screen  transition-all duration-300 ease-in-out`}
          onClick={() => dispatch(setDrawer(false))}
        >
          <div
            className="w-[75%] md:w-full md:static"
            onClick={(e) => e.stopPropagation()}
          >
            <AdminDashboard />
          </div>
        </div>
        {/* <div className="w-full md:w-[80%] bg-[#333333]"> */}
        <div className="w-full md:w-[80%] ">
          {children}

          <div className="bg-[#222222] p-20">
            <WeAccept />
          </div>

          {/* For Store Data */}
          {/* <StoreService /> */}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
