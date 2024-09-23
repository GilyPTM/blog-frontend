import React from "react";
import CommentSection from "./CommentSection";

const BlogPost = ({ post }) => {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <CommentSection postId={post.id} />
    </div>
  );
};

export default BlogPost;
