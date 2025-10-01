"use client";
import { useParams } from "next/navigation";
import "./serviceDetail.css";
import React, { useEffect, useState } from "react";
import { TUpdateService } from "@/types/serviceType";

import ServiceDetailHero from "./ServiceDetailHero/ServiceDetailHero";
import NotFoundData from "@/components/NotFoundData/NotFoundData";
import KeyAspect from "./KeyAspect/KeyAspect";
import SkillLogo from "./SkillLogo/SkillLogo";

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

  if (!service) {
    return <NotFoundData speed={1}>Service Not Found</NotFoundData>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10">
      <ServiceDetailHero service={service} />

      <div className="mt-20 mb-10">
        <div>
          <KeyAspect service={service} />
        </div>
      </div>

      <div className="mt-20 mb-10">
        <div>
          <SkillLogo service={service} />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
