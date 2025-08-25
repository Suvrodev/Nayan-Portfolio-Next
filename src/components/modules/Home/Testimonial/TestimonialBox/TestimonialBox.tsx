import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { TTestimonial } from "@/types/globalTypes";
import Image from "next/image";

interface IProps {
  testimonial: TTestimonial;
}

const TestimonialBox = ({ testimonial }: IProps) => {
  const { image, desc, rating, name, position } = testimonial;

  return (
    <div className="primaryBox rounded-[7px] relative h-auto ">
      <div className="text-center text-white h-[450px] w-full  flex flex-col items-center justify-center px-10 ">
        <h2 className="pDesc">{desc}</h2>
        <h2 className=" font-bold text-2xl text-white mt-10">{name}</h2>
        <h2 className="text-[#cccccc]">{position}</h2>
        <Rating
          style={{ maxWidth: 100 }}
          value={rating}
          className="mx-auto mt-5"
        />
      </div>

      <Image
        src={image}
        alt="Testimonial"
        width={110}
        height={110}
        className="rounded-full absolute -top-[50px]  left-1/2 transform -translate-x-1/2"
      />
    </div>
  );
};

export default TestimonialBox;
