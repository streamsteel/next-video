// components/VideoSelector.tsx
import React, { useState, useEffect } from 'react';

const VideoSelector: React.FC<{ onVideoSelect: (url: string) => void }> = ({ onVideoSelect }) => {
  const [videoList, setVideoList] = useState<string[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string>('');

  useEffect(() => {
    const cachedVideos = localStorage.getItem('cachedVideos');
    if (cachedVideos) {
      setVideoList(JSON.parse(cachedVideos));
    } else {
      fetch('/api/videos')
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem('cachedVideos', JSON.stringify(data.m3u8Files));
          setVideoList(data.m3u8Files);
        });
    }
  }, []);

  const handlePlayClick = () => {
    if (selectedVideo) {
      onVideoSelect(selectedVideo);
    }
  };

  return (
    <div className="w-full flex items-center justify-center mt-4">
      <select
        className="block w-full px-4 py-2 text-base"
        value={selectedVideo}
        onChange={(e) => setSelectedVideo(e.target.value)}
      >
        {videoList.map((video, index) => (
          <option key={index} value={video}>
            {video}
          </option>
        ))}
      </select>
      <button
        className="ml-4 px-6 py-2 bg-blue-500 text-white rounded"
        onClick={handlePlayClick}
      >
        Play
      </button>
    </div>
  );
};

export default VideoSelector;
