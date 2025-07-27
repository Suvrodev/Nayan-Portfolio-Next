"use client";

import { formatDate } from "@/components/utils/functions/convertDate";
import { TBlog } from "@/types/globalTypes";
import Image from "next/image";
import Link from "next/link";

interface IBlogCardProps {
  blog: TBlog;
  isAdmin?: boolean;
}
const BlogCard = ({ blog }: IBlogCardProps) => {
  //   console.log("Blog: ", blog);
  const { _id, image, title, date, category } = blog;

  return (
    <div className="relative primaryBox rounded-[12px] overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-[370px] md:h-[370px] lg:h-[380px]">
      {/* Admin Buttons */}
      {/* {isAdmin && (
        <div className="absolute top-2 right-2 z-10 flex gap-2">
          <Link to={`update-blog/${_id}`}>
            {" "}
            <UpdateButton />
          </Link>
          <DeleteButton
            onClick={() => {
              handleDelete(_id);
            }}
          />
        </div>
      )} */}

      {/* Clickable Image */}
      <Link
        href={`/blog-detail/${_id}`}
        className="relative h-60 overflow-hidden block"
      >
        {/* <SmartImage
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        /> */}
        <Image
          src={image}
          alt={title}
          //   width={640}
          //   height={640}
          fill
          className="object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between space-y-2">
        <p className="text-sm">
          {formatDate(date)} / <span className="text-teal-400">{category}</span>
        </p>

        <h3 className="text-xl font-bold line-clamp-2 mt-6 ">{title}</h3>
      </div>
    </div>
  );
};

export default BlogCard;
