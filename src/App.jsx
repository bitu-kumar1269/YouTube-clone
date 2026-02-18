import React, { useEffect, useState } from "react";
import Shimmer from "./components/Shimmer";
import VideoCard from "./components/VideoCard";
import Navbar from "./components/Navbar";


export default function App() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Fetch Trending Videos initially
  useEffect(() => {
    fetchTrending();
  }, []);

  async function fetchTrending() {
    setLoading(true);
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
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  // SEARCH FUNCTION
  async function searchVideos() {
    if (!search.trim()) return;

    setLoading(true);

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=12&type=video&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
      );

      const data = await response.json();

      const formattedVideos =
        data.items?.map((video) => ({
          id: video.id.videoId,
          title: video.snippet.title,
          channel: video.snippet.channelTitle,
          thumbnail: video.snippet.thumbnails.high.url,
        })) || [];

      setVideos(formattedVideos);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar
        search={search}
        setSearch={setSearch}
        searchVideos={searchVideos}
      />

      
      {/* VIDEOS */}
      <main className="px-6 py-8">
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading
            ? Array(8).fill(0).map((_, i) => <Shimmer key={i} />)
            : videos.map((v) => (
                <VideoCard key={v.id} video={v} />
              ))}
        </div>
      </main>
    </div>
  );
}
