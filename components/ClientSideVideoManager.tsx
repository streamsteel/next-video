"use client";
// components/ClientSideVideoManager.tsx
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const DanamicVideoPlayer = dynamic(() => import('./VideoPlayer'), { ssr: false });
const DanamicVideoSelector = dynamic(() => import('./VideoSelector'), { ssr: false });

const ClientSideVideoManager: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>('');

  useEffect(() => {
    const cachedVideo = localStorage.getItem('cachedVideo');
    if (cachedVideo) {
      setVideoUrl(cachedVideo);
    }
  }, []);

  return (
    <div className='w-full max-w-4xl'>
      <DanamicVideoPlayer url={videoUrl} />
      <DanamicVideoSelector onVideoSelect={setVideoUrl} />
    </div>
  );
};

export default ClientSideVideoManager;
