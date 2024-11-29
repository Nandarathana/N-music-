import React, { useEffect } from 'react';
import { Player } from './components/Player/Player';
import { PlaylistView } from './components/Playlist/PlaylistView';
import { Music } from 'lucide-react';
import { useMusicStore } from './store/musicStore';

function App() {
  const initializeAudio = useMusicStore((state) => state.initializeAudio);

  useEffect(() => {
    initializeAudio();
  }, [initializeAudio]);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 w-full bg-gradient-to-b from-black to-transparent z-50 p-4">
        <div className="max-w-7xl mx-auto flex items-center space-x-2">
          <Music className="h-8 w-8 text-white" />
          <span className="text-2xl font-bold">N Music</span>
        </div>
      </header>

      <main className="pt-20 pb-32">
        <PlaylistView />
      </main>

      <Player />
    </div>
  );
}

export default App;