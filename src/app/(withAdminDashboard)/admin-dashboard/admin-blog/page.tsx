import Blog from "@/components/modules/Blog/Blog";

const AdminBlog = () => {
  return (
    <div>
      <Blog isAdmin={true} />
    </div>
  );
};

export default AdminBlog;
