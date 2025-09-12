"use client";

import { formatDate } from "@/components/utils/functions/convertDate";
import { useDeleteBlogMutation } from "@/redux/features/BlogApi/blogApi";
import { TBlog } from "@/types/globalTypes";
import Image from "next/image";
import Link from "next/link";

import { toast } from "sonner";
import { sonarId } from "@/components/utils/functions/sonarId";
import { handleLoad } from "@/app/actions/handleLoad";
import UpdateButton from "@/components/modules/shared/PublicDashboard/Buttons/UpdateButton/UpdateButton";
import DeleteButton from "@/components/modules/shared/PublicDashboard/Buttons/DeleteButton/DeleteButton";

interface IBlogCardProps {
  blog: TBlog;
  isAdmin?: boolean;
}

// const description =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat, orci ut porta posuere, justo lacus dignissim sapien, ac lacinia metus nulla vitae lacus. Proin sed tincidunt libero, sed scelerisque justo. Nulla vel elit at quam blandit volutpat eget sed urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam posuere, sapien non interdum egestas, eros eros feugiat nunc, at suscipit augue nulla sed magna. Donec luctus, purus nec malesuada tempor, ligula arcu tincidunt mi, nec gravida felis urna vel quam.";

const BlogCard = ({ blog, isAdmin }: IBlogCardProps) => {
  // console.log("Blog: ", blog);
  const [deleteBlog] = useDeleteBlogMutation();
  const { _id, image, title, date, category } = blog;

  const handleDelete = async (id: string) => {
    console.log("Delete Clicked ID:", id);
    toast.loading("Deleting", { id: sonarId });
    const res = await deleteBlog(id).unwrap();
    console.log("Res: ", res);
    if (res?.success) {
      toast.success(res?.message, { id: sonarId });
      await handleLoad();
    }
  };

  const stripHtml = (html: string) => {
    if (!html) return "";
    return html.replace(/<[^>]*>?/gm, ""); // sob HTML tag remove kore text return
  };

  const cleanDescription = blog?.description
    ? stripHtml(blog.description)
    : "No description available";

  console.log("Clean Description: ", cleanDescription);
  return (
    <div className="relative primaryBox rounded-[12px] overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-[410px] md:h-[410px] lg:h-[420px]">
      {/* Admin Buttons */}
      {isAdmin && (
        <div className="absolute top-2 right-2 z-10 flex gap-2">
          <Link href={`update-blog/${_id}`}>
            {" "}
            <UpdateButton />
          </Link>
          <DeleteButton
            onClick={() => {
              handleDelete(_id);
            }}
          />
        </div>
      )}

      {/* Clickable Image */}
      <Link
        href={`/blog/${_id}`}
        className="relative h-60 overflow-hidden block"
      >
        <Image
          src={image}
          alt={title}
          //   width={640}
          //   height={640}
          fill
          className="object-cover transform hover:scale-105 transition-transform duration-500 grayScale"
        />
      </Link>

      {/* Content */}
      <div className="px-4 pb-2 flex flex-col justify-between space-y-2 ">
        <h3 className="text-xl font-semibold line-clamp-2 mt-6 ">{title}</h3>
        <p className="text-sm">
          {formatDate(date)} / <span className="text-teal-400">{category}</span>
        </p>
        {/* <p className="line-clamp-2 pDesc">{description}</p> */}
        <p className="line-clamp-2 pDesc absolute bottom-2 left-0 px-4">
          {cleanDescription}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
