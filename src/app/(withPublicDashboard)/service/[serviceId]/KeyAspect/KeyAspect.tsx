import { TKeyAspectItem, TUpdateService } from "@/types/serviceType";
import React from "react";

interface IProps {
  service: TUpdateService;
}

const KeyAspect = ({ service }: IProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-10">
        {service?.keyAspect?.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:justify-items-center">
        {service?.keyAspect?.keyAspects?.map(
          (data: TKeyAspectItem, idx: number) => (
            <div key={idx} className="primaryBox p-4 rounded-md w-full">
              <h2 className="text-center text-2xl text-white font-bold mb-4">
                <span>{idx + 1}.</span> {data.title}
              </h2>
              <p className="pDesc text-center">{data.desc}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default KeyAspect;
