import React from "react";

import { Link } from "react-router-dom";

export default function Navbar({ search, setSearch, searchVideos }) {
  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-8 py-6">

        {/* LEFT - Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="w-10 h-10 fill-red-600"
          >
            <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.5-48.6C456.1 64 288 64 288 64S119.9 64 74.8 75.5c-23.7 6.3-42.2 24.9-48.5 48.6C16 169.2 16 256 16 256s0 86.8 10.3 131.9c6.3 23.7 24.8 42.3 48.5 48.6C119.9 448 288 448 288 448s168.1 0 213.2-11.5c23.7-6.3 42.2-24.9 48.5-48.6C560 342.8 560 256 560 256s0-86.8-10.3-131.9zM232 336V176l142 80-142 80z"/>
          </svg>
          <h1 className="text-2xl font-bold">YouTube</h1>
        </div>

        {/* CENTER - Search */}
        <div className="flex w-1/2 overflow-hidden rounded-full border border-gray-700">

          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") searchVideos();
            }}
            className="w-full px-4 py-2 text-base bg-gray-800 focus:outline-none"
          />

          <button
            onClick={searchVideos}
            className="bg-red-600 px-5 py-2 hover:bg-red-700"
          >
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M15.5 14h-.8l-.3-.3A6.5 6.5 0 1 0 14 15.5l.3.3v.8L20 21l1-1-5.5-6zM10 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
            </svg>
          </button>

        </div>




        {/* RIGHT - Menu */}
        <div className="flex items-center gap-8 text-lg">

          {/* Home */}
          <Link to="/" className="flex items-center gap-2 hover:text-red-500">
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            Home
          </Link>

          {/* Shorts */}
          <Link to="/shorts" className="flex items-center gap-2 hover:text-red-500">
            <svg viewBox="0 0 90 90"
              className="w-6 h-6 fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M69.186 38.498c-1.406-.795-2.751-1.651-4.34-2.568
                1.589-.978 3.057-1.834 4.463-2.629
                6.541-3.546 10.148-10.759 9.047-18.095
                C76.766 3.164 62.889-3.804 52.375 2.186
                41.616 8.361 30.857 14.413 20.22 20.77
                c-8.436 5.074-9.659 11.798-8.314 19.745
                .856 4.952 4.157 8.619 8.497 11.126
                1.528.856 2.995 1.712 4.646 2.69
                -1.834 1.1-3.484 2.078-5.257 2.995
                -7.825 4.952-10.515 15.099-6.113 23.291
                4.646 8.62 15.405 11.921 24.024 7.275
                9.292-5.257 18.584-10.637 27.815-16.016
                2.201-1.284 4.524-2.445 6.48-4.035
                C81.84 59.649 80.373 44.795 69.186 38.498z
                M36.359 58.549V31.835l23.108 13.327-23.108 13.387z"
              />
            </svg>

            Shorts
          </Link>

          {/* Subscription */}
          <Link to="/subscriptions" className="flex items-center gap-2 hover:text-red-500">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 6H3v12h18V6zM10 9l5 3-5 3V9z"/>
            </svg>
            Subscription
          </Link>

          {/* Profile */}
          <Link to="/login" className="flex items-center gap-2 hover:text-red-500">
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
            </svg>
            Login
          </Link>

        </div>

      </div>
    </nav>
  );
}
