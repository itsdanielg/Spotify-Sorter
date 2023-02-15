type Playlist = {
  id: string;
  name: string;
  imageURL: string;
  songs: Song[];
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
