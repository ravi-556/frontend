import { useState } from "react";
import axios from "axios";

export default function CreateUser() {
  const [user, setUser] = useState({ user_name: "", email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4567/users", user);
    alert("User created");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-2">
      <input
        placeholder="User Name"
        value={user.user_name}
        onChange={(e) => setUser({ ...user, user_name: e.target.value })}
        className="border p-2"
      />
      <input
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="border p-2"
      />
      <button className="bg-blue-500 text-white px-4 py-2">Create User</button>
    </form>
  );
}