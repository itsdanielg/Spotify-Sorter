type APIResponse = 200 | 401 | 403 | 404 | 429;

type APIReturn = {
  data: any;
  error: boolean;
  response?: APIResponse;
};

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

export type { APIReturn, Playlist, PlaylistTrack, Track };
