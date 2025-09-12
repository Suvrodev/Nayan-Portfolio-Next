import UpdateBlog from "@/components/modules/(Public-Dashboard))/Blog/UpdateBlog/UpdateBlog";
import NotFoundData from "@/components/NotFoundData/NotFoundData";
import { baseApiFromEnv } from "@/components/utils/functions/baseApiFromenv";
import { TBlog } from "@/types/globalTypes";

interface IProps {
  params: Promise<{
    blogid: string;
  }>;
}
const UpdateServicePage = async ({ params }: IProps) => {
  const { blogid } = await params;
  const res = await fetch(`${baseApiFromEnv()}/blog/${blogid}`);
  const data = await res.json();
  const blog: TBlog = data?.data;

  if (!blog) {
    return <NotFoundData speed={1}>Blog Not Found</NotFoundData>;
  }
  return (
    <div>
      <UpdateBlog blog={blog} />
    </div>
  );
};

export default UpdateServicePage;
