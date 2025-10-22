/* eslint-disable @typescript-eslint/no-explicit-any */
import { Clock3, Check, X } from "lucide-react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Link from "next/link";
import { payMentLink } from "@/components/utils/variable/paymentLink";
const PackageCard = ({ data }: { data: any }) => {
  // console.log("Data: ", data);
  return (
    <div>
      {/* Concepts with Price Start */}
      <h3 className="font-bold text-lg flex items-center justify-between">
        <span className="text-sm mt-1">{data.tableConcept}</span>
        <span> ${data.price}</span>
      </h3>
      {/* Concepts with Price End */}

      {/*1 line Feature Start */}
      <div className="text-sm text-gray-400 mt-2">{data.tabBody}</div>
      {/*1 line Feature Start */}

      {/* Review And Delivery start */}
      <div className="flex  items-center gap-x-4">
        <p className="text-sm mt-3 text-white/70 flex items-center gap-x-2">
          <Clock3 className="size-4" />
          <strong>{data.delivery}-day delivery</strong>
        </p>
        <p className="text-sm mt-3 text-white/70 flex items-center gap-x-2">
          <AutorenewIcon className="size-4" />
          {typeof data.revisions === "string" ? (
            <strong>{data.revisions}</strong>
          ) : (
            <strong>{data.revisions} Revisions</strong>
          )}
        </p>
      </div>
      {/* Review And Delivery End */}

      <ul className="mt-3 space-y-2 text-sm">
        {data.tabFeatures?.map((f: any, i: number) => (
          <li
            key={i}
            className={`flex items-center gap-2 ${
              f.isEnable ? "text-white" : "text-white opacity-50"
            }`}
          >
            {f.isEnable ? (
              <p className="flex items-center gap-2 ">
                <Check size={18} />
                {f.feature}
              </p>
            ) : (
              <p className="flex items-center gap-2 ">
                <X size={18} />
                {f.feature}
              </p>
            )}
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <Link href={payMentLink} target="_blank">
        <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
          Continue
        </button>
      </Link>
    </div>
  );
};

export default PackageCard;
