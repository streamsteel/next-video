// components/VideoPlayer.tsx

import React from "react";

const VideoPlayer = ({ url }: { url: string }) => {
  return (
    <div className="w-full max-w-4xl">
      <video controls className="w-full shadow-lg">
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
