import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PostIndex() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://api.mytesting.co.in/posts").then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="p-4 space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="border p-2">
          <h2 className="font-bold">{post.post_title}</h2>
          <p>{post.post_content.slice(0, 100)}...</p>
          <Link to={`/posts/${post.id}`} className="text-blue-600 underline">Read More</Link>
        </div>
      ))}
    </div>
  );
}