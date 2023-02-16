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
  leftChanged?: boolean;
  rightChanged?: boolean;
};

type Song = {
  title: string;
  artist: string;
  album: string;
  albumURL: string;
  releaseDate: string;
  dateAdded: string;
};

export type { Playlist, PlaylistSong, Song };
