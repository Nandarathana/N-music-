import type { PlaylistType, Song } from '../types/music';

export const sampleSongs: Song[] = [
  {
    id: '1',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    album: 'A Night at the Opera',
    duration: 354,
    coverUrl: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=400',
    audioUrl: 'https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3'
  },
  {
    id: '2',
    title: 'Starlight',
    artist: 'Muse',
    album: 'Black Holes and Revelations',
    duration: 240,
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400',
    audioUrl: 'https://assets.mixkit.co/music/preview/mixkit-hip-hop-02-738.mp3'
  },
  {
    id: '3',
    title: 'Yellow',
    artist: 'Coldplay',
    album: 'Parachutes',
    duration: 269,
    coverUrl: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=400',
    audioUrl: 'https://assets.mixkit.co/music/preview/mixkit-sun-and-his-daughter-580.mp3'
  }
];

export const samplePlaylists: PlaylistType[] = [
  {
    id: 'p1',
    name: 'My Favorites',
    songs: sampleSongs
  },
  {
    id: 'p2',
    name: 'Rock Classics',
    songs: sampleSongs.slice(0, 2)
  }
];