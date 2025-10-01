"use client";
import { useParams } from "next/navigation";
import "./serviceDetail.css";
import React, { useEffect, useState } from "react";
import { TUpdateService } from "@/types/serviceType";

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  console.log("Service id:  ", serviceId);

  const [service, setService] = useState(null);

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
    <div>
      <h1>Service id: {serviceId} </h1>
    </div>
  );
};

export default ServiceDetailPage;
