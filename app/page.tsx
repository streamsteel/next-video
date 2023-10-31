// pages/index.tsx
import React from 'react';
import ClientSideVideoManager from '../components/ClientSideVideoManager';

const Home: React.FC = () => {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <ClientSideVideoManager />
    </main>
  );
};

export default Home;
