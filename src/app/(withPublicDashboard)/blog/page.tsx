import Blog from "@/components/modules/Blog/Blog";
import { createTitle } from "@/components/utils/functions/metadata";
import React from "react";

export const metadata = createTitle("Blog");

const BlogPage = async () => {
  return (
    <div>
      <Blog isAdmin={false} />
    </div>
  );
};

export default BlogPage;
