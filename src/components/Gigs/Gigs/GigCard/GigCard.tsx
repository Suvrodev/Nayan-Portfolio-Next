import { TGig } from "@/types/globalTypes";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
interface IProps {
  gig: TGig;
}

const GigCard = ({ gig }: IProps) => {
  return (
    <Link href={`gigs/${gig._id}`}>
      <div>
        <Image src={gig.images[0]} alt={gig.title} width={450} height={350} />
        <h2 className="hover:underline">{gig.title}</h2>
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
    </Link>
  );
};

export default GigCard;
