import React from 'react';
import { Volume2 } from 'lucide-react';
import { useMusicStore } from '../../store/musicStore';

export function VolumeControl() {
  const { volume, setVolume } = useMusicStore();

  return (
    <div className="flex items-center space-x-2">
      <Volume2 className="h-5 w-5 text-gray-400" />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        className="w-24 accent-white"
      />
    </div>
  );
}