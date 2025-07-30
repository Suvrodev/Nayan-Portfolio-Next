"use client";
import { handleLoad } from "@/app/actions/handleLoad";
import DeleteButton from "@/components/modules/shared/Buttons/DeleteButton/DeleteButton";
import UpdateButton from "@/components/modules/shared/Buttons/UpdateButton/UpdateButton";
import { sonarId } from "@/components/utils/functions/sonarId";
import { useDeletePortfolioMutation } from "@/redux/features/PortfolioApi/portfolioApi";
import { TPortfolio } from "@/types/globalTypes";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
// import { toast } from "sonner";

interface IPortfolioBoxProps {
  portfolio: TPortfolio;
  isAdmin?: boolean;
}

const PortfolioBox = ({ portfolio, isAdmin }: IPortfolioBoxProps) => {
  const [deletePortfolio] = useDeletePortfolioMutation();

  const handleDelete = async (id: string) => {
    console.log("Delete Clicked ID:", id);
    toast.loading("Deleting", { id: sonarId });
    const res = await deletePortfolio(id).unwrap();
    console.log("Res: ", res);
    if (res?.success) {
      toast.success(res?.message, { id: sonarId });
      await handleLoad();
    }
  };

  return (
    <div className="relative group rounded-[12px] shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300 flex flex-col primaryBox">
      {/* Admin Buttons */}
      {isAdmin && (
        <div className="absolute top-2 right-2 z-10 flex items-center gap-x-2">
          <Link href={`update-portfolio/${portfolio?._id}`}>
            {" "}
            <UpdateButton />
          </Link>
          <DeleteButton onClick={() => handleDelete(portfolio?._id)} />
        </div>
      )}

      {/* Image Box */}
      <div className="relative overflow-hidden h-60">
        {/* <img
          src={portfolio?.image}
          alt={portfolio?.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        /> */}

        <Image
          src={portfolio.image}
          alt={portfolio.title}
          fill
          className="object-cover transform hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay with button */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <Link href={`portfolio/${portfolio?._id}`}>
            {/* <PrimaryButton text="Read More" /> */}
            <button className="primaryButton">Read More</button>
          </Link>
        </div>
      </div>

      {/* Title */}
      <div className="p-4 text-center ">
        <h3 className="text-lg font-semibold ">{portfolio?.title}</h3>
      </div>
    </div>
  );
};

export default PortfolioBox;
