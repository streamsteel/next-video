"use client";
// components/ClientSideVideoManager.tsx
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const DynamicVideoPlayer = dynamic(() => import('./VideoPlayer'), { ssr: false });
const DynamicVideoSelector = dynamic(() => import('./VideoSelector'), { ssr: false });

const ClientSideVideoManager: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>('');

  const handleVideoSelect = (url: string) => {
    setVideoUrl(url);
    console.log('video selected', url);
  }

  return (
    <div className='w-full max-w-4xl'>
      <DynamicVideoPlayer url={videoUrl} />
      <DynamicVideoSelector onVideoSelect={handleVideoSelect} />
    </div>
  );
};

export default ClientSideVideoManager;
