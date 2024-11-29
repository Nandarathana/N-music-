import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle } from 'lucide-react';
import { useMusicStore } from '../../store/musicStore';

export function Controls() {
  const { isPlaying, togglePlay, playNext, playPrevious } = useMusicStore();

  return (
    <div className="flex items-center justify-center space-x-4">
      <button className="text-gray-400 hover:text-white transition-colors">
        <Shuffle className="h-5 w-5" />
      </button>
      <button 
        onClick={playPrevious}
        className="text-gray-400 hover:text-white transition-colors"
      >
        <SkipBack className="h-5 w-5" />
      </button>
      <button
        onClick={togglePlay}
        className="bg-white rounded-full p-3 hover:scale-105 transition-transform"
      >
        {isPlaying ? (
          <Pause className="h-6 w-6 text-black" />
        ) : (
          <Play className="h-6 w-6 text-black" />
        )}
      </button>
      <button 
        onClick={playNext}
        className="text-gray-400 hover:text-white transition-colors"
      >
        <SkipForward className="h-5 w-5" />
      </button>
      <button className="text-gray-400 hover:text-white transition-colors">
        <Repeat className="h-5 w-5" />
      </button>
    </div>
  );
}