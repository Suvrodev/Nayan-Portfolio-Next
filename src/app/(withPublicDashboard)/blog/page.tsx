import LinkBox from "@/components/LinkBox/LinkBox";
import BlogCard from "@/components/modules/Blog/BlogCard/BlogCard";
import { baseApiFromEnv } from "@/components/utils/functions/baseApiFromenv";
import { createTitle } from "@/components/utils/functions/metadata";
import { TBlog } from "@/types/globalTypes";
import React from "react";

export const metadata = createTitle("Blog");
interface IProps {
  isAdmin: boolean;
}
const BlogPage = async ({ isAdmin }: IProps) => {
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {

  const res = await fetch(`${baseApiFromEnv()}/blog`, {
    next: {
      revalidate: 5,
      tags: ["blog"],
    },
  });
  const blogsData = await res.json();
  const blogs = await blogsData?.data;
  //   console.log("object", blogs);
  return (
    <div>
      <div className="m-5 md:m-16">
        <LinkBox text1={"Home"} text2={"Blog"} />
      </div>

      <div className="m-5 md:m-16">
        <h1 className="text-4xl font-bold text-white">Blog</h1>

        <div className="my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs?.map((blog: TBlog, idx: number) => (
            <BlogCard key={idx} blog={blog} isAdmin={isAdmin} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
