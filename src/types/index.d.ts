type Playlist = {
  id: string;
  name: string;
  imageURL: string;
  songs: Song[];
};

type PlaylistSong = {
  id: string;
  index: number;
  song: Song;
  rearranged: boolean;
};

type Song = {
  title: string;
  artists: string[];
  album: string;
  albumURL: string;
  trackNumber: number;
  releaseDate: string;
  dateAdded: string;
  timeAdded: string;
};

export type { Playlist, PlaylistSong, Song };
