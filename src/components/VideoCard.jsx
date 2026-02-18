import React from "react";
import { Link } from "react-router-dom";

export default function VideoCard({ video }) {
  return (
    <Link to={`/watch/${video.id}`}>
      <div className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition">

        <div className="w-full aspect-video overflow-hidden">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-3">
          <h2 className="text-base font-semibold line-clamp-2 min-h-[48px]">
            {video.title}
          </h2>

          <p className="text-gray-400 text-xs">
            <h3>🙎🏻‍♂️<strong>{video.channel}</strong></h3>
          </p>
        </div>

      </div>
    </Link>
  );
}
