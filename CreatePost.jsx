import { useState } from "react";
import axios from "axios";

export default function CreatePost() {
  const [post, setPost] = useState({
    post_title: "",
    post_content: "",
    author_name: "",
    published_id: "",
    user_id: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://api.mytesting.co.in/posts", post);
    alert("Post created");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-2">
      <input
        placeholder="Post Title"
        value={post.post_title}
        onChange={(e) => setPost({ ...post, post_title: e.target.value })}
        className="border p-2"
      />
      <textarea
        placeholder="Post Content"
        value={post.post_content}
        onChange={(e) => setPost({ ...post, post_content: e.target.value })}
        className="border p-2"
      />
      <input
        placeholder="Author Name"
        value={post.author_name}
        onChange={(e) => setPost({ ...post, author_name: e.target.value })}
        className="border p-2"
      />
      <input
        placeholder="Published ID"
        value={post.published_id}
        onChange={(e) => setPost({ ...post, published_id: e.target.value })}
        className="border p-2"
      />
      <input
        placeholder="User ID"
        value={post.user_id}
        onChange={(e) => setPost({ ...post, user_id: e.target.value })}
        className="border p-2"
      />
      <button className="bg-green-600 text-white px-4 py-2">Create Post</button>
    </form>
  );
}