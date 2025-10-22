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
import TestimonialMx from "@/components/modules/(Public-Dashboard))/Home/Testimonial/TestimonialMx";
import Certificate from "@/components/modules/(Public-Dashboard))/Home/Certificate/Certificate";
import HomeContact from "@/components/modules/(Public-Dashboard))/Home/HomeContact/HomeContact";

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
    <div className="">
      <div className="m-5 md:m-16">
        <ServiceDetailHero service={service} />
      </div>

      {/* Component (Web Development) */}
      <div className="m-5 md:m-16">
        {service?.components && (
          <div className="mt-20 mb-10">
            <ServiceComponent service={service} />
          </div>
        )}
      </div>

      {/* Key Aspect (WordPress Development,Web Development,) */}
      <div className="m-5 md:m-16">
        {service?.keyAspect && (
          <div className="mt-20 mb-10">
            <KeyAspect service={service} />
          </div>
        )}
      </div>

      {/* Sudhu Web Development er janno Skill Logo er upore Skill */}
      {/* Web Development e KeyASpect nai */}
      <div className="m-5 md:m-16">
        {serviceId === "688502c459d18f392f6af6ca" && (
          <div className="mt-20 mb-10">
            <EssentialSkill service={service} />
          </div>
        )}
      </div>

      {/* SEO Service */}
      <div className="m-5 md:m-16">
        {serviceId === "68896959b13ed74fdd7fe83c" && <SeoComponent />}
      </div>

      {/* Skill Logo (Wordpress, Web Design, Web Development, SEO) */}
      <div className="m-5 md:m-16 my-10">
        <SkillLogo service={service} />
      </div>

      {/* skills_ (Wordpress, Web design, not Web Development, UI UX Design) */}
      <div className="m-5 md:m-16 my-10">
        {serviceId !== "688502c459d18f392f6af6ca" && (
          <div className=" mb-10">
            <EssentialSkill service={service} />
          </div>
        )}
      </div>

      {/* Testimonial Certificate Contact*/}

      <div className=" p-5 md:p-16 py-10 bg-[#141414] overflow-hidden">
        <TestimonialMx />
      </div>
      <div className="p-5 md:p-16 py-10 ">
        <Certificate />
      </div>
      <div className=" p-5 md:p-16 py-10 bg-[#141414]">
        <HomeContact />
      </div>
    </div>
  );
};

export default ServiceDetailPage;

/**
 * Key of Aspect e just ekta title
 * Aspect e Tile + 1 ta ba 2 ta paragraph
 */
