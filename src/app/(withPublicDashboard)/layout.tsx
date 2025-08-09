import WeAccept from "@/components/modules/shared/Footer/WeAccept";
import MobileHeader from "@/components/modules/shared/PublicDashboard/MobileHeader/MobileHeader";
import PublicDashboard from "@/components/modules/shared/PublicDashboard/PublicDashboard";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: IProps) => {
  return (
    <div>
      <div className="flex">
        <div className="w-[20%] hidden md:block ">
          <PublicDashboard />
        </div>
        <div className="w-full md:w-[80%]  ">
          {/* <div className="hidden md:block">
          <Cursor />
        </div>*/}
          <div className="md:hidden sticky top-0 z-50">
            <MobileHeader />
          </div>
          <div className="mt-20 md:mt-0">{children}</div>

          <div className="bg-[#222222] p-20 md:py-16 ">
            <WeAccept />
          </div>

          {/* For Store Data */}
          {/* <StoreService /> */}
        </div>
      </div>
    </div>
  );
};

export default PublicLayout;
