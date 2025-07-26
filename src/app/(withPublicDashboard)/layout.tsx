import WeAccept from "@/components/modules/shared/Footer/WeAccept";
import PublicDashboard from "@/components/modules/shared/PublicDashboard/PublicDashboard";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: IProps) => {
  return (
    <div>
      {/* {children}
      <div className="bg-[#222222] p-20">
        <WeAccept />
      </div> */}

      <div className="flex">
        <div className="w-[20%] hidden md:block ">
          <PublicDashboard />
        </div>
        {/* <div className="w-full md:w-[80%] bg-[#333333]"> */}
        <div className="w-full md:w-[80%] ">
          {/* <div className="hidden md:block">
          <Cursor />
        </div>
        <div className="md:hidden sticky top-0">
          <MobileHeader />
        </div> */}
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

export default PublicLayout;
