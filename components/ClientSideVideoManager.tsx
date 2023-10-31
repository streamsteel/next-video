"use client";
// components/ClientSideVideoManager.tsx
import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import VideoSelector from './VideoSelector';

const ClientSideVideoManager: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>('');

  return (
    <div className='w-full max-w-4xl'>
      <VideoPlayer url={videoUrl} />
      <VideoSelector onVideoSelect={setVideoUrl} />
    </div>
  );
};

export default ClientSideVideoManager;
