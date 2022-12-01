import React from "react";
import { Link } from "react-router-dom";
import { blogData } from "../../Data/data";
export const BlogPage = () => {
  return (
    <>
      <h1>BlogPage</h1>
      <ul>
        {blogData.map((post) => (
          <BlogLink  key={post.title} post={post} />
        ))}
      </ul>
    </>
  );
};

function BlogLink({ post }) {
  return (
    <li>
      <Link to={post.url}>{post.title}</Link>
    </li>
  );
}

