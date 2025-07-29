import LinkBox from "@/components/LinkBox/LinkBox";
import Consult from "@/components/modules/Service/Consult/Consult";
import PricingList from "@/components/modules/Service/PricingList/PricingList";
import WhatIDo from "@/components/modules/Service/WhatIDo/WhatIDo";

const ServicePage = () => {
  return (
    <div className="overflow-hidden">
      <div className="pageMargin">
        <LinkBox text1={"Service"} />
      </div>
      <div className="pageMargin">
        <WhatIDo isAdmin={true} />
      </div>
      {/* <div className="p-5 md:p-28 bg-[#222222]">
        <TrustedClients />
      </div> */}
      <div>
        <Consult />
      </div>
      {/* <div className="p-5 md:p-28"> */}
      <div className="pageMargin">
        <PricingList />
      </div>
      {/* <div className="pageMargin">
        <FunFact />
      </div> */}
    </div>
  );
};

export default ServicePage;
