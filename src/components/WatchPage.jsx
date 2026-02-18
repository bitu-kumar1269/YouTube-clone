import React from "react";
import { useParams } from "react-router-dom";

export default function Watchpage() {
  const { id } = useParams();

  if (!id) return <p className="text-white">Video not found</p>;

  return (
    <div className="min-h-screen bg-gray-950 text-white flex justify-center items-center p-4">
      <div className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
