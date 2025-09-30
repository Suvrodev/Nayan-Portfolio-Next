import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import { IGig } from "@/types/gigType";
interface IProps {
  gig: IGig;
}

const GigCard = ({ gig }: IProps) => {
  return (
    <Link href={`gigs/${gig._id}`}>
      <div className="primaryBox rounded-[12px] overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        {/* <Image src={gig.images[0]} alt={gig.title} width={450} height={350} /> */}
        <div className="relative w-full  aspect-[3/2] mb-4">
          <Image
            src={gig.images[0]}
            alt={gig.title}
            fill
            className=" object-cover "
          />
        </div>
        <div className="px-4 pb-4">
          <h2 className="hover:underline line-clamp-2 min-h-[48px]">
            {gig.title}
          </h2>
          <div className="flex items-center gap-x-2">
            <div className="flex items-center gap-x-2 my-2">
              <StarIcon />
              <span>{gig.seller.rating}</span>
            </div>
            <p className="text-gray-500">({gig.seller.reviews})</p>
          </div>
          <div className="flex items-center gap-x-2 font-bold">
            <span>From</span>
            <span> ${gig.packages[0]?.price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
