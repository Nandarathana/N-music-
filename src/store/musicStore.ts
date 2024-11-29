import { create } from 'zustand';
import type { Song, PlaylistType } from '../types/music';
import { samplePlaylists } from '../data/samplePlaylists';

interface MusicStore {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  queue: Song[];
  playlists: PlaylistType[];
  currentPlaylist: PlaylistType | null;
  audioElement: HTMLAudioElement | null;
  setCurrentSong: (song: Song) => void;
  togglePlay: () => void;
  setVolume: (volume: number) => void;
  addToQueue: (song: Song) => void;
  removeFromQueue: (songId: string) => void;
  playNext: () => void;
  playPrevious: () => void;
  setCurrentPlaylist: (playlist: PlaylistType) => void;
  initializeAudio: () => void;
}

export const useMusicStore = create<MusicStore>((set, get) => ({
  currentSong: null,
  isPlaying: false,
  volume: 1,
  queue: [],
  playlists: samplePlaylists,
  currentPlaylist: null,
  audioElement: null,

  initializeAudio: () => {
    const audio = new Audio();
    audio.volume = get().volume;
    
    // Handle audio ended event
    audio.addEventListener('ended', () => {
      const store = get();
      if (store.currentPlaylist) {
        store.playNext();
      }
    });

    set({ audioElement: audio });
  },

  setCurrentSong: (song) => {
    set({ currentSong: song, isPlaying: true });
  },

  togglePlay: () => {
    const { isPlaying, audioElement } = get();
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play().catch(console.error);
      }
      set({ isPlaying: !isPlaying });
    }
  },

  setVolume: (volume) => {
    const { audioElement } = get();
    if (audioElement) {
      audioElement.volume = volume;
    }
    set({ volume });
  },

  addToQueue: (song) => set((state) => ({ queue: [...state.queue, song] })),

  removeFromQueue: (songId) =>
    set((state) => ({
      queue: state.queue.filter((song) => song.id !== songId),
    })),

  playNext: () => {
    const { currentSong, currentPlaylist } = get();
    if (!currentPlaylist) return;

    const currentIndex = currentPlaylist.songs.findIndex(
      (song) => song.id === currentSong?.id
    );
    const nextSong = currentPlaylist.songs[currentIndex + 1];
    if (nextSong) {
      get().setCurrentSong(nextSong);
    }
  },

  playPrevious: () => {
    const { currentSong, currentPlaylist } = get();
    if (!currentPlaylist) return;

    const currentIndex = currentPlaylist.songs.findIndex(
      (song) => song.id === currentSong?.id
    );
    const previousSong = currentPlaylist.songs[currentIndex - 1];
    if (previousSong) {
      get().setCurrentSong(previousSong);
    }
  },

  setCurrentPlaylist: (playlist) => set({ currentPlaylist: playlist }),
}));