import React, { useEffect, useState } from "react";
import Post from "./Post";
import { getAllPosts } from "../modules/postManager";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  return (
    <section>
      {posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </section>
  );
}
