import React from 'react';
import { Heart } from 'lucide-react';
import { useMusicStore } from '../../store/musicStore';

export function NowPlaying() {
  const { currentSong } = useMusicStore();

  if (!currentSong) return null;

  return (
    <div className="flex items-center space-x-4">
      <img
        src={currentSong.coverUrl}
        alt={currentSong.title}
        className="w-14 h-14 rounded-md"
      />
      <div>
        <h3 className="text-sm font-medium text-white">{currentSong.title}</h3>
        <p className="text-xs text-gray-400">{currentSong.artist}</p>
      </div>
      <button className="text-gray-400 hover:text-white transition-colors">
        <Heart className="h-5 w-5" />
      </button>
    </div>
  );
}