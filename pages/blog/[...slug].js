import React from "react";
import { useRouter } from "next/router";


function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query); // { slug: [ 'blog', 'post1' ] }
  return <h1>The Blog Posts</h1>;
}

export default BlogPostsPage;
