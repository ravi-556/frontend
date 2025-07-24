import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://api.mytesting.co.in/posts/${id}`).then((res) => setPost(res.data));
  }, [id]);

  if (!post) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{post.post_title}</h2>
      <p className="italic">By {post.author_name}</p>
      <p className="mt-4">{post.post_content}</p>
    </div>
  );
}