/* eslint-disable @typescript-eslint/no-explicit-any */
import { Clock3 } from "lucide-react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
const PackageCard = ({ data }: { data: any }) => {
  return (
    <div>
      {/* Concepts with Price Start */}
      <h3 className="font-bold text-lg flex items-center justify-between">
        <span className="text-sm mt-1">{data.concept}</span>
        <span> ${data.price}</span>
      </h3>
      {/* Concepts with Price End */}

      {/*1 line Feature Start */}
      <div className="text-sm text-gray-400 mt-2">
        {data.revisions} Revisions +{data.formate}
        {data.features
          ?.filter((f: any) => typeof f !== "string" && f.isEnable)
          .map((f: any) => `+ ${f.feature}`)
          .join(" ")}
      </div>
      {/*1 line Feature Start */}

      <div className="flex  items-center gap-x-4">
        <p className="text-sm mt-3 text-white/70 flex items-center gap-x-2">
          <Clock3 className="size-4" />
          <strong>{data.delivery}-day delivery</strong>
        </p>
        <p className="text-sm mt-3 text-white/70 flex items-center gap-x-2">
          <AutorenewIcon className="size-4" />
          <strong>{data.revisions} Revisions</strong>
        </p>
      </div>

      {/* Enabled Features */}
      <ul className="list-disc ml-6 mt-2 text-sm text-white/90">
        {data.features
          ?.filter((f: any) => f.isEnable)
          .map((f: any, i: number) => (
            <li key={i}>{f.feature}</li>
          ))}
      </ul>

      {/* CTA button */}
      <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
        Continue
      </button>
    </div>
  );
};

export default PackageCard;
