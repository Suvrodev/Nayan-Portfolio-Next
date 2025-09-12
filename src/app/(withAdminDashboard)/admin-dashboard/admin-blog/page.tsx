import Blog from "@/components/modules/(Public-Dashboard))/Blog/Blog";

const AdminBlog = () => {
  return (
    <div>
      <Blog isAdmin={true} />
    </div>
  );
};

export default AdminBlog;
