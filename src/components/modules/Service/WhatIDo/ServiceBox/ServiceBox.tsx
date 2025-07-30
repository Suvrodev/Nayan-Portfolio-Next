"use client";
import "./ServiceBox.css";
import { toast } from "sonner";
import { TService } from "@/types/globalTypes";
import { useDeleteServiceMutation } from "@/redux/features/ServiceApi/serviceApi";
import { sonarId } from "@/components/utils/functions/sonarId";
import Link from "next/link";
import UpdateButton from "@/components/modules/shared/Buttons/UpdateButton/UpdateButton";
import DeleteButton from "@/components/modules/shared/Buttons/DeleteButton/DeleteButton";
import { handleLoad } from "@/app/actions/handleLoad";

interface IProps {
  service: TService;
  isAdmin: boolean;
  idx: number;
}

const ServiceBox = ({ service, isAdmin, idx }: IProps) => {
  const number = idx + 1;
  const { _id, title, shortDescription } = service;

  const [deleteService] = useDeleteServiceMutation();

  const handleDelete = async (id: string) => {
    console.log("Delete Clicked ID:", id);
    toast.loading("Deleting", { id: sonarId });
    const res = await deleteService(id).unwrap();
    console.log("Res: ", res);
    if (res?.success) {
      toast.success(res?.message, { id: sonarId });
      await handleLoad();
    }
  };

  return (
    <div>
      <div className="primaryBox rounded-[4px] py-10 px-10 text-white h-[450px] relative ">
        <div className="flex flex-col gap-4 justify-center ">
          <div className="flex justify-between">
            <span className="bg-[#333333] w-[70px] h-[70px] rounded-full flex items-center justify-center font-bold text-xl ">
              {number}
            </span>
            <span></span>
          </div>
          <h1 className="text-2xl font-bold mt-4">{title}</h1>
          <p className="c">{shortDescription}</p>
        </div>
        <div className="py-4 absolute bottom-[20px]">
          {/* <ServiceModal image={image} popupDesc={popupDesc} /> */}
          <Link href={`/service/${_id}`}>
            <div className="group font-bold flex items-center gap-2 cursor-pointer w-fit overflow-hidden">
              {/* Read More text - animate in */}
              <p className="transform -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700">
                Read More
              </p>

              {/* HR line - animate out */}
              <hr className="w-[40px] bg-white h-[2px] transform group-hover:translate-x-6 transition-all duration-700" />
            </div>
          </Link>
        </div>

        {/* Update and Delete */}
        {isAdmin && (
          <div className="absolute top-2 right-2 z-10 flex items-center gap-x-2">
            <Link href={`update-service/${_id}`}>
              <UpdateButton />
            </Link>
            <DeleteButton onClick={() => handleDelete(_id)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceBox;
