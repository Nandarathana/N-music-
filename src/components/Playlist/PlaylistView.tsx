import React from 'react';
import { Play, Pause } from 'lucide-react';
import { useMusicStore } from '../../store/musicStore';
import type { Song } from '../../types/music';

export function PlaylistView() {
  const { playlists, currentPlaylist, setCurrentPlaylist, currentSong, setCurrentSong, isPlaying } = useMusicStore();

  const handlePlaySong = (song: Song) => {
    setCurrentSong(song);
  };

  return (
    <div className="px-4 py-6">
      <div className="space-y-6">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="space-y-4">
            <h2 className="text-xl font-bold text-white">{playlist.name}</h2>
            <div className="space-y-2">
              {playlist.songs.map((song) => (
                <div
                  key={song.id}
                  className="flex items-center space-x-4 p-2 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
                  onClick={() => {
                    setCurrentPlaylist(playlist);
                    handlePlaySong(song);
                  }}
                >
                  <img
                    src={song.coverUrl}
                    alt={song.title}
                    className="w-12 h-12 rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{song.title}</h3>
                    <p className="text-gray-400 text-sm">{song.artist}</p>
                  </div>
                  {currentSong?.id === song.id && (
                    <div className="text-white">
                      {isPlaying ? (
                        <Pause className="h-5 w-5" />
                      ) : (
                        <Play className="h-5 w-5" />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}