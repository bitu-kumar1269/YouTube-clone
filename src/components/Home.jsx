import React, { useEffect, useState } from "react";
import Shimmer from "./components/Shimmer";
import VideoCard from "./components/VideoCard";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=12&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
        );

        const data = await response.json();

        const formattedVideos =
          data.items?.map((video) => ({
            id: video.id,
            title: video.snippet.title,
            channel: video.snippet.channelTitle,
            thumbnail: video.snippet.thumbnails.high.url,
          })) || [];

        setVideos(formattedVideos);
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      
      <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-red-600">
            🎮 Trending Gaming Videos
          </h1>
        </div>
      </header>
    
      <main className="container mx-auto px-4 py-8">
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading
            ? Array(8)
                .fill(0)
                .map((_, i) => <Shimmer key={i} />)
            : videos.map((v) => (
                <VideoCard key={v.id} video={v} />
              ))}
        </div>
      </main>
    </div>
  );
}
