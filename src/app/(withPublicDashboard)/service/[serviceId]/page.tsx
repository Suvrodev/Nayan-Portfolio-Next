"use client";
import { useParams } from "next/navigation";
import "./serviceDetail.css";
import React, { useEffect, useState } from "react";
import { TUpdateService } from "@/types/serviceType";

import sarkar from "@/app/assets/serviceDetail/serviceNayan.webp";
import Image from "next/image";

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  console.log("Service id:  ", serviceId);

  const [service, setService] = useState<TUpdateService | null>(null);

  useEffect(() => {
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => {
        // serviceId এর সাথে মিলে এমন service খুঁজে বের করা
        const matchedService = data.find(
          (item: TUpdateService) => item.id === serviceId
        );
        setService(matchedService);
      });
  }, [serviceId]);

  console.log("Selected Service: ", service);

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10">
      <div className=" flex flex-col md:flex-row items-stretch gap-10 secondaryBox text-white rounded-2xl p-8">
        {/* Image Section (30%) */}
        <div className="md:basis-[35%] flex justify-center items-center self-stretch">
          <Image
            src={sarkar}
            alt="Service Image"
            height={500}
            width={500}
            className=" w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full border-6 border-[#DCDCDC] object-cover"
          />
        </div>

        {/* Content Section (70%) */}
        <div className="md:basis-[65%] flex flex-col justify-center">
          <h2 className="text-xl md:text-3xl font-bold mb-4">
            {service?.title}
          </h2>

          <div className="flex flex-col gap-y-4">
            <p className="pDesc">{service?.hero?.text1}</p>
            <p className="pDesc">{service?.hero?.text2}</p>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="primaryButton">Hire Me</button>
            <button className="primaryButton">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
