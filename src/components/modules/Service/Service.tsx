import LinkBox from "@/components/LinkBox/LinkBox";
import WhatIDo from "./WhatIDo/WhatIDo";
import Consult from "./Consult/Consult";
import PricingList from "./PricingList/PricingList";

interface IProps {
  isAdmin?: boolean;
}

const Service = ({ isAdmin }: IProps) => {
  return (
    <div className="overflow-hidden ">
      <div className="pPadding ">
        <LinkBox text1={"Service"} />
      </div>
      <div className="pPadding">
        <WhatIDo isAdmin={isAdmin || false} />
      </div>
      {/* <div className="p-5 md:p-28 bg-[#222222]">
        <TrustedClients />
      </div> */}
      <div>
        <Consult />
      </div>
      {/* <div className="p-5 md:p-28"> */}
      <div className="pPadding">
        <PricingList />
      </div>
      {/* <div className="pageMargin">
        <FunFact />
      </div> */}
    </div>
  );
};

export default Service;
