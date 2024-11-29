export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  coverUrl: string;
  audioUrl: string;
}

export interface PlaylistType {
  id: string;
  name: string;
  songs: Song[];
}