import { SpotifyError } from "./spotify";

type APIReturn<T> = Promise<
  | {
      data: T;
      errorResponse: null;
    }
  | {
      data: null;
      errorResponse: SpotifyResponseError;
    }
>;

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
  isLocal: boolean;
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

export * from "./spotify";
export type { APIReturn, HookReturn, Playlist, PlaylistTrack, Track };
