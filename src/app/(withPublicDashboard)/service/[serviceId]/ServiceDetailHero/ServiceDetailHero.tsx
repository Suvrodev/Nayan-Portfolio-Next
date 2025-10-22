import Image from "next/image";
import sarkar from "@/app/assets/serviceDetail/serviceNayan.webp";
import { TUpdateService } from "@/types/serviceType";
import Link from "next/link";

interface IProps {
  service: TUpdateService;
}

const ServiceDetailHero = ({ service }: IProps) => {
  return (
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
        <h2 className="pTitle mb-4">{service?.title}</h2>

        <div className="flex flex-col gap-y-4">
          <p className="pDesc">{service?.hero?.text1}</p>
          <p className="pDesc">{service?.hero?.text2}</p>
        </div>

        <div className="flex gap-4 mt-6">
          <Link href={"/gigs"} target="_blank">
            <button className="primaryButton">Hire Me</button>
          </Link>
          <Link href={"/contact"} target="_blank">
            <button className="primaryButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailHero;
