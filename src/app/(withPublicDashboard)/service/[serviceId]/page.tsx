/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams } from "next/navigation";
import "./serviceDetail.css";
import React, { useEffect, useState } from "react";
import { TUpdateService } from "@/types/serviceType";

import ServiceDetailHero from "./ServiceDetailHero/ServiceDetailHero";
import NotFoundData from "@/components/NotFoundData/NotFoundData";
import KeyAspect from "./KeyAspect/KeyAspect";
import SkillLogo from "./SkillLogo/SkillLogo";
import EssentialSkill from "./EssentialSkill/EssentialSkill";
import ServiceComponent from "./ServiceComponent/ServiceComponent";
import ServiceDetailSkeliton from "./_ServiceDetailSkeliton/ServiceDetailSkeliton";

const ServiceDetailPage = () => {
  const params = useParams();
  const rawId = Array.isArray(params?.serviceId)
    ? params.serviceId[0]
    : params?.serviceId ?? "";
  const serviceId = decodeURIComponent(rawId);

  const [service, setService] = useState<TUpdateService | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("/service.json", { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
        const data: TUpdateService[] = await res.json();

        const matched = data.find(
          (item: TUpdateService) => String(item.id) === String(serviceId)
        );

        if (isMounted) setService(matched ?? null);
      } catch (e: any) {
        if (isMounted) setError(e?.message || "Something went wrong");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    load();
    return () => {
      isMounted = false;
    };
  }, [serviceId]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6 md:p-10">
        <ServiceDetailSkeliton />
      </div>
    );
  }

  if (error) {
    return <NotFoundData speed={1}>Error: {error}</NotFoundData>;
  }

  if (!service) {
    return <NotFoundData speed={1}>Service Not Found</NotFoundData>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10">
      <ServiceDetailHero service={service} />

      {/* For Web Development */}
      {service?.components && (
        <div className="mt-20 mb-10">
          <ServiceComponent service={service} />
        </div>
      )}

      {service?.keyAspect && (
        <div className="mt-20 mb-10">
          <KeyAspect service={service} />
        </div>
      )}

      {serviceId === "688502c459d18f392f6af6ca" && (
        <div className="mt-20 mb-10">
          <EssentialSkill service={service} />
        </div>
      )}

      <div className="my-10">
        <SkillLogo service={service} />
      </div>

      {serviceId !== "688502c459d18f392f6af6ca" && (
        <div className=" mb-10">
          <EssentialSkill service={service} />
        </div>
      )}
    </div>
  );
};

export default ServiceDetailPage;
