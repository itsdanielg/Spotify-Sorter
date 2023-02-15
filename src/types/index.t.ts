type Playlist = {
  name: string;
};

type PlaylistSong = {
  id: number;
  details: Song;
  rearranged: boolean;
  leftChanged?: boolean;
  rightChanged?: boolean;
};

type Song = {
  title: string;
  artist: string;
  album: string;
  albumCover: string;
  releaseDate: string;
  dateAdded: string;
};

export type { Playlist, PlaylistSong, Song };
