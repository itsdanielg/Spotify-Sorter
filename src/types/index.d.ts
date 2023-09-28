import { SpotifyResponseSuccess, SpotifyError } from "./spotify";

export * from "./spotify";

type APIReturn = {
  data: SpotifyResponseSuccess | null;
  error: boolean;
  errorResponse?: SpotifyError;
};

type HookReturn<T> = {
  data: T | null;
  error: SpotifyError | null;
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

export type { APIReturn, HookReturn, Playlist, PlaylistTrack, Track };
