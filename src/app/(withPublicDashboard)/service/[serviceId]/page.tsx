import NotFoundData from "@/components/NotFoundData/NotFoundData";
import "./serviceDetail.css";
import TechIcon from "@/components/TechIcon/TechIcon";
import { baseApiFromEnv } from "@/components/utils/functions/baseApiFromenv";
import { TService, TSkillAndTool } from "@/types/globalTypes";
import Image from "next/image";
import React from "react";

interface IProps {
  params: Promise<{
    serviceId: string;
  }>;
}
const ServiceDetailPage = async ({ params }: IProps) => {
  const { serviceId } = await params;
  const res = await fetch(`${baseApiFromEnv()}/service/${serviceId}`);
  const data = await res.json();
  const service: TService = data?.data;
  //   console.log("Service:  ", service);

  if (!service) {
    return <NotFoundData speed={1}>Service Not Found</NotFoundData>;
  }
  return (
    <div className="min-h-screen flex justify-center items-center my-4">
      <div className="max-w-4xl mx-auto primaryBox p-6 rounded-2xl shadow-xl">
        {/* <SmartImage
          src={service?.image}
          alt={service?.title}
          className="w-full  object-cover rounded-lg mb-6 border border-gray-700"
        /> */}
        <Image
          src={service?.image}
          alt={service.title}
          width={650}
          height={450}
          className="max-w-full mx-auto"
        />
        <h1 className="text-3xl font-bold text-white mb-4">{service?.title}</h1>
        {/* <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
          {service?.description}
        </p> */}
        {/* <div
          className="prose prose-invert max-w-none  py-2 rounded-md"
          dangerouslySetInnerHTML={{ __html: service?.description }}
        ></div> */}

        <div
          className="prose max-w-none py-2 rounded-md text-black dark:prose-invert dark:text-white"
          dangerouslySetInnerHTML={{ __html: service?.description }}
        ></div>

        {/* Skills Section */}
        {service?.skillAndTools?.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-6">My Skills & Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
              {service.skillAndTools.map((tool: TSkillAndTool, idx: number) => (
                <div
                  key={idx}
                  className="primaryBox rounded-[10px] p-6 text-center shadow-md border border-gray-700"
                >
                  <div className="flex justify-center mb-3">
                    <TechIcon
                      name={tool.title}
                      size={32}
                      className="text-purple-400"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">
                    {tool.title}
                  </h3>

                  <div className="w-full bg-gray-700 rounded-full h-2.5 mb-3">
                    <div
                      className="bg-purple-500 h-2.5 rounded-full transition-all duration-700 ease-in-out"
                      style={{ width: `${tool.percent}%` }}
                    ></div>
                  </div>

                  <p className="text-sm text-gray-400">{tool.percent}%</p>
                  <p className="text-sm font-semibold mt-1 text-gray-300">
                    Skill Level
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetailPage;
