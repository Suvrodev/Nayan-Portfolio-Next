import LinkBox from "@/components/LinkBox/LinkBox";
import WhatIDo from "./WhatIDo/WhatIDo";
import Consult from "./Consult/Consult";
import PricingList from "./PricingList/PricingList";
import "@/app/globals.css";

interface IProps {
  isAdmin?: boolean;
}

const Service = ({ isAdmin }: IProps) => {
  return (
    <div className="overflow-hidden ">
      <div className="m-5 md:m-16">
        <LinkBox text1={"Service"} />
      </div>
      <div className="m-5 md:m-16">
        <WhatIDo isAdmin={isAdmin || false} />
      </div>
      {/* <div className="p-5 md:p-28 bg-[#222222]">
        <TrustedClients />
      </div> */}
      <div>
        <Consult />
      </div>
      {/* <div className="p-5 md:p-28"> */}
      <div className="p-5 md:p-16">
        <PricingList />
      </div>
      {/* <div className="pageMargin">
        <FunFact />
      </div> */}
    </div>
  );
};

export default Service;
