"use client";

import { useEffect, useState } from "react";
import HomeServiceDesign from "./HomeServiceDesign/HomeServiceDesign";
import { TService } from "@/types/globalTypes";

const HomeService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/homeService.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  //   console.log("Services: ", services);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-10">Service</h1>
      <div className="flex flex-col  justify-center gap-y-4 md:gap-y-0 ">
        {services?.map((service: TService, idx: number) => (
          <HomeServiceDesign key={idx} idx={idx} service={service} />
        ))}
      </div>
    </div>
  );
};

export default HomeService;
