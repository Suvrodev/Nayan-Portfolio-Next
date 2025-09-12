import NotFoundData from "@/components/NotFoundData/NotFoundData";
import { baseApiFromEnv } from "@/components/utils/functions/baseApiFromenv";
import { formatDate } from "@/components/utils/functions/convertDate";
import { TBlog } from "@/types/globalTypes";
import Image from "next/image";

interface IProps {
  params: Promise<{
    blogId: string;
  }>;
}

// const description =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat, orci ut porta posuere, justo lacus dignissim sapien, ac lacinia metus nulla vitae lacus. Proin sed tincidunt libero, sed scelerisque justo. Nulla vel elit at quam blandit volutpat eget sed urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam posuere, sapien non interdum egestas, eros eros feugiat nunc, at suscipit augue nulla sed magna. Donec luctus, purus nec malesuada tempor, ligula arcu tincidunt mi, nec gravida felis urna vel quam.";

const BlogDetailPage = async ({ params }: IProps) => {
  const { blogId } = await params;
  const res = await fetch(`${baseApiFromEnv()}/blog/${blogId}`, {
    cache: "no-store",
  });
  const blogData = await res.json();
  const blog: TBlog = blogData.data;
  //   console.log("Blog: ", blog);
  if (!blog) {
    return <NotFoundData speed={1}>Blog Not Found</NotFoundData>;
  }
  return (
    <div className="min-h-screen flex justify-center items-center my-6 px-4">
      <div className="detailPageWidth  mx-auto secondaryBox p-6 rounded-2xl shadow-xl">
        {/* Blog Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>

        {/* Meta Info */}
        <div className="text-sm text-gray-400 mb-6 flex flex-col md:flex-row gap-2 md:gap-6">
          <p>✍️ Author: {blog.author}</p>
          <p>📅 Date: {formatDate(blog.date)}</p>
          <p>
            🏷️ Category: <span className="text-teal-400">{blog.category}</span>
          </p>
        </div>

        {/* Blog Image */}
        <div className="w-full h-64 md:h-96 overflow-hidden rounded-lg mb-8">
          <Image
            src={blog.image}
            alt={blog.title}
            height={900}
            width={750}
            // className="max-w-full mx-auto h-72  md:h-96 object-contain transform hover:scale-105 transition-transform duration-500 rounded-md"
            className="max-w-full mx-auto grayScale rounded-lg mb-6 border border-gray-700"
          />
        </div>

        {/* Description */}
        {/* <div className="prose prose-invert max-w-none text-lg leading-relaxed text-gray-300">
        {blog.description}
      </div> */}

        <div
          className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        ></div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
