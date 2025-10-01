import { TSkillItem, TUpdateService } from "@/types/serviceType";

interface IProps {
  service: TUpdateService;
}
const EssentialSkill = ({ service }: IProps) => {
  return (
    <div>
      <h2 className="pTitle text-center">{service?.skils?.title}</h2>
      <div className="mt-4 mb-10">
        <p className="text-center pDesc "> {service?.skils?.pg}</p>
        <p className="text-center pDesc mt-4"> {service?.skils?.pg2}</p>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:justify-items-center">
        {service?.skils?.skills_.map((data: TSkillItem, idx: number) => (
          <div key={idx} className="primaryBox p-4 rounded-md w-full">
            <h2 className="text-center text-2xl text-white font-bold mb-4">
              <span>{idx + 1}.</span> {data.title}
            </h2>
            <p className="pDesc text-center ">{data.desc}</p>
          </div>
        ))}
      </div> */}

      <div
        className=" grid grid-cols-1 md:grid-cols-3 gap-4
    md:[&>*:nth-last-child(1):nth-child(3n+1)]:col-span-3
    md:[&>*:nth-last-child(2):nth-child(3n+1)]:col-span-3
    md:[&>*:nth-last-child(1):nth-child(3n+2)]:col-span-3"
      >
        {service?.skils?.skills_.map((data: TSkillItem, idx: number) => (
          <div key={idx} className="primaryBox p-4 rounded-md w-full">
            <h2 className="text-center text-2xl text-white font-bold mb-4">
              <span>{idx + 1}.</span> {data.title}
            </h2>
            <p className="pDesc text-center">{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EssentialSkill;
