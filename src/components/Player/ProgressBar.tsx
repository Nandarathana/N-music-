import React, { useState, useEffect, useCallback } from 'react';
import { useMusicStore } from '../../store/musicStore';

export function ProgressBar() {
  const { currentSong, audioElement } = useMusicStore();
  const [progress, setProgress] = useState(0);

  const updateProgress = useCallback(() => {
    if (audioElement) {
      setProgress(audioElement.currentTime);
    }
  }, [audioElement]);

  useEffect(() => {
    if (audioElement) {
      audioElement.addEventListener('timeupdate', updateProgress);
      return () => audioElement.removeEventListener('timeupdate', updateProgress);
    }
  }, [audioElement, updateProgress]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioElement) {
      audioElement.currentTime = newTime;
      setProgress(newTime);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (!currentSong) return null;

  return (
    <div className="w-full space-y-2">
      <input
        type="range"
        min="0"
        max={currentSong.duration}
        value={progress}
        onChange={handleSeek}
        className="w-full h-1 bg-gray-600 rounded-full appearance-none cursor-pointer accent-white"
      />
      <div className="flex justify-between text-xs text-gray-400">
        <span>{formatTime(progress)}</span>
        <span>{formatTime(currentSong.duration)}</span>
      </div>
    </div>
  );
}