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
import SeoComponent from "./SeoComponent/SeoComponent";

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
    <div className="m-5 md:m-16">
      <ServiceDetailHero service={service} />

      {/* For Web Development */}
      {/* Web Development chaera component nai */}
      {service?.components && (
        <div className="mt-20 mb-10">
          <h2>Component</h2>
          <ServiceComponent service={service} />
        </div>
      )}

      {/* Key Aspect */}
      {service?.keyAspect && (
        <div className="mt-20 mb-10">
          <h2>Key of Aspects</h2>
          <KeyAspect service={service} />
        </div>
      )}

      {/* Sudhu Web Development er janno Skill Logo er upore Skill */}
      {/* Web Development e KeyASpect nai */}
      {serviceId === "688502c459d18f392f6af6ca" && (
        <div className="mt-20 mb-10">
          <EssentialSkill service={service} />
        </div>
      )}

      {/* Eta Sudhu SEO er janno */}
      {/* {service?.skilsWithArray && (
        <div className=" mb-10">
          <h1>Skill with Array</h1>
          <SkillWithArray service={service} />
        </div>
      )} */}

      {serviceId === "68896959b13ed74fdd7fe83c" && <SeoComponent />}

      {/* Here Logo */}
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
