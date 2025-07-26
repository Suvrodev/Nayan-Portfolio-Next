import WeAccept from "@/components/modules/shared/Footer/WeAccept";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: IProps) => {
  return (
    <div>
      <h1>Public Layout</h1>
      {children}
      <div className="bg-[#222222] p-20">
        <WeAccept />
      </div>
    </div>
  );
};

export default PublicLayout;
