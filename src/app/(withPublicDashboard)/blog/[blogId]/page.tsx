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
    <div className="max-w-4xl mx-auto px-4 py-10 text-white">
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
        {/* <SmartImage
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover rounded"
        /> */}
        <Image
          src={blog.image}
          alt={blog.title}
          height={450}
          width={750}
          className="object-cover"
          //   fill
          //   className="object-cover transform hover:scale-105 transition-transform duration-500"
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
  );
};

export default BlogDetailPage;
