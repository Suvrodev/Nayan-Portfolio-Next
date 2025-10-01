import { TKeyAspectItem, TUpdateService } from "@/types/serviceType";
import React from "react";

interface IProps {
  service: TUpdateService;
}

const ServiceComponent = ({ service }: IProps) => {
  return (
    <div>
      <h2 className="pTitle text-center my-10">{service?.components?.title}</h2>

      <div
        className=" grid grid-cols-1 md:grid-cols-3 gap-4
            md:[&>*:nth-last-child(1):nth-child(3n+1)]:col-span-3
            md:[&>*:nth-last-child(2):nth-child(3n+1)]:col-span-3
            md:[&>*:nth-last-child(1):nth-child(3n+2)]:col-span-3"
      >
        {service?.components?.skills_?.map(
          (data: TKeyAspectItem, idx: number) => (
            <div key={idx} className="primaryBox p-4 rounded-md w-full">
              <h2 className="text-center text-2xl text-white font-bold mb-4">
                {data.title}
              </h2>
              <p className="pDesc text-center">{data.desc}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ServiceComponent;
