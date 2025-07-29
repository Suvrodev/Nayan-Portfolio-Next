import { baseApiFromEnv } from "@/components/utils/functions/baseApiFromenv";
import ServiceBox from "./ServiceBox/ServiceBox";
import { TService } from "@/types/globalTypes";

const WhatIDo = async ({ isAdmin }: { isAdmin: boolean }) => {
  const res = await fetch(`${baseApiFromEnv()}/service`, {
    next: {
      revalidate: 30,
      tags: ["servcie"],
    },
  });
  const data = await res.json();
  const services = data?.data;
  console.log("services: ", services);
  return (
    <div>
      <h1 className="text-4xl text-white font-bold">What I do</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
        {services?.map((servcie: TService, idx: number) => (
          <ServiceBox key={idx} service={servcie} isAdmin={isAdmin} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;
