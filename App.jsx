import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateUser from "./CreateUser";
import CreatePost from "./CreatePost";
import PostIndex from "./PostIndex";
import PostDetail from "./PostDetail";

export default function App() {
  return (
    <Router>
      <div className="p-4 space-x-4">
        <Link to="/">Home</Link>
        <Link to="/create-user">Add User</Link>
        <Link to="/create-post">Add Post</Link>
        <Link to="/posts">All Posts</Link>
      </div>
      <Routes>
        <Route path="/" element={<h1 className="text-xl p-4">Welcome to the Blog</h1>} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/posts" element={<PostIndex />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}