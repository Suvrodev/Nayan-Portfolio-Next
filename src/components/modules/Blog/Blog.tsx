import LinkBox from "@/components/LinkBox/LinkBox";
import { TBlog } from "@/types/globalTypes";
import BlogCard from "./BlogCard/BlogCard";
import { baseApiFromEnv } from "@/components/utils/functions/baseApiFromenv";

interface IProps {
  isAdmin: boolean;
}

const Blog = async ({ isAdmin }: IProps) => {
  const res = await fetch(`${baseApiFromEnv()}/blog`, {
    next: {
      revalidate: 30,
      tags: ["blog"],
    },
  });
  const blogsData = await res.json();
  const blogs = await blogsData?.data;

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

export default Blog;
