type Playlist = {
  id: string;
  name: string;
  imageURL: string;
  owner: string;
  description: string;
  collaborative: boolean;
  isPublic: boolean;
};

type PlaylistTrack = {
  id: string;
  index: number;
  track: Track;
  rearranged: boolean;
};

type Track = {
  title: string;
  artists: string[];
  album: string;
  albumURL: string;
  trackNumber: number;
  releaseDate: string;
  dateAdded: string;
  timeAdded: string;
};

export type { Playlist, PlaylistTrack, Track };
