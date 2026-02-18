import React, { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Login Successful");
  }

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">

      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-md bg-white/10 p-10 rounded-2xl 
        shadow-2xl w-[460px] border border-white/20"
        >

        <h2 className="text-3xl font-semibold text-center mb-6">
          Login to Youtube
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={user.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-lg 
          bg-white/10 border border-white/20 
          focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={user.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-lg 
          bg-white/10 border border-white/20 
          focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          className="w-full p-3 mb-6 rounded-lg 
          bg-white/10 border border-white/20 
          focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button
          className="w-full py-3 rounded-lg 
          bg-indigo-500 hover:bg-indigo-600 
          transition duration-300 font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}
