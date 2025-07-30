import BlogPage from "@/app/(withPublicDashboard)/blog/page";

const AdminBlog = () => {
  return (
    <div>
      <BlogPage isAdmin={true} />
    </div>
  );
};

export default AdminBlog;
