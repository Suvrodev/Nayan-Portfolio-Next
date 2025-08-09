import { TService } from "@/types/globalTypes";
import "./HomeServiceDesign.css";

interface IProps {
  service: TService;
  idx: number;
}

const HomeServiceDesign = ({ service, idx }: IProps) => {
  const cId = idx + 1;
  const { title, shortDescription } = service;

  return (
    <div className="md:relative">
      <div className={`flex gap-10 ${cId % 2 == 0 ? "" : "flex-row-reverse"} `}>
        {/* <div className="grid grid-cols-[48%_auto_48%] gap-10 items-center "> */}
        <div className={`perSide   relative  p-4 rounded-[10px]  `}>
          <h2 className="pTitle text-left ">{title}</h2>
          <p className="text-left pDesc mt-[16px] mb-[32px]">
            {shortDescription}
          </p>{" "}
          <span className="primaryButton">Read More..</span>
          <div className="z-10">
            <p
              className={`absolute  ${
                cId % 2 == 0
                  ? "-right-[30px] top-[50%] transform -translate-y-[50%]"
                  : "-left-[30px] top-[50%] transform -translate-y-[50%]"
              } w-[20px] h-[20px] rounded-full bg-white border-4 hidden lg:block`}
            ></p>
          </div>
        </div>
        <div className={`w-[50%] hidden md:block  `}></div>
      </div>
      <div className="hidden md:block w-[2px]  bg-white absolute top-0 h-full  left-1/2  transform -translate-x-1/2"></div>
    </div>
  );
};

export default HomeServiceDesign;
