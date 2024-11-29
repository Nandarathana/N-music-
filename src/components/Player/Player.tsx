import React, { useEffect } from 'react';
import { Controls } from './Controls';
import { VolumeControl } from './VolumeControl';
import { NowPlaying } from './NowPlaying';
import { ProgressBar } from './ProgressBar';
import { useMusicStore } from '../../store/musicStore';

export function Player() {
  const { audioElement, currentSong, setCurrentSong, isPlaying } = useMusicStore();

  useEffect(() => {
    if (audioElement && currentSong) {
      audioElement.src = currentSong.audioUrl;
      if (isPlaying) {
        audioElement.play().catch(() => {
          // Handle autoplay restrictions
          setCurrentSong(currentSong);
        });
      }
    }
  }, [currentSong, audioElement, isPlaying, setCurrentSong]);

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black to-gray-900 p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4">
        <NowPlaying />
        <div className="space-y-2">
          <Controls />
          <ProgressBar />
        </div>
        <div className="flex justify-end items-center">
          <VolumeControl />
        </div>
      </div>
    </div>
  );
}