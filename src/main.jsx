import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import WatchPage from "./components/Watchpage.jsx";

import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";




import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/watch/:id" element={<WatchPage />} />
      <Route path="/about" element={<h1>About Page</h1>} />
      <Route path="/history" element={<h1>History Page</h1>} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
  </BrowserRouter>
);
